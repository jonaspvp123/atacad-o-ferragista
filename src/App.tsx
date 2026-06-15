/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Gallery from './components/Gallery';
import Categories from './components/Categories';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Gallery />
      <Categories />
      <About />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
