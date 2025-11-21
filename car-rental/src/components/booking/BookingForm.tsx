'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

interface BookingFormProps {
  carId: string;
  carPrice: number;
}

export default function BookingForm({ carId, carPrice }: BookingFormProps) {
  const { t } = useLanguage();
  const router = useRouter();
  const [formData, setFormData] = useState({
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateDays = () => {
    if (formData.pickupDate && formData.returnDate) {
      const pickup = new Date(formData.pickupDate);
      const returnDate = new Date(formData.returnDate);
      const diffTime = Math.abs(returnDate.getTime() - pickup.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays || 1;
    }
    return 1;
  };

  const totalPrice = carPrice * calculateDays();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store booking data
    localStorage.setItem('bookingData', JSON.stringify({ ...formData, carId, totalPrice }));
    router.push('/payment');
  };

  const locations = [
    'Milano Centro',
    'Milano Malpensa',
    'Roma Fiumicino',
    'Venezia Marco Polo',
    'Napoli Capodichino'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold">{t('booking.pickupDate')}</label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-primary"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">{t('booking.returnDate')}</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            required
            min={formData.pickupDate || new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-primary"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block mb-2 font-semibold">{t('booking.pickupLocation')}</label>
        <select
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-primary"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <option value="">Seleziona una località</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Personal Info */}
      <div className="pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
        <h3 className="text-xl font-bold mb-4">{t('booking.personalInfo')}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">{t('booking.firstName')}</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-primary"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">{t('booking.lastName')}</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-primary"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">{t('booking.email')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-primary"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">{t('booking.phone')}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-primary"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="card bg-primary/10 border-2 border-primary">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">Giorni:</span>
          <span className="text-lg">{calculateDays()}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">Prezzo giornaliero:</span>
          <span className="text-lg">€{carPrice}</span>
        </div>
        <div className="flex justify-between items-center text-2xl font-bold text-primary pt-4 border-t border-primary">
          <span>Totale:</span>
          <span>€{totalPrice}</span>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full">
        {t('booking.continueToPayment')}
      </Button>
    </form>
  );
}
