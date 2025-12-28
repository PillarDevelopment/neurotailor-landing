'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { ChevronRight, Code, Zap, Shield, Users, Star, ArrowRight, Play, Check, X, Menu, Sparkles, Cpu, Clock, RussianRuble, Rocket, GitBranch, Globe, BarChart, Brain, Network, Layers, Server, CreditCard, MessageSquare, Smartphone, FileText, TrendingUp, Lock } from 'lucide-react';
import { trackCTAClick, trackPricingSelect, trackPlatformView, trackMobileMenuToggle } from '@/lib/analytics';
import ApplicationModal from '@/components/Modal/ApplicationModal';

export default function RouterAILanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('unknown');
  const [language, setLanguage] = useState<'en' | 'ru'>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('routerai_lang') as 'en' | 'ru' | null;
    if (savedLang === 'en' || savedLang === 'ru') {
      setLanguage(savedLang);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('routerai_lang', language);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Track mobile menu toggle
  const handleMobileMenuToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    trackMobileMenuToggle(newState);
  };

  // Track platform tab change
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    trackPlatformView(tab);
  };

  // Handle CTA click with modal
  const handleCTAClick = (source: string) => {
    trackCTAClick(source);
    setModalSource(source);
    setIsModalOpen(true);
  };

  // Handle pricing plan selection
  const handlePricingClick = (planName: string) => {
    trackPricingSelect(planName);
    setModalSource(`pricing_${planName.toLowerCase()}`);
    setIsModalOpen(true);
  };

  // Translations
  const t = {
    en: {
      nav: {
        features: "Features",
        models: "Models & Pricing",
        api: "API",
        testimonials: "Testimonials",
        startFree: "Start Free"
      },
      hero: {
        badge: "Unified AI API Platform",
        title: "ChatGPT, Claude, Gemini, Grok",
        titleHighlight: "and 100+ AI models in one API",
        description: "Single API key, single endpoint. Pay in rubles. Works without VPN. Switch between models by changing one parameter. Automatic failover included.",
        startFree: "Start Free",
        exploreDocs: "Explore Documentation"
      },
      stats: {
        models: "AI Models",
        providers: "Providers",
        uptime: "Uptime",
        payRubles: "Pay in Rubles"
      },
      features: {
        title: "Everything you need in",
        titleHighlight: "one platform",
        subtitle: "Single API, multiple models. Pay in rubles. Works without VPN. Built for developers and teams.",
        unifiedApi: {
          title: "Unified API",
          desc: "One API key, one endpoint. Compatible with OpenAI SDK. Switch models by changing one parameter."
        },
        failover: {
          title: "Automatic Failover",
          desc: "Automatic switching to backup provider if one is unavailable. Guaranteed continuous service."
        },
        noVpn: {
          title: "No VPN Required",
          desc: "Direct access without VPN through infrastructure in Russia. Stable and fast connection."
        },
        payRubles: {
          title: "Pay in Rubles",
          desc: "Payment via Russian bank cards, SBP. No foreign intermediaries. Transparent pay-as-you-go pricing."
        },
        team: {
          title: "Team Collaboration",
          desc: "Centralized billing, individual limits, role management. Perfect for corporate clients."
        },
        compliance: {
          title: "FZ-152 Compliant",
          desc: "Models hosted on servers in Russia. Legal transparency with contracts and EDI for legal entities."
        }
      },
      api: {
        title: "Get started in",
        titleHighlight: "3 steps",
        subtitle: "Simple integration, maximum flexibility",
        step1: {
          title: "Get API Key",
          desc: "Sign up for free and get your API key. No credit card required. Start testing immediately."
        },
        step2: {
          title: "Integrate SDK",
          desc: "Use OpenAI-compatible SDK. Just change the base URL. Works with Python, JavaScript, and more."
        },
        step3: {
          title: "Switch Models",
          desc: "Change models by updating the model parameter. Test different models without changing your code."
        },
        codeExample: "Example: Python",
        copyCode: "Copy code"
      },
      models: {
        title: "Choose from",
        titleHighlight: "100+ models",
        subtitle: "Transparent pay-as-you-go pricing. No subscriptions, no hidden fees.",
        allModels: "All Models",
        textModels: "Text Models",
        multimodal: "Multimodal",
        imageGen: "Image Generation",
        viewAll: "View All Models & Prices",
        perTokens: "per 1M tokens"
      },
      devices: {
        title: "Access from any",
        titleHighlight: "device",
        subtitle: "Try models without API integration",
        webChat: {
          title: "Web Chat",
          desc: "Try any model directly in your browser. No registration required for testing.",
          button: "Try Web Chat"
        },
        telegram: {
          title: "Telegram Bot",
          desc: "Chat with AI models directly in Telegram. Quick access from your phone.",
          button: "Try Telegram Bot"
        }
      },
      pricing: {
        title: "Simple and transparent",
        titleHighlight: "pricing",
        subtitle: "Pay-as-you-go. No subscriptions. No hidden fees.",
        individuals: {
          title: "For Individuals",
          card: "Russian bank cards",
          sbp: "SBP (Fast Payment System)",
          instant: "Instant top-up",
          noMin: "No minimum payment"
        },
        business: {
          title: "For Legal Entities",
          badge: "FOR BUSINESS",
          invoice: "Payment by invoice",
          contract: "Contract and closing documents",
          edi: "EDI (Electronic Document Interchange)",
          team: "Team management and analytics",
          contactSales: "Contact Sales"
        },
        pricingNote: "All prices are per 1M tokens (input/output).",
        viewPricing: "View full pricing table"
      },
      testimonials: {
        title: "Trusted by",
        titleHighlight: "developers",
        subtitle: "See what our users say about RouterAI",
        startFree: "Start Free"
      },
      cta: {
        title: "Ready to start building with",
        titleHighlight: "RouterAI?",
        subtitle: "Join hundreds of developers and companies using RouterAI to access 100+ AI models with one API",
        startFree: "Start Free",
        noCard: "No credit card required • 24/7 Support"
      },
      footer: {
        tagline: "Unified API for 100+ AI models",
        product: "Product",
        company: "Company",
        legal: "Legal",
        copyright: "© 2025 RouterAI. All rights reserved."
      }
    },
    ru: {
      nav: {
        features: "Возможности",
        models: "Модели и цены",
        api: "API",
        testimonials: "Отзывы",
        startFree: "Начать бесплатно"
      },
      hero: {
        badge: "Единая платформа AI API",
        title: "ChatGPT, Claude, Gemini, Grok",
        titleHighlight: "и 100+ моделей ИИ в одном API",
        description: "Один API-ключ, один эндпоинт. Оплата в рублях. Работает без VPN. Переключение между моделями изменением одного параметра. Автоматическая отказоустойчивость включена.",
        startFree: "Начать бесплатно",
        exploreDocs: "Изучить документацию"
      },
      stats: {
        models: "Моделей ИИ",
        providers: "Провайдеров",
        uptime: "Время работы",
        payRubles: "Оплата в рублях"
      },
      features: {
        title: "Всё необходимое в",
        titleHighlight: "одной платформе",
        subtitle: "Единый API, множество моделей. Оплата в рублях. Работает без VPN. Создано для разработчиков и команд.",
        unifiedApi: {
          title: "Единый API",
          desc: "Один API-ключ, один эндпоинт. Совместимо с OpenAI SDK. Переключение моделей изменением одного параметра."
        },
        failover: {
          title: "Автоматическая отказоустойчивость",
          desc: "Автоматическое переключение на резервного провайдера при недоступности одного. Гарантированное непрерывное обслуживание."
        },
        noVpn: {
          title: "Без VPN",
          desc: "Прямой доступ без VPN через инфраструктуру в России. Стабильное и быстрое соединение."
        },
        payRubles: {
          title: "Оплата в рублях",
          desc: "Оплата картами российских банков, СБП. Без иностранных посредников. Прозрачное ценообразование по факту использования."
        },
        team: {
          title: "Командная работа",
          desc: "Централизованный биллинг, индивидуальные лимиты, управление ролями. Идеально для корпоративных клиентов."
        },
        compliance: {
          title: "Соответствие ФЗ-152",
          desc: "Модели размещены на серверах в России. Юридическая прозрачность с договорами и ЭДО для юридических лиц."
        }
      },
      api: {
        title: "Начните за",
        titleHighlight: "3 шага",
        subtitle: "Простая интеграция, максимальная гибкость",
        step1: {
          title: "Получите API-ключ",
          desc: "Зарегистрируйтесь бесплатно и получите API-ключ. Без кредитной карты. Начните тестирование сразу."
        },
        step2: {
          title: "Интегрируйте SDK",
          desc: "Используйте совместимый с OpenAI SDK. Просто измените базовый URL. Работает с Python, JavaScript и другими."
        },
        step3: {
          title: "Переключайте модели",
          desc: "Меняйте модели, обновляя параметр model. Тестируйте разные модели без изменения кода."
        },
        codeExample: "Пример: Python",
        copyCode: "Скопировать код"
      },
      models: {
        title: "Выберите из",
        titleHighlight: "100+ моделей",
        subtitle: "Прозрачное ценообразование по факту использования. Без подписок, без скрытых комиссий.",
        allModels: "Все модели",
        textModels: "Текстовые модели",
        multimodal: "Мультимодальные",
        imageGen: "Генерация изображений",
        viewAll: "Посмотреть все модели и цены",
        perTokens: "за 1M токенов"
      },
      devices: {
        title: "Доступ с любого",
        titleHighlight: "устройства",
        subtitle: "Попробуйте модели без интеграции API",
        webChat: {
          title: "Веб-чат",
          desc: "Попробуйте любую модель прямо в браузере. Регистрация не требуется для тестирования.",
          button: "Попробовать веб-чат"
        },
        telegram: {
          title: "Telegram-бот",
          desc: "Общайтесь с моделями ИИ прямо в Telegram. Быстрый доступ с телефона.",
          button: "Попробовать Telegram-бот"
        }
      },
      pricing: {
        title: "Простое и прозрачное",
        titleHighlight: "ценообразование",
        subtitle: "Оплата по факту использования. Без подписок. Без скрытых комиссий.",
        individuals: {
          title: "Для физических лиц",
          card: "Карты российских банков",
          sbp: "СБП (Система быстрых платежей)",
          instant: "Мгновенное пополнение",
          noMin: "Без минимального платежа"
        },
        business: {
          title: "Для юридических лиц",
          badge: "ДЛЯ БИЗНЕСА",
          invoice: "Оплата по счету",
          contract: "Договор и закрывающие документы",
          edi: "ЭДО (Электронный документооборот)",
          team: "Управление командой и аналитика",
          contactSales: "Связаться с продажами"
        },
        pricingNote: "Все цены указаны за 1M токенов (вход/выход).",
        viewPricing: "Посмотреть полную таблицу цен"
      },
      testimonials: {
        title: "Нам доверяют",
        titleHighlight: "разработчики",
        subtitle: "Посмотрите, что говорят наши пользователи о RouterAI",
        startFree: "Начать бесплатно"
      },
      cta: {
        title: "Готовы начать работу с",
        titleHighlight: "RouterAI?",
        subtitle: "Присоединяйтесь к сотням разработчиков и компаний, использующих RouterAI для доступа к 100+ моделям ИИ через один API",
        startFree: "Начать бесплатно",
        noCard: "Без кредитной карты • Поддержка 24/7"
      },
      footer: {
        tagline: "Единый API для 100+ моделей ИИ",
        product: "Продукт",
        company: "Компания",
        legal: "Правовая информация",
        copyright: "© 2025 RouterAI. Все права защищены."
      }
    }
  };

  const translations = t[language];

  const models = [
    {
      name: 'GPT-5.2',
      provider: 'OpenAI',
      price: '₽176 / ₽1,414',
      context: '128K tokens',
      description: language === 'ru' ? 'Последняя модель GPT с улучшенным рассуждением' : 'Latest GPT model with enhanced reasoning'
    },
    {
      name: 'Claude Sonnet 4.5',
      provider: 'Anthropic',
      price: '₽303 / ₽1,515',
      context: '200K tokens',
      description: language === 'ru' ? 'Лучшая для сложных рассуждений и анализа' : 'Best for complex reasoning and analysis'
    },
    {
      name: 'DeepSeek V3.2',
      provider: 'DeepSeek',
      price: '₽56 / ₽169',
      context: '64K tokens',
      description: language === 'ru' ? 'Самая экономичная топовая модель' : 'Most cost-effective top-tier model'
    },
    {
      name: 'Gemini 3 Flash',
      provider: 'Google',
      price: '₽50 / ₽303',
      context: '1M tokens',
      description: language === 'ru' ? 'Быстрая и доступная для больших объемов задач' : 'Fast and affordable for high-volume tasks'
    }
  ];

  const testimonials = [
    {
      name: "Alex Petrov",
      role: language === 'ru' ? "CTO, TechStart" : "CTO, TechStart",
      content: language === 'ru' 
        ? "RouterAI сэкономил нам недели разработки. Я могу тестировать гипотезы с разными моделями, просто меняя одну строчку в конфиге. Автоматическая отказоустойчивость — это спасение."
        : "RouterAI saved us weeks of development time. I can test hypotheses with different models just by changing one line in the config. The automatic failover is a lifesaver.",
      avatar: "👨‍💻"
    },
    {
      name: "Maria Ivanova",
      role: language === 'ru' ? "Ведущий разработчик, StartupHub" : "Lead Developer, StartupHub",
      content: language === 'ru'
        ? "Переход на RouterAI сэкономил нам недели разработки. Один ключ, один эндпоинт, максимальная простота. Оплата в рублях без посредников — именно то, что нам нужно."
        : "Switching to RouterAI saved us weeks of development. One key, one endpoint, maximum simplicity. Payment in rubles without intermediaries is exactly what we needed.",
      avatar: "👩‍💼"
    },
    {
      name: "Dmitry Sokolov",
      role: language === 'ru' ? "Основатель, Indie Dev" : "Founder, Indie Dev",
      content: language === 'ru'
        ? "Главное для нас — возможность работать с юрлицами и получать закрывающие документы. RouterAI решил все наши проблемы с соответствием ФЗ-152."
        : "The main thing for us is the ability to work with legal entities and receive closing documents. RouterAI solved all our compliance issues with FZ-152.",
      avatar: "👨‍💼"
    }
  ];

  const stats = [
    { number: "100+", label: translations.stats.models, icon: <Brain className="w-6 h-6" /> },
    { number: "55", label: translations.stats.providers, icon: <Layers className="w-6 h-6" /> },
    { number: "99.9%", label: translations.stats.uptime, icon: <Server className="w-6 h-6" /> },
    { number: "₽", label: translations.stats.payRubles, icon: <RussianRuble className="w-6 h-6" /> }
  ];

  // Generate stable random positions for background particles
  const backgroundParticles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 10,
      animationDuration: 10 + Math.random() * 20
    }));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0">
          {backgroundParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`
              }}
            >
              <div className="w-1 h-1 bg-white/20 rounded-full blur-sm" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Layers className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                RouterAI
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="hover:text-purple-400 transition-colors">{translations.nav.features}</a>
              <a href="#models" className="hover:text-purple-400 transition-colors">{translations.nav.models}</a>
              <a href="#api" className="hover:text-purple-400 transition-colors">{translations.nav.api}</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors">{translations.nav.testimonials}</a>
              
              {/* Language Toggle */}
              <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                <span className={`text-xs ${language === 'en' ? 'text-purple-400 font-semibold' : 'text-gray-400'}`}>EN</span>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                  className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                    language === 'ru' ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                      language === 'ru' ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
                <span className={`text-xs ${language === 'ru' ? 'text-purple-400 font-semibold' : 'text-gray-400'}`}>RU</span>
              </div>

              <button 
                onClick={() => handleCTAClick('header_start_free')}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                {translations.nav.startFree}
              </button>
            </div>

            <button className="md:hidden" onClick={handleMobileMenuToggle}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block hover:text-purple-400 transition-colors">{translations.nav.features}</a>
              <a href="#models" className="block hover:text-purple-400 transition-colors">{translations.nav.models}</a>
              <a href="#api" className="block hover:text-purple-400 transition-colors">{translations.nav.api}</a>
              <a href="#testimonials" className="block hover:text-purple-400 transition-colors">{translations.nav.testimonials}</a>
              
              {/* Language Toggle Mobile */}
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-400">{language === 'ru' ? 'Язык' : 'Language'}</span>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs ${language === 'en' ? 'text-purple-400 font-semibold' : 'text-gray-400'}`}>EN</span>
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
                    className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                      language === 'ru' ? 'bg-purple-500' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                        language === 'ru' ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                  <span className={`text-xs ${language === 'ru' ? 'text-purple-400 font-semibold' : 'text-gray-400'}`}>RU</span>
                </div>
              </div>

              <button 
                onClick={() => handleCTAClick('mobile_menu_start_free')}
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
              >
                {translations.nav.startFree}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">{translations.hero.badge}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {translations.hero.title}
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              {translations.hero.titleHighlight}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {translations.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => handleCTAClick('hero_start_free')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              {translations.hero.startFree}
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => trackCTAClick('hero_explore_docs')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <Code className="inline-block mr-2 w-5 h-5" />
              {translations.hero.exploreDocs}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center mb-2 text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating 3D elements */}
        <div className="absolute top-1/4 left-10 animate-float-slow">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl backdrop-blur-sm transform rotate-12" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float-slow" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full backdrop-blur-sm" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {translations.features.title}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> {translations.features.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {translations.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Network className="w-8 h-8" />,
                title: translations.features.unifiedApi.title,
                description: translations.features.unifiedApi.desc,
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: translations.features.failover.title,
                description: translations.features.failover.desc,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: translations.features.noVpn.title,
                description: translations.features.noVpn.desc,
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: translations.features.payRubles.title,
                description: translations.features.payRubles.desc,
                gradient: "from-green-500 to-emerald-400"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: translations.features.team.title,
                description: translations.features.team.desc,
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Server className="w-8 h-8" />,
                title: translations.features.compliance.title,
                description: translations.features.compliance.desc,
                gradient: "from-red-500 to-pink-500"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                <div className={`inline-flex p-3 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="api" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {translations.api.title}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> {translations.api.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-300">{translations.api.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 -translate-y-1/2" />
            
            {[
              {
                step: "01",
                title: translations.api.step1.title,
                description: translations.api.step1.desc,
                icon: <Lock className="w-8 h-8" />
              },
              {
                step: "02",
                title: translations.api.step2.title,
                description: translations.api.step2.desc,
                icon: <Code className="w-8 h-8" />
              },
              {
                step: "03",
                title: translations.api.step3.title,
                description: translations.api.step3.desc,
                icon: <GitBranch className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {language === 'ru' ? 'ШАГ' : 'STEP'} {step.step}
                  </div>
                  <div className="inline-flex p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{translations.api.codeExample}</h3>
              <button className="text-sm text-purple-400 hover:text-purple-300">{translations.api.copyCode}</button>
            </div>
            <pre className="bg-black/50 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
{`from openai import OpenAI

client = OpenAI(
    base_url="https://routerai.ru/api/v1",
    api_key="your-routerai-key"
)

response = client.chat.completions.create(
    model="gpt-5.2",  # Change model here
    messages=[{"role": "user", "content": "Hello!"}]
)`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Models & Pricing */}
      <section id="models" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {translations.models.title}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> {translations.models.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-300">{translations.models.subtitle}</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['all', 'text', 'multimodal', 'image'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab === 'all' && translations.models.allModels}
                  {tab === 'text' && translations.models.textModels}
                  {tab === 'multimodal' && translations.models.multimodal}
                  {tab === 'image' && translations.models.imageGen}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {models.map((model, index) => (
                <div key={index} className="bg-black/50 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{model.name}</h3>
                      <p className="text-sm text-gray-400">{model.provider}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-400">{model.price}</div>
                      <div className="text-xs text-gray-500">{translations.models.perTokens}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{model.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Cpu className="w-4 h-4" />
                      {model.context}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button 
                onClick={() => trackCTAClick('view_all_models')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-all"
              >
                {translations.models.viewAll}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Access from Devices */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {translations.devices.title}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> {translations.devices.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-300">{translations.devices.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="inline-flex p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{translations.devices.webChat.title}</h3>
              <p className="text-gray-300 mb-6">
                {translations.devices.webChat.desc}
              </p>
              <button 
                onClick={() => trackCTAClick('try_web_chat')}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                {translations.devices.webChat.button}
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <div className="inline-flex p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{translations.devices.telegram.title}</h3>
              <p className="text-gray-300 mb-6">
                {translations.devices.telegram.desc}
              </p>
              <button 
                onClick={() => trackCTAClick('try_telegram_bot')}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                {translations.devices.telegram.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section id="pricing" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {translations.pricing.title}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> {translations.pricing.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-300">{translations.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="inline-flex p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{translations.pricing.individuals.title}</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{translations.pricing.individuals.card}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{translations.pricing.individuals.sbp}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{translations.pricing.individuals.instant}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{translations.pricing.individuals.noMin}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-purple-500 shadow-2xl shadow-purple-500/30 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                {translations.pricing.business.badge}
              </div>
              <div className="inline-flex p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{translations.pricing.business.title}</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{translations.pricing.business.invoice}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{translations.pricing.business.contract}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{translations.pricing.business.edi}</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{translations.pricing.business.team}</span>
                </li>
              </ul>
              <button 
                onClick={() => handleCTAClick('contact_sales')}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                {translations.pricing.business.contactSales}
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              {translations.pricing.pricingNote}
              <a 
                href="#" 
                onClick={() => trackCTAClick('view_pricing_table')}
                className="text-purple-400 hover:text-purple-300 ml-2"
              >
                {translations.pricing.viewPricing}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {translations.testimonials.title}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> {translations.testimonials.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-300">{translations.testimonials.subtitle}</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex space-x-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentTestimonial === i ? 'bg-purple-400 w-8' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-200 mb-8">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center">
                <div className="text-4xl mr-4">{testimonials[currentTestimonial].avatar}</div>
                <div>
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA after testimonials */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => handleCTAClick('testimonials_start_free')}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
            >
              {translations.testimonials.startFree}
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {translations.cta.title}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> {translations.cta.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {translations.cta.subtitle}
          </p>
          <button 
            onClick={() => handleCTAClick('footer_start_free')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            {translations.cta.startFree}
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-gray-400">{translations.cta.noCard}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Layers className="w-8 h-8 text-purple-500" />
                <span className="text-xl font-bold">RouterAI</span>
              </div>
              <p className="text-gray-400">{translations.footer.tagline}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{translations.footer.product}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">{translations.nav.features}</a></li>
                <li><a href="#models" className="hover:text-white transition-colors">{translations.nav.models}</a></li>
                <li><a href="#api" className="hover:text-white transition-colors">{translations.nav.api}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{translations.devices.webChat.title}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{translations.footer.company}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{language === 'ru' ? 'О нас' : 'About'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'ru' ? 'Блог' : 'Blog'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'ru' ? 'Контакты' : 'Contact'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'ru' ? 'Поддержка' : 'Support'}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{translations.footer.legal}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{language === 'ru' ? 'Политика конфиденциальности' : 'Privacy Policy'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'ru' ? 'Условия использования' : 'Terms of Service'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'ru' ? 'Безопасность' : 'Security'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{language === 'ru' ? 'Соответствие' : 'Compliance'}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>{translations.footer.copyright}</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={modalSource}
        language={language}
      />
    </div>
  );
}