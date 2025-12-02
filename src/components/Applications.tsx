import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Flame, 
  Droplets, 
  Thermometer,
  Factory,
  Wheat,
  FlaskConical,
  Snowflake
} from 'lucide-react';

const applications = [
  {
    key: 'construction',
    icon: Building2,
    color: 'bg-slate/20 text-slate-dark',
  },
  {
    key: 'insulation',
    icon: Thermometer,
    color: 'bg-secondary/20 text-warm-dark',
  },
  {
    key: 'fireproof',
    icon: Flame,
    color: 'bg-destructive/20 text-destructive',
  },
  {
    key: 'agriculture',
    icon: Wheat,
    color: 'bg-green-100 text-green-700',
  },
  {
    key: 'filtration',
    icon: Droplets,
    color: 'bg-blue-100 text-blue-700',
  },
  {
    key: 'metallurgy',
    icon: Factory,
    color: 'bg-orange-100 text-orange-700',
  },
  {
    key: 'cryogenic',
    icon: Snowflake,
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    key: 'chemical',
    icon: FlaskConical,
    color: 'bg-purple-100 text-purple-700',
  },
];

export const Applications = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-slate/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
            {t('applications.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t('applications.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('applications.subtitle')}
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div 
                key={app.key}
                className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border/50 hover:border-secondary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${app.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {t(`applications.items.${app.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`applications.items.${app.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Construction Details */}
        <div className="mt-20 bg-gradient-to-r from-slate-dark via-slate to-slate-dark rounded-3xl p-8 lg:p-12 text-primary-foreground">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-display font-bold mb-6">
                {t('applications.construction.title')}
              </h3>
              <ul className="space-y-4">
                {['plaster', 'concrete', 'blocks', 'roofing', 'floors'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-secondary-foreground text-xs">✓</span>
                    </span>
                    <span className="text-primary-foreground/90">
                      {t(`applications.construction.items.${item}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-display font-bold text-secondary mb-2">-200°C</div>
                <p className="text-sm text-primary-foreground/70">{t('applications.tempMin')}</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-display font-bold text-secondary mb-2">+900°C</div>
                <p className="text-sm text-primary-foreground/70">{t('applications.tempMax')}</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-display font-bold text-secondary mb-2">50-150</div>
                <p className="text-sm text-primary-foreground/70">kg/m³ {t('applications.density')}</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-display font-bold text-secondary mb-2">A1</div>
                <p className="text-sm text-primary-foreground/70">{t('applications.fireClass')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
