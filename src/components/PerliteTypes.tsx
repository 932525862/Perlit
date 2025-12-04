import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Filter from "@/assets/filter.jpg"
import Small from "@/assets/small.jpg"
import Medium from "@/assets/middle.jpg"
import Large from "@/assets/yirik.webp"

const perliteTypes = [
  {
    key: 'filter',
    image: Filter,
    grades: ['А', 'Б', 'В'],
    path: '/products/filter-perlite',
  },
  {
    key: 'small',
    image: Small,
    grades: ['M75', 'M100', 'M150', 'M200'],
    path: '/products/small-perlite',
  },
  {
    key: 'medium',
    image: Medium,
    grades: ['M75', 'M100', 'M150'],
    path: '/products/medium-perlite',
  },
  {
    key: 'large',
    image: Large,
    grades: ['M75', 'M100', 'M150'],
    path: '/products/large-perlite',
  },
];

export const PerliteTypes = () => {
  const { t } = useTranslation();

  return (
    <section id="products" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium text-secondary-foreground mb-4">
            {t('perliteTypes.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            {t('perliteTypes.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('perliteTypes.subtitle')}
          </p>
        </div>

        {/* Types Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perliteTypes.map((type, index) => (
            <Link
              key={type.key}
              to={type.path}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-secondary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={type.image}
                  alt={t(`perliteTypes.types.${type.key}.name`)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {t(`perliteTypes.types.${type.key}.name`)}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {t(`perliteTypes.types.${type.key}.shortDesc`)}
                </p>
                
                {/* Grades */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {type.grades.map((grade) => (
                    <span 
                      key={grade}
                      className="px-2 py-1 bg-accent rounded text-xs font-medium text-accent-foreground"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <div className="flex items-center text-secondary font-medium text-sm group-hover:gap-2 transition-all">
                  {t('perliteTypes.learnMore')}
                  <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
