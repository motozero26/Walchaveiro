/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { QuoteForm } from './components/QuoteForm';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col font-sans">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Differentials />
        <QuoteForm />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

