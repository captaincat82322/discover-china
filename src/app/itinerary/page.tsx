'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, MapPin, Calendar, DollarSign, Sparkles, Loader2, Download, Share2, Clock, Utensils, Lightbulb } from 'lucide-react';
import { cities } from '@/lib/cities-data';

interface Activity {
  time: string;
  activity: string;
  location: string;
  description: string;
  duration?: string;
  tips?: string;
}

interface DayPlan {
  day: number;
  title: string;
  theme?: string;
  activities: Activity[];
  meals?: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
}

interface Itinerary {
  title: string;
  summary: string;
  days: DayPlan[];
  tips: string[];
  estimatedBudget?: string;
}

function ItineraryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCity, setSelectedCity] = useState(searchParams.get('city') || '');
  const [days, setDays] = useState('3');
  const [interests, setInterests] = useState('');
  const [budget, setBudget] = useState('moderate');
  const [travelStyle, setTravelStyle] = useState('balanced');
  const [isGenerating, setIsGenerating] = useState(false);
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [rawContent, setRawContent] = useState('');
  const [error, setError] = useState('');
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const city = searchParams.get('city');
    if (city) {
      setSelectedCity(city);
    }
  }, [searchParams]);

  const parseItinerary = (content: string): Itinerary | null => {
    try {
      // Try to extract JSON from the content
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch {
      // If parsing fails, return null and show raw content
      console.log('Could not parse itinerary as JSON');
    }
    return null;
  };

  const handleGenerate = async () => {
    if (!selectedCity) {
      setError('Please select a city');
      return;
    }

    setIsGenerating(true);
    setError('');
    setItinerary(null);
    setRawContent('');

    // Create abort controller for this request
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch('/api/itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cityId: selectedCity,
          days: parseInt(days),
          interests,
          budget,
          travelStyle,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error('Failed to generate itinerary');
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.content) {
                fullContent += data.content;
                setRawContent(fullContent);
              }
              if (data.error) {
                setError(data.error);
              }
            } catch {
              // Skip invalid JSON
            }
          }
        }
      }

      // Try to parse the final content
      const parsed = parseItinerary(fullContent);
      if (parsed) {
        setItinerary(parsed);
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        console.log('Request aborted');
      } else {
        setError('Failed to generate itinerary. Please try again.');
        console.error(err);
      }
    } finally {
      setIsGenerating(false);
      abortControllerRef.current = null;
    }
  };

  const handleCancel = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  const selectedCityData = cities.find(c => c.id === selectedCity);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/cities" className="inline-flex items-center text-white/90 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cities
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">AI Itinerary Generator</h1>
              <p className="text-white/90">Create your personalized China travel plan in seconds</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-6">
              <CardHeader>
                <CardTitle>Plan Your Trip</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* City Selection */}
                <div className="space-y-2">
                  <Label htmlFor="city">Destination City *</Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map(city => (
                        <SelectItem key={city.id} value={city.id}>
                          {city.name} - {city.region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <Label htmlFor="days">Trip Duration</Label>
                  <Select value={days} onValueChange={setDays}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Day</SelectItem>
                      <SelectItem value="2">2 Days</SelectItem>
                      <SelectItem value="3">3 Days</SelectItem>
                      <SelectItem value="4">4 Days</SelectItem>
                      <SelectItem value="5">5 Days</SelectItem>
                      <SelectItem value="7">1 Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Level</Label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Budget ($30-50/day)</SelectItem>
                      <SelectItem value="moderate">Moderate ($50-100/day)</SelectItem>
                      <SelectItem value="luxury">Luxury ($150+/day)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Travel Style */}
                <div className="space-y-2">
                  <Label htmlFor="style">Travel Style</Label>
                  <Select value={travelStyle} onValueChange={setTravelStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relaxed">Relaxed (slower pace)</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="intensive">Intensive (see everything)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Interests */}
                <div className="space-y-2">
                  <Label htmlFor="interests">Special Interests (Optional)</Label>
                  <Textarea
                    id="interests"
                    placeholder="e.g., History, food, photography, hiking..."
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    rows={3}
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <Button 
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                  onClick={handleGenerate}
                  disabled={isGenerating || !selectedCity}
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Itinerary
                    </>
                  )}
                </Button>

                {isGenerating && (
                  <Button variant="outline" className="w-full" onClick={handleCancel}>
                    Cancel
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Ad Banner */}
            <Card className="border-0 shadow-lg mt-6 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-white/20 rounded text-white mb-3">
                  Sponsored
                </span>
                <h4 className="text-lg font-bold text-white mb-2">China Visa Services</h4>
                <p className="text-blue-100 text-sm mb-4">Fast and reliable visa processing for your China trip</p>
                <Button size="sm" className="bg-white text-blue-700 hover:bg-blue-50">
                  Apply Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {!isGenerating && !itinerary && !rawContent && (
              <Card className="border-0 shadow-lg">
                <CardContent className="p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-slate-100 flex items-center justify-center">
                    <MapPin className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Your Personalized Itinerary Awaits
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Select your destination and preferences, then let our AI create a detailed travel plan tailored just for you.
                  </p>
                  {selectedCityData && (
                    <div className="mt-6 p-4 bg-amber-50 rounded-lg inline-block">
                      <p className="text-amber-800">
                        <strong>{selectedCityData.name}</strong> - {selectedCityData.attractions.length} attractions available
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {(isGenerating || rawContent) && (
              <div className="space-y-6">
                {isGenerating && (
                  <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                    <Loader2 className="w-5 h-5 text-amber-600 animate-spin" />
                    <span className="text-amber-800">Generating your personalized itinerary...</span>
                  </div>
                )}

                {itinerary ? (
                  <Card className="border-0 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{itinerary.title}</CardTitle>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </div>
                      {itinerary.summary && (
                        <p className="text-slate-600 mt-2">{itinerary.summary}</p>
                      )}
                      {itinerary.estimatedBudget && (
                        <div className="flex items-center gap-2 mt-3">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-slate-600">Estimated Budget: {itinerary.estimatedBudget}</span>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {itinerary.days.map((dayPlan) => (
                          <div key={dayPlan.day} className="relative">
                            <div className="sticky top-0 bg-slate-50 py-2 z-10">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                                  {dayPlan.day}
                                </div>
                                <div>
                                  <h3 className="font-bold text-slate-900">{dayPlan.title}</h3>
                                  {dayPlan.theme && (
                                    <Badge variant="secondary">{dayPlan.theme}</Badge>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="ml-12 mt-4 space-y-4">
                              {dayPlan.activities.map((activity, idx) => (
                                <div key={idx} className="relative pl-6 pb-4 border-l-2 border-slate-200">
                                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-amber-500" />
                                  <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                                    <div className="flex items-start justify-between mb-2">
                                      <div>
                                        <span className="text-sm text-amber-600 font-medium">{activity.time}</span>
                                        <h4 className="font-semibold text-slate-900">{activity.activity}</h4>
                                      </div>
                                      {activity.duration && (
                                        <Badge variant="outline" className="text-slate-500">
                                          <Clock className="w-3 h-3 mr-1" />
                                          {activity.duration}
                                        </Badge>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-slate-500 mb-2">
                                      <MapPin className="w-3 h-3" />
                                      {activity.location}
                                    </div>
                                    <p className="text-sm text-slate-600">{activity.description}</p>
                                    {activity.tips && (
                                      <div className="mt-2 flex items-start gap-2 text-xs text-amber-700 bg-amber-50 p-2 rounded">
                                        <Lightbulb className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                        {activity.tips}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}

                              {dayPlan.meals && (
                                <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Utensils className="w-4 h-4 text-orange-500" />
                                    <span className="font-medium text-slate-900">Meals</span>
                                  </div>
                                  <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div>
                                      <span className="text-slate-500">Breakfast:</span>
                                      <p className="text-slate-700">{dayPlan.meals.breakfast}</p>
                                    </div>
                                    <div>
                                      <span className="text-slate-500">Lunch:</span>
                                      <p className="text-slate-700">{dayPlan.meals.lunch}</p>
                                    </div>
                                    <div>
                                      <span className="text-slate-500">Dinner:</span>
                                      <p className="text-slate-700">{dayPlan.meals.dinner}</p>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            {dayPlan.day < itinerary.days.length && (
                              <Separator className="my-6" />
                            )}
                          </div>
                        ))}

                        {/* Tips Section */}
                        {itinerary.tips && itinerary.tips.length > 0 && (
                          <div className="bg-blue-50 rounded-lg p-6">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                              <Lightbulb className="w-5 h-5 text-blue-500" />
                              Travel Tips
                            </h3>
                            <ul className="space-y-2">
                              {itinerary.tips.map((tip, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                  <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 text-xs">
                                    {idx + 1}
                                  </span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ) : rawContent ? (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <pre className="whitespace-pre-wrap text-sm text-slate-700 font-mono">
                        {rawContent}
                      </pre>
                    </CardContent>
                  </Card>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ItineraryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
      </div>
    }>
      <ItineraryContent />
    </Suspense>
  );
}
