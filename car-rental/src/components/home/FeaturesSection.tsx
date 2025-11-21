'use client';

import { useLanguage } from '@/context/LanguageContext';
import { FiCheck, FiShield, FiClock, FiDollarSign } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const { language } = useLanguage();

  const features = [
    {
      icon: FiCheck,
      title: {
        it: 'Qualità Garantita',
        en: 'Quality Guaranteed'
      },
      description: {
        it: 'Flotta di veicoli nuovi e perfettamente manutenuti',
        en: 'Fleet of new and perfectly maintained vehicles'
      }
    },
    {
      icon: FiShield,
      title: {
        it: 'Assicurazione Completa',
        en: 'Full Insurance'
      },
      description: {
        it: 'Copertura assicurativa completa inclusa nel prezzo',
        en: 'Comprehensive insurance coverage included in the price'
      }
    },
    {
      icon: FiClock,
      title: {
        it: 'Disponibilità 24/7',
        en: '24/7 Availability'
      },
      description: {
        it: 'Servizio clienti sempre disponibile per ogni necessità',
        en: 'Customer service always available for every need'
      }
    },
    {
      icon: FiDollarSign,
      title: {
        it: 'Prezzi Trasparenti',
        en: 'Transparent Pricing'
      },
      description: {
        it: 'Nessun costo nascosto, prezzi chiari e competitivi',
        en: 'No hidden costs, clear and competitive prices'
      }
    }
  ];

  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            {language === 'it' ? 'Perché Sceglierci' : 'Why Choose Us'}
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            {language === 'it' 
              ? 'Offriamo un servizio di noleggio auto premium con attenzione ai dettagli'
              : 'We offer premium car rental service with attention to detail'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group hover:border-primary transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold font-display mb-2">
                {feature.title[language]}
              </h3>
              <p className="opacity-80">
                {feature.description[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
