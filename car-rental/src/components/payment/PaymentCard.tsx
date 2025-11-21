'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { FiCreditCard, FiLock } from 'react-icons/fi';

interface PaymentCardProps {
  totalPrice: number;
}

export default function PaymentCard({ totalPrice }: PaymentCardProps) {
  const { t } = useLanguage();
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const name = e.target.name;

    // Format card number
    if (name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
      if (value.length > 19) return;
    }

    // Format expiry date
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      if (value.length > 5) return;
    }

    // Format CVV
    if (name === 'cvv') {
      value = value.replace(/\D/g, '');
      if (value.length > 3) return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      alert('Pagamento confermato! Grazie per aver scelto Premium Car Rental.');
      router.push('/');
    }, 2000);
  };

  return (
    <div className="relative">
      {/* Glass Card Effect */}
      <div className="glass rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <FiCreditCard className="text-primary" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-display">{t('payment.title')}</h2>
            <p className="text-sm opacity-70 flex items-center gap-1">
              <FiLock size={12} /> Pagamento sicuro e crittografato
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Number */}
          <div>
            <label className="block mb-2 font-semibold text-sm">
              {t('payment.cardNumber')}
            </label>
            <div className="relative">
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                required
                className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <FiCreditCard className="text-primary" size={24} />
              </div>
            </div>
          </div>

          {/* Card Holder */}
          <div>
            <label className="block mb-2 font-semibold text-sm">
              {t('payment.cardHolder')}
            </label>
            <input
              type="text"
              name="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="MARIO ROSSI"
              required
              className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary uppercase"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            />
          </div>

          {/* Expiry and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold text-sm">
                {t('payment.expiryDate')}
              </label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                required
                className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-sm">
                {t('payment.cvv')}
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                required
                className="w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              />
            </div>
          </div>

          {/* Total */}
          <div className="card bg-primary/10 border-2 border-primary mt-6">
            <div className="flex justify-between items-center text-2xl font-bold text-primary">
              <span>{t('payment.total')}:</span>
              <span>€{totalPrice}</span>
            </div>
          </div>

          {/* Submit */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={processing}
          >
            {processing ? t('payment.processingPayment') : t('payment.confirmPayment')}
          </Button>
        </form>

        {/* Security Badges */}
        <div className="mt-6 pt-6 border-t flex items-center justify-center gap-4 text-sm opacity-70" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-2">
            <FiLock size={16} />
            <span>SSL Secured</span>
          </div>
          <div>•</div>
          <div>PCI Compliant</div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-accent-light/20 blur-3xl"></div>
    </div>
  );
}
