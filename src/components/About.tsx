import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';
import about from '@/assets/about (1).png';
export const About = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '15+', label: t('about.experience') },
    { value: '500+', label: t('about.clients') },
    { value: '15+', label: t('about.countries') },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={about}
                alt="Perlite Production"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:right-8 bg-card rounded-2xl p-6 shadow-lg border border-border max-w-[280px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground mb-1">
                    GOST & ISO
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Certified Quality Standards
                  </p>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 -top-8 -left-8 w-full h-full bg-secondary/10 rounded-3xl" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
              {t('about.title')}
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              {t('about.subtitle')}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t('about.description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-display font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Сертификаты:</p>
              <div className="flex flex-wrap gap-3">
                {['GOST 10832-2009', 'GOST 30566-98', 'ISO 9001:2015', 'ISO 14001:2016'].map((cert) => (
                  <span 
                    key={cert}
                    className="px-3 py-1.5 bg-accent rounded-lg text-xs font-medium text-accent-foreground"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
