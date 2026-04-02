// 城市数据类型定义

export interface Attraction {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  image: string;
  rating: number;
  duration: string;
  ticket: string;
  ticketZh: string;
  tips: string[];
  tipsZh: string[];
}

export interface LocalFood {
  id: string;
  name: string;
  nameZh: string;
  description: string;
  descriptionZh: string;
  image: string;
  price: string;
  priceZh: string;
}

export interface City {
  id: string;
  name: string;
  nameZh: string;
  slug: string;
  description: string;
  descriptionZh: string;
  region: string;
  regionZh: string;
  image: string;
  bannerImage: string;
  rating: number;
  bestTimeToVisit: string;
  bestTimeToVisitZh: string;
  avgBudget: string;
  avgBudgetZh: string;
  highlights: string[];
  highlightsZh: string[];
  attractions: Attraction[];
  localFoods: LocalFood[];
  travelTips: string[];
  travelTipsZh: string[];
}

export interface TravelGuide {
  id: string;
  title: string;
  titleZh: string;
  cityId: string;
  duration: string;
  budget: string;
  budgetZh: string;
  content: string;
  contentZh: string;
  image: string;
  author: string;
  rating: number;
}

export interface GeneratedItinerary {
  id: string;
  title: string;
  cityId: string;
  cityName: string;
  days: number;
  dailyPlans: DailyPlan[];
  tips: string[];
  createdAt: string;
}

export interface DailyPlan {
  day: number;
  title: string;
  activities: Activity[];
}

export interface Activity {
  time: string;
  activity: string;
  location: string;
  description: string;
  tips?: string;
}
