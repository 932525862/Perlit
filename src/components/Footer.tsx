import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'products', href: '#products' },
    { key: 'about', href: '#about' },
    { key: 'contacts', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Perlite Group" 
                className="h-12 w-12 object-contain bg-primary-foreground rounded-full p-1"
              />
              <div>
                <span className="text-xl font-display font-bold">Perlite</span>
                <span className="text-xl font-display font-bold text-secondary">.uz</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">
              {t('nav.home')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {t(`nav.${link.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold mb-4">
              {t('products.title')}
            </h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/70 text-sm">{t('products.perlite.name')}</li>
              <li className="text-primary-foreground/70 text-sm">{t('products.vermiculite.name')}</li>
              <li className="text-primary-foreground/70 text-sm">{t('products.perlite.types.filter')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">
              {t('contact.title')}
            </h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/70 text-sm">+998 (94) 617-16-46</li>
              <li className="text-primary-foreground/70 text-sm">bobur.uz@mail.ru</li>
              <li className="text-primary-foreground/70 text-sm">{t('contact.addressValue')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} {t('footer.company')}. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/60 text-sm">Tashkent</span>
            <span className="w-1 h-1 rounded-full bg-secondary" />
            <span className="text-primary-foreground/60 text-sm">Uzbekistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
