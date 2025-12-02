import { useTranslation } from 'react-i18next';
import { 
  Factory, 
  RefreshCw, 
  Settings, 
  Users, 
  TestTube, 
  Truck, 
  Heart, 
  Award 
} from 'lucide-react';

const icons = {
  factories: Factory,
  fullCycle: RefreshCw,
  flexibility: Settings,
  dealers: Users,
  testing: TestTube,
  delivery: Truck,
  loyalty: Heart,
  certification: Award,
};

const itemKeys = [
  'factories',
  'fullCycle',
  'flexibility',
  'dealers',
  'testing',
  'delivery',
  'loyalty',
  'certification',
] as const;

export const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-slate/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itemKeys.map((key, index) => {
            const Icon = icons[key];
            return (
              <div 
                key={key}
                className="group relative bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border/50 hover:border-secondary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                    <Icon className="h-7 w-7 text-foreground group-hover:text-secondary transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {t(`whyUs.items.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`whyUs.items.${key}.description`)}
                </p>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-secondary/0 group-hover:bg-secondary rounded-full transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 bg-gradient-to-r from-primary via-slate to-primary rounded-3xl p-8 lg:p-12">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-2">
                4750+
              </div>
              <p className="text-primary-foreground/80 text-sm">
                {t('whyUs.items.delivery.description').split(' ').slice(-3).join(' ')}
              </p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-2">
                5
              </div>
              <p className="text-primary-foreground/80 text-sm">
                {t('whyUs.items.factories.description')}
              </p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-2">
                ISO
              </div>
              <p className="text-primary-foreground/80 text-sm">
                9001:2015 & 14001:2016
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
