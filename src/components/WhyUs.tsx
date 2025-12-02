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

// const itemKeys = [
//   ,
//   'fullCycle',
//   'flexibility',
//   'dealers',
//   'testing',
//   'delivery',
//   'loyalty',
//   'certification',
// ] as const;

export const WhyUs = () => {
  const { t } = useTranslation();
  const whyUsData = [
    {
      image: '/src/assets/whyUs/whyus1.jpg',
      key: 'factories',
    },
    {
      image: '/src/assets/whyUs/whyus2.jpg',
      key: 'fullCycle',
    },
    {
      image: '/src/assets/whyUs/whyus3.png',
      key: 'flexibility',
    },
    {
      image: '/src/assets/whyUs/whyus4.jpg',
      key: 'dealers',
    },
    {
      image: '/src/assets/whyUs/whyus5.png',
      key: 'testing',
    },
    {
      image: '/src/assets/whyUs/whyus6.jpg',
      key: 'delivery',
    },
    {
      image: '/src/assets/whyUs/whyus7.jpg',
      key: 'loyalty',
    },
    {
      image: '/src/assets/sertificate.png',
      key: 'certification',
    },
  ]

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
          {whyUsData.map((data, index) => {
            return (
              <div
                key={data.key}
                className="group bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-border/50 hover:border-secondary/30 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={data.image}
                    alt={t(`perliteTypes.types.name`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {t(`whyUs.items.${data.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`whyUs.items.${data.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={app.key}
                className="group bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-border/50 hover:border-secondary/30 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={t(`perliteTypes.types.name`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {t(`applications.items.${app.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`applications.items.${app.key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
         
        </div> */}

        {/* Stats Banner */}
        <div className="mt-20 bg-gradient-to-r from-primary via-slate to-primary rounded-3xl p-8 lg:p-12">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-2">
                10+
              </div>
              <p className="text-primary-foreground/80 text-sm">
                {t('whyUs.items.delivery.description').split(' ').slice(-3).join(' ')}
              </p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-2">
                1
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
