import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';

import Zavod from "@/assets/zavoddd.jpg";
import Zavod2 from "@/assets/zavod2.jpg";
import Zavod3 from "@/assets/zavod3.jpg";
import Zavod4 from "@/assets/zavod4.jpg";
import Zavod5 from "@/assets/zavod5.jpg";
import Zavod6 from "@/assets/about (2).png";

const productionSteps = [
  { key: 'mining', number: '01' },
  { key: 'crushing', number: '02' },
  { key: 'heating', number: '03' },
  { key: 'expansion', number: '04' },
  { key: 'classification', number: '05' },
  { key: 'packaging', number: '06' },
];

const factoryImages = [Zavod, Zavod2, Zavod3, Zavod4, Zavod5, Zavod6];

const Production = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-slate-dark via-slate to-slate-light text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('nav.home')}
            </Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              {t('production.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl">
              {t('production.subtitle')}
            </p>
          </div>
        </section>

        {/* Production Process */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                {t('production.processTitle')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('production.processSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productionSteps.map((step) => (
                <div 
                  key={step.key}
                  className="relative bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-secondary-foreground font-display font-bold">
                    {step.number}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-display font-bold text-foreground mb-3">
                      {t(`production.steps.${step.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`production.steps.${step.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Factory Info */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium text-secondary-foreground mb-4">
                  {t('production.factoryBadge')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
                  {t('production.factoryTitle')}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t('production.factoryDescription')}
                </p>
                
                <div className="space-y-4">
                  {['quality', 'equipment', 'control', 'capacity'].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{t(`production.factory.${item}`)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border/50">
                  <div className="text-4xl font-display font-bold text-secondary mb-2">1</div>
                  <p className="text-sm text-muted-foreground">{t('production.stats.factories')}</p>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border/50">
                  <div className="text-4xl font-display font-bold text-secondary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">{t('production.stats.operation')}</p>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border/50">
                  <div className="text-4xl font-display font-bold text-secondary mb-2">ISO</div>
                  <p className="text-sm text-muted-foreground">{t('production.stats.certified')}</p>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border/50">
                  <div className="text-4xl font-display font-bold text-secondary mb-2">15+</div>
                  <p className="text-sm text-muted-foreground">{t('production.stats.experience')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Factory Images - UPDATED */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              {t('production.galleryTitle')}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {factoryImages.map((img, index) => (
                <div 
                  key={index}
                  className="aspect-video rounded-2xl overflow-hidden border border-border"
                >
                  <img 
                    src={img} 
                    alt={`Factory ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Production;
