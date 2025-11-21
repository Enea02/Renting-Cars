# 🚗 Premium Car Rental - Next.js Project

Sistema di autonoleggio moderno e responsive realizzato con Next.js 14, TypeScript e supporto multilingua (Italiano/Inglese).

## 🎨 Design System

### Colori Principali
- **Primary**: `#5C899D` (Blu petrolio)
- **Secondary**: `#FFFCEF` (Bianco caldo)
- **Accent Dark**: `#4A6F7F`
- **Accent Light**: `#7BA5B8`

## ✨ Caratteristiche

- ✅ **Next.js 14** con App Router
- ✅ **TypeScript** per type safety
- ✅ **Tailwind CSS** per styling moderno
- ✅ **Sistema Multilingua** (IT/EN)
- ✅ **Dark/Light Mode** con animazioni
- ✅ **Design Responsive** mobile-first
- ✅ **Framer Motion** per animazioni smooth
- ✅ **Design Components** ispirati da uiverse.io

## 🚀 Installazione

### 1. Installa le dipendenze

```bash
npm install
```

### 2. Avvia il server di sviluppo

```bash
npm run dev
```

### 3. Apri il browser

Vai su [http://localhost:3000](http://localhost:3000)

## 📁 Struttura del Progetto

```
car-rental/
├── public/
│   ├── images/          # Immagini auto e hero
│   └── locales/         # File traduzioni IT/EN
├── src/
│   ├── app/             # Pagine Next.js (App Router)
│   ├── components/      # Componenti React
│   │   ├── layout/      # Header, Footer
│   │   ├── home/        # HeroSection, Features
│   │   ├── cars/        # CarCard, CarGrid, CarFilter
│   │   ├── booking/     # BookingForm
│   │   ├── payment/     # PaymentCard
│   │   └── ui/          # ThemeToggle, LanguageSwitcher, Button
│   ├── context/         # Context per Theme e Language
│   ├── types/           # TypeScript types
│   └── styles/          # Global CSS
```

## 🌐 Pagine

### Home (`/`)
- Hero section con immagine di impatto
- Sezione caratteristiche principali
- Animazioni con Framer Motion

### Catalogo Auto (`/cars`)
- Griglia di card auto
- Filtri per categoria (Sedan, SUV, Sport, Electric, Van, Compact)
- Design card 3D con effetto hover

### Prenotazione (`/booking/[carId]`)
- Form dati personali
- Selezione date
- Scelta luogo ritiro
- Riepilogo costi

### Pagamento (`/payment`)
- Form carta di credito con design glassmorphism
- Validazione in tempo reale
- Riepilogo ordine completo

## 🎨 Componenti Principali

### ThemeToggle
Toggle animato per dark/light mode con persistenza in localStorage.

### LanguageSwitcher
Dropdown per cambio lingua (IT/EN) con bandiere.

### CarCard
Card auto con effetto 3D hover e glow border personalizzato.

### PaymentCard
Form pagamento con effetto glassmorphism e validazione campi.

## 🌍 Sistema Multilingua

Le traduzioni sono gestite tramite file JSON in `public/locales/`:
- `it.json` - Italiano
- `en.json` - English

Il context `LanguageContext` gestisce il cambio lingua e la persistenza.

## 🎨 Tema

Il sistema tema supporta:
- **Light Mode**: Background chiaro (`#FFFCEF`)
- **Dark Mode**: Background scuro (`#1a1a1a`)
- Transizioni smooth tra i temi
- Persistenza della preferenza utente

## 📦 Dipendenze Principali

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "typescript": "^5.0.0",
  "framer-motion": "^10.16.0",
  "react-icons": "^4.12.0",
  "tailwindcss": "^3.3.0"
}
```

## 🚀 Build per Produzione

```bash
# Build
npm run build

# Start produzione
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Features Extra (Possibili Estensioni)

- [ ] Integrazione API backend reale
- [ ] Sistema di autenticazione utenti
- [ ] Dashboard gestione prenotazioni
- [ ] Sistema recensioni auto
- [ ] Integrazione pagamenti reali (Stripe)
- [ ] Notifiche email/SMS
- [ ] Mappa interattiva punti ritiro

## 📄 Licenza

Progetto sviluppato per uso didattico/commerciale.

## 👨‍💻 Sviluppo

Progetto creato con Next.js 14 e TypeScript seguendo le best practices moderne.

### Design Components Credits
- CarCard: Ispirato da uiverse.io/ElSombrero2/tricky-robin-67
- PaymentCard: Ispirato da uiverse.io/Praashoo7/black-lizard-62
- ThemeToggle: Ispirato da uiverse.io/JustCode14/red-dingo-61

---

**Buon coding! 🚗💨**
