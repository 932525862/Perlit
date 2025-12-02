import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

export const Hero = () => {
  const { t } = useTranslation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-background to-accent/30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate/10 rounded-full blur-3xl" />
      
      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6 opacity-0 animate-fade-in">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Perlite Group — GOST & ISO
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in animation-delay-200">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl sm:text-2xl text-secondary font-semibold mb-4 opacity-0 animate-fade-in animation-delay-400">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in animation-delay-600">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in animation-delay-600">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('#contact')}
                className="group"
              >
                {t('hero.cta')}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection('#products')}
              >
                {t('hero.learnMore')}
              </Button>
            </div>
          </div>

          {/* Logo Animation */}
          <div className="relative flex justify-center lg:justify-end opacity-0 animate-scale-in animation-delay-400">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-slate/30 rounded-full blur-3xl scale-110" />
              
              {/* Logo Container */}
              <div className="relative bg-card/80 backdrop-blur-sm rounded-full p-8 shadow-lg border border-border/50 animate-float">
                <img 
                  src={logo} 
                  alt="Perlite Group - Thermal Insulation" 
                  className="w-64 h-64 sm:w-80 sm:h-80 object-contain"
                />
              </div>
              
              {/* Feature Tags */}
              <div className="absolute -left-4 top-1/4 bg-card shadow-md rounded-lg px-4 py-2 border border-border hidden sm:block animate-fade-in-left animation-delay-600">
                <span className="text-sm font-medium text-foreground">❄️ -200°C</span>
              </div>
              <div className="absolute -right-4 top-1/4 bg-card shadow-md rounded-lg px-4 py-2 border border-border hidden sm:block animate-fade-in-right animation-delay-600">
                <span className="text-sm font-medium text-foreground">🔥 +900°C</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary shadow-md rounded-lg px-4 py-2 hidden sm:block animate-fade-in animation-delay-600">
                <span className="text-sm font-bold text-secondary-foreground">A1 Yonmaydigan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('#products')}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
