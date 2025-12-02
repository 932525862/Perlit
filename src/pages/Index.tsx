import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PerliteTypes } from '@/components/PerliteTypes';
import { Applications } from '@/components/Applications';
import { WhyUs } from '@/components/WhyUs';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PerliteTypes />
        <Applications />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
