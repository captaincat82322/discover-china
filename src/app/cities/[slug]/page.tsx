import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Star, Calendar, DollarSign, Clock, Ticket, Lightbulb, ArrowLeft, Share2, Heart, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getCityBySlug, cities } from '@/lib/cities-data';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.slug);
  
  if (!city) {
    return {
      title: 'City Not Found - Discover China',
    };
  }

  return {
    title: `${city.name} Travel Guide - Discover China`,
    description: city.description,
    openGraph: {
      title: `${city.name} Travel Guide - Discover China`,
      description: city.description,
      images: [city.bannerImage],
    },
  };
}

export default async function CityDetailPage({ params }: CityPageProps) {
  const resolvedParams = await params;
  const city = getCityBySlug(resolvedParams.slug);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${city.bannerImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link href="/cities">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cities
            </Button>
          </Link>
        </div>

        {/* Actions */}
        <div className="absolute top-6 right-6 flex gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        {/* City Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                {city.region}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span className="text-white font-semibold">{city.rating}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {city.name}
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mb-6">
              {city.description}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Best: {city.bestTimeToVisit}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span>Budget: {city.avgBudget}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{city.attractions.length} Top Attractions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Highlights */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {city.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-amber-50">
                      <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-semibold">{index + 1}</span>
                      </div>
                      <p className="text-slate-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Attractions */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Top Attractions</h2>
                <div className="space-y-6">
                  {city.attractions.map((attraction) => (
                    <div key={attraction.id} className="group">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-48 h-32 md:h-auto rounded-xl overflow-hidden flex-shrink-0">
                          <div 
                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                            style={{ backgroundImage: `url(${attraction.image})` }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900">{attraction.name}</h3>
                            <div className="flex items-center gap-1 px-2 py-1 bg-amber-100 rounded-full">
                              <Star className="w-4 h-4 text-amber-500 fill-current" />
                              <span className="text-sm font-semibold text-amber-700">{attraction.rating}</span>
                            </div>
                          </div>
                          <p className="text-slate-600 mb-3">{attraction.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{attraction.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Ticket className="w-4 h-4" />
                              <span>{attraction.ticket}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {attraction.tips.slice(0, 2).map((tip, i) => (
                              <span key={i} className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                                <Lightbulb className="w-3 h-3" />
                                {tip}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Separator className="my-6 last:hidden" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Local Food */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Utensils className="w-6 h-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-slate-900">Local Cuisine</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {city.localFoods.map((food) => (
                    <div key={food.id} className="group flex gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all">
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <div 
                          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                          style={{ backgroundImage: `url(${food.image})` }}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-1">{food.name}</h4>
                        <p className="text-sm text-slate-600 line-clamp-2 mb-2">{food.description}</p>
                        <span className="text-sm text-green-600 font-medium">{food.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plan Trip CTA */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500 to-orange-500">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Plan Your Trip</h3>
                <p className="text-white/90 text-sm mb-4">
                  Generate a personalized itinerary for {city.name}
                </p>
                <Link href={`/itinerary?city=${city.id}`}>
                  <Button className="w-full bg-white text-amber-600 hover:bg-amber-50">
                    Create Itinerary
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Travel Tips */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Travel Tips</h3>
                <ul className="space-y-3">
                  {city.travelTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs font-semibold">{index + 1}</span>
                      </div>
                      <span className="text-slate-600 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Ad Banner */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-purple-700">
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="text-xs font-semibold bg-white/20 rounded-full px-2 py-1 text-white w-fit">
                    Sponsored
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">China Tour Packages</h4>
                    <p className="text-white/80 text-sm mb-3">Book guided tours with local experts</p>
                    <Button size="sm" className="bg-white text-indigo-600 hover:bg-indigo-50">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Facts */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Best Time to Visit</span>
                    <span className="text-slate-900 font-medium">{city.bestTimeToVisit}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-slate-500">Daily Budget</span>
                    <span className="text-slate-900 font-medium">{city.avgBudget}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-slate-500">Region</span>
                    <span className="text-slate-900 font-medium">{city.region}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-slate-500">Attractions</span>
                    <span className="text-slate-900 font-medium">{city.attractions.length} top sites</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
