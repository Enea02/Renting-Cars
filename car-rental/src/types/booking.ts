export interface Booking {
  id: string;
  carId: string;
  userId: string;
  pickupDate: Date;
  returnDate: Date;
  pickupLocation: string;
  returnLocation: string;
  totalDays: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  extras: BookingExtra[];
  personalInfo: PersonalInfo;
  createdAt: Date;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  driverLicense: string;
}

export interface BookingExtra {
  id: string;
  name: string;
  price: number;
  selected: boolean;
}
