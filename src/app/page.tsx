import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, MapPin, Calendar, Compass, Star, ArrowRight, Sparkles, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cities, getFeaturedCities } from '@/lib/cities-data';

export const metadata: Metadata = {
  title: 'Discover China - Your Ultimate China Travel Guide',
  description: 'Explore the wonders of China with comprehensive travel guides, city recommendations, and personalized itinerary planning. From the Great Wall to the Li River, discover China\'s most breathtaking destinations.',
  keywords: ['China travel', 'China tourism', 'Beijing', 'Shanghai', 'Great Wall', 'Terracotta Warriors', 'China guide', 'China itinerary'],
  openGraph: {
    title: 'Discover China - Your Ultimate China Travel Guide',
    description: 'Explore the wonders of China with comprehensive travel guides and personalized itinerary planning.',
    type: 'website',
  },
};

export default function Home() {
  const featuredCities = getFeaturedCities(4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Your Gateway to Ancient & Modern China</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover the Wonders of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                China
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              From the majestic Great Wall to the serene Li River, explore China&apos;s most breathtaking destinations with expert guides, local insights, and personalized travel itineraries.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input 
                  type="text"
                  placeholder="Search cities, attractions, or experiences..."
                  className="pl-12 h-14 bg-white/95 border-0 rounded-xl text-slate-900 placeholder:text-slate-500 text-lg"
                />
              </div>
              <Link href="/cities">
                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl text-lg font-semibold shadow-lg shadow-orange-500/25">
                  <Compass className="w-5 h-5 mr-2" />
                  Explore All
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>50+ Destinations</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>AI Itinerary Generator</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Star className="w-5 h-5 text-amber-400" />
                <span>Expert Local Guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Featured Destinations
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Discover China&apos;s most iconic cities, each offering a unique blend of ancient history and modern marvels.
              </p>
            </div>
            <Link href="/cities" className="mt-4 md:mt-0">
              <Button variant="outline" className="text-amber-600 border-amber-200 hover:bg-amber-50">
                View All Cities
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCities.map((city, index) => (
              <Link key={city.id} href={`/cities/${city.slug}`}>
                <Card className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                  <div className={`relative ${index === 0 ? 'h-80 md:h-full' : 'h-48'}`}>
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${city.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    <CardContent className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                          {city.region}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm text-white">{city.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {city.name}
                      </h3>
                      <p className="text-sm text-white/80 line-clamp-2">
                        {city.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner 1 */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 p-8 md:p-12">
            <div className="relative z-10 max-w-xl">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full text-white mb-4">
                Featured City
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Beijing - China&apos;s Ancient Capital
              </h3>
              <p className="text-red-100 mb-6">
                Discover the Great Wall, Forbidden City, and Temple of Heaven. Experience authentic Peking Duck and explore 3,000 years of imperial history.
              </p>
              <Link href="/cities/beijing">
                <Button className="bg-white text-red-700 hover:bg-red-50">
                  Explore Beijing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Travel with Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide everything you need for an unforgettable China adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Expert Local Insights
                </h3>
                <p className="text-slate-600">
                  Get insider tips from locals who know every hidden gem and authentic experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  AI-Powered Itineraries
                </h3>
                <p className="text-slate-600">
                  Generate personalized travel itineraries based on your preferences and travel style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Complete Travel Guide
                </h3>
                <p className="text-slate-600">
                  From visa tips to local food recommendations, we cover everything for your trip.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Cities Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore More Cities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each city offers a unique window into China&apos;s rich culture and stunning landscapes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <Link key={city.id} href={`/cities/${city.slug}`}>
                <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-32">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${city.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-sm font-semibold text-white truncate">{city.name}</p>
                      <p className="text-xs text-white/70">{city.region}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/cities">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                View All Destinations
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Banner 2 - Sidebar Style */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="border-0 shadow-md bg-white h-full">
                <CardContent className="p-8">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-full mb-4">
                    Travel Tip
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Best Time to Visit China
                  </h3>
                  <p className="text-slate-600 mb-4">
                    The ideal time to visit China is during spring (April-May) and autumn (September-October) when the weather is pleasant and natural scenery is at its most beautiful.
                  </p>
                  <Link href="/itinerary">
                    <Button variant="outline" className="border-amber-200 text-amber-600 hover:bg-amber-50">
                      Plan Your Trip
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="border-0 shadow-md bg-gradient-to-br from-rose-500 to-pink-600 h-full">
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full text-white mb-4">
                    Sponsored
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    China Travel Insurance
                  </h3>
                  <p className="text-rose-100 text-sm mb-4">
                    Protect your journey with comprehensive coverage from our trusted partner.
                  </p>
                  <Button size="sm" className="bg-white text-rose-600 hover:bg-rose-50">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Discover China</h3>
              <p className="text-slate-400 mb-4 max-w-md">
                Your trusted guide to exploring China&apos;s magnificent destinations. We provide comprehensive travel guides, local insights, and AI-powered itinerary planning.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/cities" className="hover:text-amber-400 transition-colors">All Cities</Link></li>
                <li><Link href="/itinerary" className="hover:text-amber-400 transition-colors">Plan Trip</Link></li>
                <li><Link href="#" className="hover:text-amber-400 transition-colors">Travel Tips</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Popular Destinations</h4>
              <ul className="space-y-2">
                <li><Link href="/cities/beijing" className="hover:text-amber-400 transition-colors">Beijing</Link></li>
                <li><Link href="/cities/shanghai" className="hover:text-amber-400 transition-colors">Shanghai</Link></li>
                <li><Link href="/cities/xian" className="hover:text-amber-400 transition-colors">Xi&apos;an</Link></li>
                <li><Link href="/cities/chengdu" className="hover:text-amber-400 transition-colors">Chengdu</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
            <p>© 2024 Discover China. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
