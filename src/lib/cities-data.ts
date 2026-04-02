import { City } from './types';

export const cities: City[] = [
  {
    id: 'beijing',
    name: 'Beijing',
    nameZh: '北京',
    slug: 'beijing',
    description: 'China\'s capital city, home to the Great Wall, Forbidden City, and rich imperial history spanning over 3,000 years.',
    descriptionZh: '中国首都，拥有长城、故宫等众多历史遗迹，3000多年的建城史。',
    region: 'North China',
    regionZh: '华北地区',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/800px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
    rating: 4.9,
    bestTimeToVisit: 'April-May, September-October',
    bestTimeToVisitZh: '4-5月、9-10月',
    avgBudget: '$80-150/day',
    avgBudgetZh: '500-1000元/天',
    highlights: [
      'Walk the iconic Great Wall of China',
      'Explore the magnificent Forbidden City',
      'Experience authentic Peking Duck',
      'Discover the Temple of Heaven'
    ],
    highlightsZh: [
      '漫步万里长城',
      '探索宏伟故宫',
      '品尝正宗北京烤鸭',
      '探访天坛公园'
    ],
    attractions: [
      {
        id: 'great-wall',
        name: 'Great Wall of China',
        nameZh: '长城',
        description: 'One of the most iconic structures in human history, stretching over 13,000 miles across northern China.',
        descriptionZh: '人类历史上最具标志性的建筑之一，绵延超过13,000英里。',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
        rating: 5.0,
        duration: '4-6 hours',
        ticket: 'CNY 40-60 ($6-9)',
        ticketZh: '40-60元',
        tips: [
          'Visit Mutianyu section for fewer crowds',
          'Wear comfortable hiking shoes',
          'Bring water and snacks'
        ],
        tipsZh: [
          '推荐慕田峪段，游客较少',
          '穿舒适的登山鞋',
          '带好水和零食'
        ]
      },
      {
        id: 'forbidden-city',
        name: 'Forbidden City',
        nameZh: '故宫',
        description: 'The largest ancient palatial structure in the world, serving as the imperial palace for 24 emperors.',
        descriptionZh: '世界上最大的古代宫殿建筑群，曾是24位皇帝的皇宫。',
        image: 'https://images.unsplash.com/photo-1584997149516-ee5e5b2e8d66?w=800&q=80',
        rating: 4.9,
        duration: '3-4 hours',
        ticket: 'CNY 60 ($9)',
        ticketZh: '60元',
        tips: [
          'Book tickets online in advance',
          'Enter from Meridian Gate',
          'Audio guides available in multiple languages'
        ],
        tipsZh: [
          '提前网上预约门票',
          '从午门进入',
          '提供多语言讲解器'
        ]
      },
      {
        id: 'temple-of-heaven',
        name: 'Temple of Heaven',
        nameZh: '天坛',
        description: 'A masterpiece of Chinese architecture where emperors prayed for good harvests.',
        descriptionZh: '中国建筑的杰作，皇帝在此祈求丰收。',
        image: 'https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?w=800&q=80',
        rating: 4.7,
        duration: '2-3 hours',
        ticket: 'CNY 34 ($5)',
        ticketZh: '34元',
        tips: [
          'Visit early morning to see locals exercising',
          'Don\'t miss the Echo Wall',
          'Great for photography'
        ],
        tipsZh: [
          '清晨参观可以看到当地人晨练',
          '不要错过回音壁',
          '非常适合拍照'
        ]
      }
    ],
    localFoods: [
      {
        id: 'peking-duck',
        name: 'Peking Duck',
        nameZh: '北京烤鸭',
        description: 'The city\'s most famous dish, featuring crispy skin and tender meat served with pancakes, scallions, and hoisin sauce.',
        descriptionZh: '北京最著名的美食，皮脆肉嫩，配薄饼、葱丝和甜面酱。',
        image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=800&q=80',
        price: '$20-50 per duck',
        priceZh: '150-350元/只'
      },
      {
        id: 'zhajiangmian',
        name: 'Zhajiangmian',
        nameZh: '炸酱面',
        description: 'Traditional Beijing noodles with savory bean sauce, cucumber, and bean sprouts.',
        descriptionZh: '传统北京面条，配肉末炸酱、黄瓜丝和豆芽。',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
        price: '$3-5 per bowl',
        priceZh: '20-35元/碗'
      }
    ],
    travelTips: [
      'Use the Beijing subway for convenient travel',
      'Many attractions require advance booking',
      'Download Alipay or WeChat Pay for payments',
      'Hire a local guide for deeper cultural insights'
    ],
    travelTipsZh: [
      '乘坐北京地铁出行方便',
      '很多景点需要提前预约',
      '下载支付宝或微信支付',
      '聘请当地导游深入了解文化'
    ]
  },
  {
    id: 'shanghai',
    name: 'Shanghai',
    nameZh: '上海',
    slug: 'shanghai',
    description: 'China\'s most modern metropolis, blending colonial architecture with futuristic skyscrapers along the Huangpu River.',
    descriptionZh: '中国最现代的大都市，外滩的殖民建筑与陆家嘴的摩天大楼交相辉映。',
    region: 'East China',
    regionZh: '华东地区',
    image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=1600&q=80',
    rating: 4.8,
    bestTimeToVisit: 'March-May, September-November',
    bestTimeToVisitZh: '3-5月、9-11月',
    avgBudget: '$100-200/day',
    avgBudgetZh: '600-1200元/天',
    highlights: [
      'Stroll along the historic Bund waterfront',
      'Visit the futuristic Shanghai Tower',
      'Experience traditional Yuyuan Garden',
      'Explore trendy Xintiandi district'
    ],
    highlightsZh: [
      '漫步历史悠久的上海外滩',
      '参观未来感十足的上海中心大厦',
      '体验传统的豫园',
      '探索时尚的新天地'
    ],
    attractions: [
      {
        id: 'the-bund',
        name: 'The Bund',
        nameZh: '外滩',
        description: 'A spectacular waterfront promenade featuring 52 colonial-era buildings with stunning views of Pudong skyline.',
        descriptionZh: '壮观的外滩步道，52栋殖民时期建筑与浦东天际线相映成趣。',
        image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&q=80',
        rating: 4.8,
        duration: '2-3 hours',
        ticket: 'Free',
        ticketZh: '免费',
        tips: [
          'Best visited at sunset and evening',
          'Great photography opportunities',
          'Many riverside cafes and bars'
        ],
        tipsZh: [
          '傍晚和晚上最佳',
          '绝佳的摄影机会',
          '有很多滨江咖啡馆和酒吧'
        ]
      },
      {
        id: 'shanghai-tower',
        name: 'Shanghai Tower',
        nameZh: '上海中心大厦',
        description: 'The world\'s third-tallest building with an observation deck offering 360-degree city views.',
        descriptionZh: '世界第三高楼，观景台可360度俯瞰城市。',
        image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800&q=80',
        rating: 4.7,
        duration: '1-2 hours',
        ticket: 'CNY 180 ($26)',
        ticketZh: '180元',
        tips: [
          'Book tickets online for discounts',
          'Visit on clear days for best views',
          'Experience the world\'s fastest elevator'
        ],
        tipsZh: [
          '网上购票有优惠',
          '晴天参观视野最佳',
          '体验世界最快电梯'
        ]
      },
      {
        id: 'yuyuan-garden',
        name: 'Yu Garden',
        nameZh: '豫园',
        description: 'A beautiful classical Chinese garden dating back to the Ming Dynasty, featuring traditional architecture and serene ponds.',
        descriptionZh: '美丽的古典中式园林，始建于明代，有传统建筑和宁静的池塘。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
        rating: 4.5,
        duration: '2-3 hours',
        ticket: 'CNY 40 ($6)',
        ticketZh: '40元',
        tips: [
          'Visit early to avoid crowds',
          'Explore the surrounding bazaar',
          'Try local snacks nearby'
        ],
        tipsZh: [
          '早上去避开人群',
          '探索周边的豫园商城',
          '品尝附近的小吃'
        ]
      }
    ],
    localFoods: [
      {
        id: 'xiao-long-bao',
        name: 'Xiao Long Bao',
        nameZh: '小笼包',
        description: 'Delicate soup dumplings filled with pork and rich broth, Shanghai\'s signature dish.',
        descriptionZh: '精致的汤汁饺子，内馅是猪肉和浓郁的高汤，上海的招牌美食。',
        image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80',
        price: '$5-10 per basket',
        priceZh: '30-60元/笼'
      },
      {
        id: 'sheng-jian-bao',
        name: 'Shengjian Bao',
        nameZh: '生煎包',
        description: 'Pan-fried pork buns with crispy bottom and juicy filling, a Shanghai street food favorite.',
        descriptionZh: '生煎包子，底脆汁多，上海街头美食的最爱。',
        image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
        price: '$3-5 per serving',
        priceZh: '15-30元/份'
      }
    ],
    travelTips: [
      'Shanghai has excellent public transportation',
      'Many international brands and restaurants available',
      'Best nightlife in mainland China',
      'Combine with nearby water towns for day trips'
    ],
    travelTipsZh: [
      '上海公共交通发达',
      '有很多国际品牌和餐厅',
      '中国大陆夜生活最丰富的城市',
      '可以结合周边水乡古镇一日游'
    ]
  },
  {
    id: 'xian',
    name: 'Xi\'an',
    nameZh: '西安',
    slug: 'xian',
    description: 'The ancient capital of 13 dynasties, home to the world-famous Terracotta Army and the starting point of the Silk Road.',
    descriptionZh: '十三朝古都，举世闻名的兵马俑所在地，丝绸之路的起点。',
    region: 'Northwest China',
    regionZh: '西北地区',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Terracotta_Army_Xi%27an_All_Figures.jpg/800px-Terracotta_Army_Xi%27an_All_Figures.jpg',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Terracotta_Army_Xi%27an_All_Figures.jpg/1280px-Terracotta_Army_Xi%27an_All_Figures.jpg',
    rating: 4.8,
    bestTimeToVisit: 'March-May, September-November',
    bestTimeToVisitZh: '3-5月、9-11月',
    avgBudget: '$60-120/day',
    avgBudgetZh: '400-800元/天',
    highlights: [
      'Witness the incredible Terracotta Warriors',
      'Walk or cycle the ancient City Wall',
      'Explore the vibrant Muslim Quarter',
      'Visit the Big Wild Goose Pagoda'
    ],
    highlightsZh: [
      '见证令人惊叹的兵马俑',
      '骑行或漫步古城墙',
      '探索热闹的回民街',
      '参观大雁塔'
    ],
    attractions: [
      {
        id: 'terracotta-warriors',
        name: 'Terracotta Army',
        nameZh: '兵马俑',
        description: 'A UNESCO World Heritage Site featuring thousands of life-size clay soldiers guarding Emperor Qin\'s tomb.',
        descriptionZh: '联合国教科文组织世界遗产，数千个真人大小的陶俑守护着秦始皇陵。',
        image: 'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800&q=80',
        rating: 5.0,
        duration: '3-4 hours',
        ticket: 'CNY 120 ($17)',
        ticketZh: '120元',
        tips: [
          'Hire a guide for historical context',
          'Visit Pit 1 first for the most impressive view',
          'Allow extra time for the museum'
        ],
        tipsZh: [
          '请导游讲解历史背景',
          '先看一号坑，最壮观',
          '留出时间参观博物馆'
        ]
      },
      {
        id: 'city-wall',
        name: 'Ancient City Wall',
        nameZh: '古城墙',
        description: 'The best-preserved city wall in China, offering stunning views and bike rides along the 14km perimeter.',
        descriptionZh: '中国保存最完好的城墙，可在14公里城墙上骑行，欣赏美景。',
        image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=800&q=80',
        rating: 4.7,
        duration: '2-3 hours',
        ticket: 'CNY 54 ($8)',
        ticketZh: '54元',
        tips: [
          'Rent a bike to cycle the entire wall',
          'Visit at sunset for magical views',
          'South Gate is the most popular entrance'
        ],
        tipsZh: [
          '租车骑行完整城墙',
          '傍晚参观景色迷人',
          '南门是最受欢迎的入口'
        ]
      },
      {
        id: 'muslim-quarter',
        name: 'Muslim Quarter',
        nameZh: '回民街',
        description: 'A vibrant food street with halal delicacies, traditional crafts, and the Great Mosque.',
        descriptionZh: '充满活力的美食街，有清真美食、传统手工艺品和清真大寺。',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
        rating: 4.5,
        duration: '2-3 hours',
        ticket: 'Free',
        ticketZh: '免费',
        tips: [
          'Best visited in the evening',
          'Try yangrou paomo (bread soaked in lamb soup)',
          'Visit the Great Mosque nearby'
        ],
        tipsZh: [
          '晚上最佳',
          '一定要尝羊肉泡馍',
          '顺便参观清真大寺'
        ]
      }
    ],
    localFoods: [
      {
        id: 'yangrou-paomo',
        name: 'Yangrou Paomo',
        nameZh: '羊肉泡馍',
        description: 'A signature Xi\'an dish of crumbled flatbread soaked in aromatic lamb soup.',
        descriptionZh: '西安招牌美食，掰碎的馍泡在香浓的羊肉汤里。',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80',
        price: '$5-8 per bowl',
        priceZh: '30-50元/碗'
      },
      {
        id: 'roujiamo',
        name: 'Roujiamo',
        nameZh: '肉夹馍',
        description: 'Chinese-style hamburger with chopped meat stuffed in a crispy bun.',
        descriptionZh: '中式汉堡，酥脆的白吉馍夹着剁碎的肉。',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80',
        price: '$2-4 per piece',
        priceZh: '10-25元/个'
      }
    ],
    travelTips: [
      'Stay near the City Wall for easy access to attractions',
      'Book Terracotta Army tickets in advance',
      'Allow 2-3 days to explore the city properly',
      'Don\'t miss the Tang Dynasty night show'
    ],
    travelTipsZh: [
      '住在城墙附近，方便游览景点',
      '提前预订兵马俑门票',
      '安排2-3天时间充分游览',
      '不要错过大唐不夜城表演'
    ]
  },
  {
    id: 'chengdu',
    name: 'Chengdu',
    nameZh: '成都',
    slug: 'chengdu',
    description: 'The hometown of giant pandas and Sichuan cuisine, known for its relaxed lifestyle and vibrant teahouse culture.',
    descriptionZh: '大熊猫的故乡和川菜之都，以悠闲的生活节奏和丰富的茶馆文化闻名。',
    region: 'Southwest China',
    regionZh: '西南地区',
    image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1600&q=80',
    rating: 4.7,
    bestTimeToVisit: 'March-June, September-November',
    bestTimeToVisitZh: '3-6月、9-11月',
    avgBudget: '$50-100/day',
    avgBudgetZh: '300-600元/天',
    highlights: [
      'Meet adorable giant pandas at the research base',
      'Taste authentic spicy Sichuan hotpot',
      'Experience traditional Sichuan opera face-changing',
      'Relax in historic teahouses'
    ],
    highlightsZh: [
      '在熊猫基地与可爱的大熊猫见面',
      '品尝正宗的四川麻辣火锅',
      '观赏传统川剧变脸表演',
      '在历史悠久的茶馆放松身心'
    ],
    attractions: [
      {
        id: 'panda-base',
        name: 'Giant Panda Breeding Base',
        nameZh: '大熊猫繁育研究基地',
        description: 'A conservation center where you can see pandas of all ages in a natural habitat.',
        descriptionZh: '保护中心，可以在自然栖息地观赏各个年龄段的大熊猫。',
        image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80',
        rating: 4.9,
        duration: '3-4 hours',
        ticket: 'CNY 55 ($8)',
        ticketZh: '55元',
        tips: [
          'Arrive early morning when pandas are most active',
          'Visit during feeding time for best photo ops',
          'Don\'t miss the red pandas'
        ],
        tipsZh: [
          '早上到达，熊猫最活跃',
          '喂食时间拍照最佳',
          '不要错过小熊猫'
        ]
      },
      {
        id: 'jinli-street',
        name: 'Jinli Ancient Street',
        nameZh: '锦里古街',
        description: 'A historic pedestrian street with traditional architecture, local snacks, and cultural performances.',
        descriptionZh: '历史悠久的步行街，有传统建筑、当地小吃和文化表演。',
        image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=800&q=80',
        rating: 4.4,
        duration: '2-3 hours',
        ticket: 'Free',
        ticketZh: '免费',
        tips: [
          'Best visited in the evening with lantern lights',
          'Try local snacks like rabbit heads',
          'Watch for Sichuan opera performances'
        ],
        tipsZh: [
          '傍晚灯笼亮起时最佳',
          '尝试兔头等当地小吃',
          '留意川剧表演'
        ]
      },
      {
        id: 'wenshu-monastery',
        name: 'Wenshu Monastery',
        nameZh: '文殊院',
        description: 'A serene Buddhist temple complex with beautiful gardens and traditional teahouse.',
        descriptionZh: '宁静的佛教寺庙建筑群，有美丽的花园和传统茶馆。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
        rating: 4.6,
        duration: '1-2 hours',
        ticket: 'Free',
        ticketZh: '免费',
        tips: [
          'Experience traditional tea culture',
          'Try the vegetarian restaurant',
          'Observe local worshippers'
        ],
        tipsZh: [
          '体验传统茶文化',
          '品尝素斋',
          '观察当地人礼佛'
        ]
      }
    ],
    localFoods: [
      {
        id: 'sichuan-hotpot',
        name: 'Sichuan Hotpot',
        nameZh: '四川火锅',
        description: 'A fiery communal dining experience with bubbling spicy broth and variety of ingredients.',
        descriptionZh: '热辣的聚餐体验，沸腾的辣汤底配各种食材。',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
        price: '$15-30 per person',
        priceZh: '100-200元/人'
      },
      {
        id: 'mapo-tofu',
        name: 'Mapo Tofu',
        nameZh: '麻婆豆腐',
        description: 'Silky tofu in a spicy, numbing sauce with minced meat - a classic Sichuan dish.',
        descriptionZh: '麻辣鲜香的豆腐配肉末，经典川菜。',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80',
        price: '$3-6 per dish',
        priceZh: '18-40元/份'
      }
    ],
    travelTips: [
      'Chengdu has a very relaxed pace of life',
      'Be prepared for spicy food if you\'re not used to it',
      'Visit nearby Leshan Giant Buddha as a day trip',
      'Learn a few Sichuan dialect phrases to impress locals'
    ],
    travelTipsZh: [
      '成都生活节奏非常悠闲',
      '如果不习惯辣食，要有心理准备',
      '可以一日游附近的乐山大佛',
      '学几句四川话会让人印象深刻'
    ]
  },
  {
    id: 'guilin',
    name: 'Guilin',
    nameZh: '桂林',
    slug: 'guilin',
    description: 'A picturesque city famous for its stunning karst landscape, crystal-clear rivers, and traditional rural scenery.',
    descriptionZh: '风景如画的城市，以壮观的喀斯特地貌、清澈的河流和田园风光闻名。',
    region: 'South China',
    regionZh: '华南地区',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Li_River_landscape_with_karst_hills.jpg/800px-Li_River_landscape_with_karst_hills.jpg',
    bannerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Li_River_landscape_with_karst_hills.jpg/1280px-Li_River_landscape_with_karst_hills.jpg',
    rating: 4.8,
    bestTimeToVisit: 'April-October',
    bestTimeToVisitZh: '4-10月',
    avgBudget: '$50-100/day',
    avgBudgetZh: '300-600元/天',
    highlights: [
      'Cruise the scenic Li River',
      'Explore the magical Reed Flute Cave',
      'Cycle through Yangshuo countryside',
      'Watch the famous Impression Sanjie Liu show'
    ],
    highlightsZh: [
      '漓江风光游船',
      '探索神奇的芦笛岩',
      '骑行阳朔乡村',
      '观看《印象刘三姐》演出'
    ],
    attractions: [
      {
        id: 'li-river',
        name: 'Li River Cruise',
        nameZh: '漓江游船',
        description: 'A scenic 4-hour cruise through dramatic karst peaks and traditional fishing villages.',
        descriptionZh: '4小时的风景游船，穿越壮观的喀斯特山峰和传统渔村。',
        image: 'https://images.unsplash.com/photo-1537531383496-f4749bb64244?w=800&q=80',
        rating: 4.9,
        duration: '4 hours',
        ticket: 'CNY 200-400 ($30-60)',
        ticketZh: '200-400元',
        tips: [
          'Book a seat on the top deck for best views',
          'Bring a camera for iconic scenery',
          'The cruise ends in Yangshuo town'
        ],
        tipsZh: [
          '预订顶层甲板座位视野最佳',
          '带上相机拍摄标志性风景',
          '游船终点在阳朔镇'
        ]
      },
      {
        id: 'reed-flute-cave',
        name: 'Reed Flute Cave',
        nameZh: '芦笛岩',
        description: 'A stunning natural limestone cave with colorful lighting and impressive stalactites.',
        descriptionZh: '令人惊叹的天然石灰岩溶洞，彩色灯光和壮观的钟乳石。',
        image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80',
        rating: 4.6,
        duration: '1-2 hours',
        ticket: 'CNY 90 ($13)',
        ticketZh: '90元',
        tips: [
          'Wear comfortable walking shoes',
          'Be prepared for humidity inside',
          'Great for photography'
        ],
        tipsZh: [
          '穿舒适的步行鞋',
          '洞内潮湿，做好准备',
          '非常适合拍照'
        ]
      },
      {
        id: 'yangshuo',
        name: 'Yangshuo',
        nameZh: '阳朔',
        description: 'A charming town surrounded by karst peaks, perfect for cycling, rock climbing, and bamboo rafting.',
        descriptionZh: '被喀斯特山峰环绕的迷人小镇，适合骑行、攀岩和竹筏漂流。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
        rating: 4.8,
        duration: '1-2 days',
        ticket: 'Free to explore',
        ticketZh: '免费',
        tips: [
          'Rent a bike to explore countryside',
          'Watch the sunset at Moon Hill',
          'Stay overnight for the full experience'
        ],
        tipsZh: [
          '租自行车探索乡村',
          '在月亮山看日落',
          '过夜体验更完整'
        ]
      }
    ],
    localFoods: [
      {
        id: 'guilin-noodles',
        name: 'Guilin Rice Noodles',
        nameZh: '桂林米粉',
        description: 'Smooth rice noodles served in a flavorful broth with pickled vegetables and peanuts.',
        descriptionZh: '爽滑的米粉配美味的高汤、酸豆角和花生。',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80',
        price: '$2-4 per bowl',
        priceZh: '10-25元/碗'
      },
      {
        id: 'beer-fish',
        name: 'Yangshuo Beer Fish',
        nameZh: '阳朔啤酒鱼',
        description: 'Fresh river fish braised in beer with tomatoes and spices - a local specialty.',
        descriptionZh: '新鲜河鱼用啤酒、番茄和香料焖煮，当地特色菜。',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
        price: '$10-20 per fish',
        priceZh: '60-130元/条'
      }
    ],
    travelTips: [
      'Best to spend 3-4 days in Guilin and Yangshuo',
      'Book Li River cruise in advance in peak season',
      'Consider a countryside homestay for authentic experience',
      'Watch the light show on the river at night'
    ],
    travelTipsZh: [
      '建议在桂林和阳朔停留3-4天',
      '旺季提前预订漓江游船',
      '考虑入住乡村民宿体验地道生活',
      '晚上观看河上的灯光秀'
    ]
  },
  {
    id: 'hangzhou',
    name: 'Hangzhou',
    nameZh: '杭州',
    slug: 'hangzhou',
    description: 'A city of timeless beauty, famous for its serene West Lake, ancient temples, and legendary Longjing tea.',
    descriptionZh: '永恒美丽的城市，以宁静的西湖、古刹和龙井茶闻名。',
    region: 'East China',
    regionZh: '华东地区',
    image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1600&q=80',
    rating: 4.7,
    bestTimeToVisit: 'March-May, September-November',
    bestTimeToVisitZh: '3-5月、9-11月',
    avgBudget: '$60-120/day',
    avgBudgetZh: '400-800元/天',
    highlights: [
      'Cruise or cycle around West Lake',
      'Visit the ancient Lingyin Temple',
      'Taste authentic Longjing tea',
      'Explore the historic Hefang Street'
    ],
    highlightsZh: [
      '西湖泛舟或骑行',
      '参观古刹灵隐寺',
      '品尝正宗龙井茶',
      '探索历史悠久的河坊街'
    ],
    attractions: [
      {
        id: 'west-lake',
        name: 'West Lake',
        nameZh: '西湖',
        description: 'A UNESCO World Heritage Site, this iconic lake is surrounded by pagodas, temples, and gardens.',
        descriptionZh: '联合国教科文组织世界遗产，这座标志性的湖泊被宝塔、寺庙和花园环绕。',
        image: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=800&q=80',
        rating: 4.9,
        duration: '4-6 hours',
        ticket: 'Free',
        ticketZh: '免费',
        tips: [
          'Best visited in early morning or at sunset',
          'Rent a bike to explore the entire lake',
          'Don\'t miss the sunset at Leifeng Pagoda'
        ],
        tipsZh: [
          '清晨或傍晚最佳',
          '租自行车环湖',
          '不要错过雷峰塔日落'
        ]
      },
      {
        id: 'lingyin-temple',
        name: 'Lingyin Temple',
        nameZh: '灵隐寺',
        description: 'One of China\'s most famous Buddhist temples, nestled in forested hills with ancient stone carvings.',
        descriptionZh: '中国最著名的佛教寺庙之一，坐落在林木葱郁的山中，有古老的石刻。',
        image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
        rating: 4.7,
        duration: '2-3 hours',
        ticket: 'CNY 75 ($11)',
        ticketZh: '75元',
        tips: [
          'Visit early to avoid crowds',
          'Explore the Feilai Feng grottos',
          'Dress modestly for the temple'
        ],
        tipsZh: [
          '早上去避开人群',
          '探索飞来峰石窟',
          '着装得体进入寺庙'
        ]
      },
      {
        id: 'longjing-village',
        name: 'Longjing Tea Village',
        nameZh: '龙井村',
        description: 'Scenic tea plantations where you can learn about and taste China\'s most famous green tea.',
        descriptionZh: '风景优美的茶园，可以了解和品尝中国最著名的绿茶。',
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80',
        rating: 4.5,
        duration: '2-3 hours',
        ticket: 'Free',
        ticketZh: '免费',
        tips: [
          'Best in spring during harvest season',
          'Try fresh tea at local farmhouses',
          'Great hiking trails nearby'
        ],
        tipsZh: [
          '春季采茶季节最佳',
          '在当地农家品尝新鲜茶叶',
          '附近有很好的徒步路线'
        ]
      }
    ],
    localFoods: [
      {
        id: 'dongpo-pork',
        name: 'Dongpo Pork',
        nameZh: '东坡肉',
        description: 'Braised pork belly named after poet Su Dongpo, melt-in-your-mouth tender with rich sauce.',
        descriptionZh: '以诗人苏东坡命名的红烧肉，入口即化，酱汁浓郁。',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
        price: '$5-10 per portion',
        priceZh: '30-60元/份'
      },
      {
        id: 'beggar-chicken',
        name: 'Beggar\'s Chicken',
        nameZh: '叫花鸡',
        description: 'Chicken wrapped in lotus leaf and clay, baked to perfection with aromatic flavors.',
        descriptionZh: '用荷叶和泥土包裹的鸡肉，烤制完美，香味四溢。',
        image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=80',
        price: '$15-25 per chicken',
        priceZh: '100-160元/只'
      }
    ],
    travelTips: [
      'High-speed train from Shanghai takes only 1 hour',
      'Stay overnight to enjoy the lake at sunrise',
      'Weekends are crowded - visit on weekdays if possible',
      'Combine with nearby water towns'
    ],
    travelTipsZh: [
      '从上海乘高铁仅需1小时',
      '过夜可以欣赏日出时分的西湖',
      '周末人多，尽量工作日前往',
      '可以结合周边水乡古镇游览'
    ]
  }
];

export function getCityById(id: string): City | undefined {
  return cities.find(city => city.id === id);
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getFeaturedCities(count: number = 4): City[] {
  return [...cities].sort((a, b) => b.rating - a.rating).slice(0, count);
}

export function searchCities(query: string): City[] {
  const lowerQuery = query.toLowerCase();
  return cities.filter(city => 
    city.name.toLowerCase().includes(lowerQuery) ||
    city.nameZh.includes(query) ||
    city.region.toLowerCase().includes(lowerQuery) ||
    city.regionZh.includes(query) ||
    city.description.toLowerCase().includes(lowerQuery)
  );
}
