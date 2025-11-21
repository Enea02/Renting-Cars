'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import PaymentCard from '@/components/payment/PaymentCard';
import { mockCars } from '@/types/car';

export default function PaymentPage() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const [bookingData, setBookingData] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem('bookingData');
    if (!data) {
      router.push('/cars');
      return;
    }
    setBookingData(JSON.parse(data));
  }, [router]);

  if (!bookingData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="spinner mx-auto mb-4"></div>
        <p>{t('common.loading')}</p>
      </div>
    );
  }

  const car = mockCars.find(c => c.id === bookingData.carId);

  if (!car) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold font-display text-center mb-12">
        Completa il Pagamento
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Order Summary */}
        <div className="card">
          <h2 className="text-2xl font-bold font-display mb-6">Riepilogo Ordine</h2>
          
          <div className="space-y-4">
            <div className="pb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
              <h3 className="font-bold text-lg mb-2">{car.name}</h3>
              <p className="opacity-70">{car.description[language]}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="opacity-70">Data Ritiro:</span>
                <span className="font-semibold">{bookingData.pickupDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Data Riconsegna:</span>
                <span className="font-semibold">{bookingData.returnDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Luogo Ritiro:</span>
                <span className="font-semibold">{bookingData.pickupLocation}</span>
              </div>
            </div>

            <div className="pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <h3 className="font-bold mb-3">Dati Personali</h3>
              <div className="space-y-2 text-sm">
                <p><span className="opacity-70">Nome:</span> {bookingData.firstName} {bookingData.lastName}</p>
                <p><span className="opacity-70">Email:</span> {bookingData.email}</p>
                <p><span className="opacity-70">Telefono:</span> {bookingData.phone}</p>
              </div>
            </div>

            <div className="pt-4 border-t text-xl font-bold text-primary" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex justify-between">
                <span>Totale:</span>
                <span>€{bookingData.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div>
          <PaymentCard totalPrice={bookingData.totalPrice} />
        </div>
      </div>
    </div>
  );
}
