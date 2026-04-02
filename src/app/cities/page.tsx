import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Star, Calendar, DollarSign, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cities } from '@/lib/cities-data';

export const metadata: Metadata = {
  title: 'All Destinations - Discover China',
  description: 'Explore all cities and destinations in China. Find your perfect travel destination with detailed guides and local insights.',
};

export default function CitiesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore All Destinations
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Discover China&apos;s diverse cities, each offering unique experiences from ancient wonders to modern marvels.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input 
                type="text"
                placeholder="Search cities by name, region, or attraction..."
                className="pl-12 h-14 bg-white border-0 rounded-xl text-slate-900 placeholder:text-slate-500 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">All Regions</Button>
            <Button variant="outline" className="text-slate-600">North China</Button>
            <Button variant="outline" className="text-slate-600">East China</Button>
            <Button variant="outline" className="text-slate-600">South China</Button>
            <Button variant="outline" className="text-slate-600">Southwest</Button>
            <Button variant="outline" className="text-slate-600">Northwest</Button>
          </div>

          {/* Cities List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link key={city.id} href={`/cities/${city.slug}`}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                  <div className="relative h-56">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${city.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <Star className="w-4 h-4 text-amber-500 fill-current" />
                      <span className="text-sm font-semibold text-slate-900">{city.rating}</span>
                    </div>

                    {/* Region Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white">
                        {city.region}
                      </span>
                    </div>

                    <CardContent className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                      <p className="text-sm text-white/80 line-clamp-2">{city.description}</p>
                    </CardContent>
                  </div>

                  {/* Info Bar */}
                  <div className="p-5 bg-white">
                    <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-amber-500" />
                        <span>{city.bestTimeToVisit}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-slate-600">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{city.avgBudget}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{city.attractions.length} attractions</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 p-8 md:p-12">
            <div className="relative z-10 max-w-xl">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full text-white mb-4">
                Sponsored
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Book China Hotels with Confidence
              </h3>
              <p className="text-indigo-100 mb-6">
                Find and book the best hotels across China with free cancellation and best price guarantee.
              </p>
              <Button className="bg-white text-indigo-700 hover:bg-indigo-50">
                Search Hotels
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
