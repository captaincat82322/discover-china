import { NextRequest, NextResponse } from 'next/server';
import { LLMClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';
import { getCityById } from '@/lib/cities-data';

export async function POST(request: NextRequest) {
  try {
    const { cityId, days, interests, budget, travelStyle } = await request.json();

    const city = getCityById(cityId);
    if (!city) {
      return NextResponse.json({ error: 'City not found' }, { status: 404 });
    }

    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);
    const config = new Config();
    const client = new LLMClient(config, customHeaders);

    const systemPrompt = `You are an expert travel guide specializing in China tourism. Create detailed, personalized travel itineraries in English for Western tourists visiting China. 

Your itineraries should:
1. Be practical and realistic with timing
2. Include specific attractions with addresses
3. Recommend authentic local restaurants
4. Provide cultural insights and tips
5. Consider travel time between locations
6. Include morning, afternoon, and evening activities

Format your response as a structured JSON itinerary that can be parsed and displayed.`;

    const userPrompt = `Create a ${days}-day travel itinerary for ${city.name}, China.

City Information:
- Name: ${city.name} (${city.nameZh})
- Region: ${city.region}
- Description: ${city.description}
- Top Attractions: ${city.attractions.map(a => a.name).join(', ')}
- Local Foods: ${city.localFoods.map(f => f.name).join(', ')}

Traveler Preferences:
- Duration: ${days} days
- Interests: ${interests || 'General sightseeing, culture, food'}
- Budget: ${budget || 'Moderate'}
- Travel Style: ${travelStyle || 'Balanced (mix of sightseeing and relaxation)'}

Please create a detailed day-by-day itinerary in JSON format with this structure:
{
  "title": "Itinerary title",
  "summary": "Brief overview of the trip",
  "days": [
    {
      "day": 1,
      "title": "Day 1 title",
      "theme": "Theme of the day",
      "activities": [
        {
          "time": "09:00",
          "activity": "Activity name",
          "location": "Specific location",
          "description": "Detailed description",
          "duration": "2 hours",
          "tips": "Helpful tips"
        }
      ],
      "meals": {
        "breakfast": "Recommendation",
        "lunch": "Recommendation", 
        "dinner": "Recommendation"
      }
    }
  ],
  "tips": ["General travel tips for this itinerary"],
  "estimatedBudget": "Total estimated budget"
}

Make sure the itinerary is practical, includes real attractions and restaurants from the city, and provides authentic cultural experiences.`;

    const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ];

    // Create a TransformStream for SSE
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const llmStream = client.stream(messages, {
            model: 'doubao-seed-1-8-251228',
            temperature: 0.7,
          });

          for await (const chunk of llmStream) {
            if (chunk.content) {
              const text = chunk.content.toString();
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: text })}\n\n`));
            }
          }
          
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Failed to generate itinerary' })}\n\n`));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Itinerary generation error:', error);
    return NextResponse.json({ error: 'Failed to generate itinerary' }, { status: 500 });
  }
}
