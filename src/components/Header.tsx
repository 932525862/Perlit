import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const currentLang = languages.find(l => l.code === i18n.language) || languages[1];

  const navItems = [
    { key: 'home', href: '/', isLink: true },
    { key: 'products', href: isHomePage ? '#products' : '/#products', isLink: !isHomePage },
    { key: 'production', href: '/production', isLink: true },
    { key: 'about', href: isHomePage ? '#about' : '/#about', isLink: !isHomePage },
    { key: 'contacts', href: isHomePage ? '#contact' : '/#contact', isLink: !isHomePage },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isLink) {
      setIsMenuOpen(false);
    } else if (item.href.startsWith('#')) {
      scrollToSection(item.href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Perlite Group Logo" 
              className="h-14 w-14 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-display font-bold text-foreground">Perlite</span>
              <span className="text-xl font-display font-bold text-secondary">.uz</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.key}
                  to={item.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 relative group"
                >
                  {t(`nav.${item.key}`)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </Link>
              ) : (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200 relative group"
                >
                  {t(`nav.${item.key}`)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
                </button>
              )
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={i18n.language === lang.code ? 'bg-accent' : ''}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button 
              variant="hero" 
              size="sm"
              className="hidden sm:flex"
              onClick={() => {
                if (isHomePage) {
                  scrollToSection('#contact');
                } else {
                  window.location.href = '/#contact';
                }
              }}
            >
              {t('nav.getQuote')}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.key}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 px-4 text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ) : (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item)}
                  className="text-left py-3 px-4 text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </button>
              )
            ))}
            <Button 
              variant="hero" 
              className="mt-2"
              onClick={() => {
                if (isHomePage) {
                  scrollToSection('#contact');
                } else {
                  window.location.href = '/#contact';
                }
                setIsMenuOpen(false);
              }}
            >
              {t('nav.getQuote')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
