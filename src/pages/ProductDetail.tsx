import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle, Ruler, Weight, Thermometer, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';

const productData: Record<string, {
  image: string;
  grades: string[];
  specs: { fraction: string; density: string; temp: string };
}> = {
  'filter-perlite': {
    image: 'https://tashkent.perlite.group/wp-content/uploads/2022/12/filter.jpg',
    grades: ['А', 'Б', 'В'],
    specs: { fraction: '0.01-0.1 mm', density: '50-150 kg/m³', temp: '-200°C ... +900°C' },
  },
  'small-perlite': {
    image: 'https://tashkent.perlite.group/wp-content/uploads/2022/12/small.jpg',
    grades: ['M75', 'M100', 'M150', 'M200'],
    specs: { fraction: '0.16-1.25 mm', density: '75-200 kg/m³', temp: '-200°C ... +900°C' },
  },
  'medium-perlite': {
    image: 'https://tashkent.perlite.group/wp-content/uploads/2022/12/middle.jpg',
    grades: ['M75', 'M100', 'M150'],
    specs: { fraction: '1.25-2.5 mm', density: '75-150 kg/m³', temp: '-200°C ... +900°C' },
  },
  'large-perlite': {
    image: 'https://tashkent.perlite.group/wp-content/uploads/2022/12/big.webp',
    grades: ['M75', 'M100', 'M150'],
    specs: { fraction: '2.5-5.0 mm', density: '75-150 kg/m³', temp: '-200°C ... +900°C' },
  },
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t } = useTranslation();
  
  const product = productData[productId || ''];
  const productKey = productId?.replace('-perlite', '') || 'filter';

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold">{t('notFound')}</h1>
            <Link to="/" className="text-secondary hover:underline mt-4 inline-block">
              {t('backToHome')}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link 
              to="/#products" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('productDetail.backToProducts')}
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src={product.image}
                    alt={t(`perliteTypes.types.${productKey}.name`)}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground rounded-xl px-6 py-3 shadow-lg">
                  <span className="font-display font-bold">GOST 10832-2009</span>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <span className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium text-secondary-foreground mb-4">
                  {t('perliteTypes.badge')}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                  {t(`perliteTypes.types.${productKey}.name`)}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t(`perliteTypes.types.${productKey}.fullDesc`)}
                </p>
                
                {/* Grades */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-3">{t('productDetail.grades')}</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.grades.map((grade) => (
                      <span 
                        key={grade}
                        className="px-4 py-2 bg-accent rounded-lg font-medium text-accent-foreground"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('productDetail.getQuote')}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              {t('productDetail.specifications')}
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 text-center">
                <Ruler className="h-8 w-8 text-secondary mx-auto mb-4" />
                <h3 className="text-sm text-muted-foreground mb-2">{t('productDetail.fraction')}</h3>
                <p className="text-xl font-display font-bold text-foreground">{product.specs.fraction}</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 text-center">
                <Weight className="h-8 w-8 text-secondary mx-auto mb-4" />
                <h3 className="text-sm text-muted-foreground mb-2">{t('productDetail.density')}</h3>
                <p className="text-xl font-display font-bold text-foreground">{product.specs.density}</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 text-center">
                <Thermometer className="h-8 w-8 text-secondary mx-auto mb-4" />
                <h3 className="text-sm text-muted-foreground mb-2">{t('productDetail.tempRange')}</h3>
                <p className="text-xl font-display font-bold text-foreground">{product.specs.temp}</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 text-center">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-4" />
                <h3 className="text-sm text-muted-foreground mb-2">{t('productDetail.fireClass')}</h3>
                <p className="text-xl font-display font-bold text-foreground">A1 (NG)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              {t('productDetail.usageAreas')}
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {['use1', 'use2', 'use3', 'use4', 'use5', 'use6'].map((use) => (
                <div key={use} className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    {t(`perliteTypes.types.${productKey}.${use}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
