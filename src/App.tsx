/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighlightsCarousel from './components/HighlightsCarousel';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import ContactAndHours from './components/ContactAndHours';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-x-hidden antialiased select-none text-neutral-800">
      
      {/* Floating Header */}
      <Navbar />

      {/* Main Sections flow */}
      <main className="relative">
        
        {/* Isometrical Hero Section */}
        <Hero />

        {/* Dynamic Highlights Carousel */}
        <HighlightsCarousel />

        {/* Trust metrics and About presentation */}
        <About />

        {/* Complete filtered and searchable Food Menu */}
        <Menu />

        {/* Real-review Testimonials */}
        <Testimonials />

        {/* Lightbox responsive photo gallery */}
        <Gallery />

        {/* Maps location & timetables schedules */}
        <ContactAndHours />

      </main>

      {/* Corporate Footprint */}
      <Footer />

      {/* Vertical floating action triggers (WA, FB, IG, Top) */}
      <FloatingButtons />

    </div>
  );
}
