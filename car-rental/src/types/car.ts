export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: 'sedan' | 'suv' | 'sport' | 'electric' | 'van' | 'compact';
  image: string;
  images: string[];
  price: number;
  currency: 'EUR';
  seats: number;
  transmission: 'manual' | 'automatic';
  fuel: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
  year: number;
  available: boolean;
  features: string[];
  description: {
    it: string;
    en: string;
  };
}

export const mockCars: Car[] = [
  {
    id: '1',
    name: 'Mercedes-Benz Classe S',
    brand: 'Mercedes-Benz',
    model: 'Classe S',
    category: 'sedan',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80'
    ],
    price: 180,
    currency: 'EUR',
    seats: 5,
    transmission: 'automatic',
    fuel: 'gasoline',
    year: 2024,
    available: true,
    features: ['Cruise Control', 'Bluetooth', 'GPS', 'Clima Automatico'],
    description: {
      it: 'Berlina di lusso con comfort superiore e tecnologia avanzata',
      en: 'Luxury sedan with superior comfort and advanced technology'
    }
  },
  {
    id: '2',
    name: 'BMW X5',
    brand: 'BMW',
    model: 'X5',
    category: 'suv',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80'
    ],
    price: 150,
    currency: 'EUR',
    seats: 7,
    transmission: 'automatic',
    fuel: 'diesel',
    year: 2024,
    available: true,
    features: ['7 Posti', 'Trazione Integrale', 'Sensori Parcheggio', 'Cruise Control'],
    description: {
      it: 'SUV spazioso perfetto per famiglie e lunghi viaggi',
      en: 'Spacious SUV perfect for families and long trips'
    }
  },
  {
    id: '3',
    name: 'Porsche 911 Carrera',
    brand: 'Porsche',
    model: '911 Carrera',
    category: 'sport',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80'
    ],
    price: 350,
    currency: 'EUR',
    seats: 2,
    transmission: 'automatic',
    fuel: 'gasoline',
    year: 2024,
    available: true,
    features: ['Convertibile', 'Performance', 'Sound Premium', 'Cerchi Sportivi'],
    description: {
      it: 'Sportiva iconica per un\'esperienza di guida indimenticabile',
      en: 'Iconic sports car for an unforgettable driving experience'
    }
  },
  {
    id: '4',
    name: 'Tesla Model 3',
    brand: 'Tesla',
    model: 'Model 3',
    category: 'electric',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80'
    ],
    price: 120,
    currency: 'EUR',
    seats: 5,
    transmission: 'automatic',
    fuel: 'electric',
    year: 2024,
    available: true,
    features: ['100% Elettrica', 'Autopilot', 'Ricarica Rapida', 'Zero Emissioni'],
    description: {
      it: 'Auto elettrica innovativa con autonomia e prestazioni eccezionali',
      en: 'Innovative electric car with exceptional range and performance'
    }
  },
  {
    id: '5',
    name: 'Mercedes-Benz V-Class',
    brand: 'Mercedes-Benz',
    model: 'V-Class',
    category: 'van',
    image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80'
    ],
    price: 200,
    currency: 'EUR',
    seats: 8,
    transmission: 'automatic',
    fuel: 'diesel',
    year: 2024,
    available: true,
    features: ['8 Posti', 'Ampio Bagagliaio', 'Clima Tri-zona', 'Portellone Elettrico'],
    description: {
      it: 'Van lussuoso ideale per gruppi e trasporto premium',
      en: 'Luxury van ideal for groups and premium transportation'
    }
  },
  {
    id: '6',
    name: 'Mini Cooper',
    brand: 'Mini',
    model: 'Cooper',
    category: 'compact',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80'
    ],
    price: 60,
    currency: 'EUR',
    seats: 4,
    transmission: 'manual',
    fuel: 'gasoline',
    year: 2024,
    available: true,
    features: ['Compatta', 'Facile da Parcheggiare', 'Bassi Consumi', 'Agile in Città'],
    description: {
      it: 'Compatta agile perfetta per la città e il parcheggio facile',
      en: 'Agile compact car perfect for the city and easy parking'
    }
  }
];
