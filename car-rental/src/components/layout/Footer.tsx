'use client';

import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t('footer.aboutUs'),
      links: [
        { label: t('footer.aboutUs'), href: '#' },
        { label: 'Carriere', href: '#' },
        { label: 'Blog', href: '#' }
      ]
    },
    {
      title: t('footer.contact'),
      links: [
        { label: t('footer.contact'), href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Supporto', href: '#' }
      ]
    },
    {
      title: 'Legale',
      links: [
        { label: t('footer.terms'), href: '#' },
        { label: t('footer.privacy'), href: '#' },
        { label: 'Cookie Policy', href: '#' }
      ]
    }
  ];

  const contactInfo = [
    { icon: FiPhone, text: '+39 02 1234 5678' },
    { icon: FiMail, text: 'info@premiumcarrental.it' },
    { icon: FiMapPin, text: 'Via Roma 123, 20100 Milano, Italia' }
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="mt-20 border-t" style={{ 
      backgroundColor: 'var(--bg-card)', 
      borderColor: 'var(--border-color)' 
    }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xl font-bold">🚗</span>
              </div>
              <span className="text-xl font-bold font-display text-primary">
                {t('common.appName')}
              </span>
            </div>
            <p className="mb-4 opacity-80">
              La tua avventura inizia qui. Noleggio auto di lusso per ogni occasione.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold font-display text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3 className="font-bold font-display text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <info.icon className="mt-1 flex-shrink-0 text-primary" size={18} />
                  <span className="opacity-80">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center opacity-80" style={{ borderColor: 'var(--border-color)' }}>
          <p>
            &copy; {new Date().getFullYear()} {t('common.appName')}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
