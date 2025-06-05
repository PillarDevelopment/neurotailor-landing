'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Code, Zap, Shield, Users, Star, ArrowRight, Play, Check, X, Menu, Sparkles, Cpu, Clock, RussianRuble, Rocket, GitBranch, Globe, BarChart, Brain } from 'lucide-react';
import { trackCTAClick, trackPricingSelect, trackPlatformView, trackMobileMenuToggle } from '@/lib/analytics';
import ApplicationModal from '@/components/Modal/ApplicationModal';

export default function NeuroTailorLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('web');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('unknown');

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

  const pricingPlans = [
    {
      name: 'Старт',
      price: '₽99,900',
      period: '/месяц',
      mvps: '1 MVP в месяц',
      features: [
        'До 10 экранов',
        'Доставка за 48 часов',
        'Базовый функционал',
        'Бесплатный хостинг',
        'Доступ к исходному коду',
        'Email поддержка'
      ],
      color: 'from-blue-500 to-cyan-400',
      popular: false
    },
    {
      name: 'Рост',
      price: '₽249,900',
      period: '/месяц',
      mvps: '3 MVP в месяц',
      features: [
        'До 15 экранов на MVP',
        'Доставка за 24-48 часов',
        'API интеграции',
        'Поддержка блокчейна',
        'Приоритетная поддержка',
        'Кастомный брендинг'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Масштаб',
      price: '₽499,900',
      period: '/месяц',
      mvps: '5 MVP в месяц',
      features: [
        'Неограниченно экранов',
        'Приоритетная очередь',
        'Внешние API',
        'Персональный менеджер',
        'White-label опция',
        'Кастомное обучение AI'
      ],
      color: 'from-orange-500 to-red-500',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Сара Чен",
      role: "Основатель, TechStart",
      content: "NeuroTailor помог мне протестировать 3 разные идеи всего за один месяц. AI-сгенерированные MVP произвели впечатление на инвесторов и помогли привлечь pre-seed финансирование.",
      avatar: "👩‍💼"
    },
    {
      name: "Михаил Родригес",
      role: "Серийный предприниматель",
      content: "Я запустил 5 успешных продуктов с помощью NeuroTailor. Скорость и качество не имеют аналогов. Это как иметь целую команду разработчиков под рукой.",
      avatar: "👨‍💻"
    },
    {
      name: "Эмма Ватсон",
      role: "Продакт-менеджер, Fortune 500",
      content: "Мы используем NeuroTailor для быстрого прототипирования. То, что раньше занимало 3 месяца, теперь занимает 2 дня. Это революция в нашем процессе инноваций.",
      avatar: "👩‍🔬"
    }
  ];

  const stats = [
    { number: "500+", label: "Созданных MVP", icon: <Rocket className="w-6 h-6" /> },
    { number: "24ч", label: "Средняя доставка", icon: <Clock className="w-6 h-6" /> },
    { number: "94%", label: "Успешность", icon: <BarChart className="w-6 h-6" /> },
    { number: "99,900", label: "Стоимость за MVP", icon: <RussianRuble className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
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
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NeuroTailor
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-purple-400 transition-colors">Возможности</a>
              <a href="#how-it-works" className="hover:text-purple-400 transition-colors">Как это работает</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Тарифы</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors">Отзывы</a>
              <button 
                onClick={() => handleCTAClick('header_start_building')}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
              >
                Начать создавать
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
              <a href="#features" className="block hover:text-purple-400 transition-colors">Возможности</a>
              <a href="#how-it-works" className="block hover:text-purple-400 transition-colors">Как это работает</a>
              <a href="#pricing" className="block hover:text-purple-400 transition-colors">Тарифы</a>
              <a href="#testimonials" className="block hover:text-purple-400 transition-colors">Отзывы</a>
              <button 
                onClick={() => handleCTAClick('mobile_menu_start_building')}
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
              >
                Начать создавать
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
            <span className="text-sm text-purple-300">AI-разработка MVP</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            От идеи до MVP за
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              24 часа
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Пусть AI-агенты создадут MVP вашего стартапа, пока вы спите. 
            Без программирования. Готово для инвесторов за дни, а не месяцы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => handleCTAClick('hero_start_now')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              Начать создавать сейчас
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => trackCTAClick('hero_watch_demo')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <Play className="inline-block mr-2 w-5 h-5" />
              Смотреть демо
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
              Создавайте что угодно с
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI-агентами</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Наши AI-агенты берут на себя всё: от дизайна до деплоя
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full-Stack разработка",
                description: "Frontend, backend и база данных - всё генерируется автоматически",
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Мультиплатформенность",
                description: "Веб, мобильные приложения, Telegram-боты и блокчейн dApps",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Мгновенный деплой",
                description: "Ваш MVP автоматически публикуется с бесплатным хостингом",
                gradient: "from-orange-500 to-red-500"
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
      <section id="how-it-works" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Как это
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> работает</span>
            </h2>
            <p className="text-xl text-gray-300">От идеи до готового MVP в 3 простых шага</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 -translate-y-1/2" />
            
            {[
              {
                step: "01",
                title: "Опишите вашу идею",
                description: "Расскажите о вашем видении продукта, целевой аудитории и ключевых функциях",
                icon: <Brain className="w-8 h-8" />
              },
              {
                step: "02",
                title: "AI создаёт ваш MVP",
                description: "Наши AI-агенты проектируют, программируют и тестируют ваше приложение автоматически",
                icon: <Cpu className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Запускайте и улучшайте",
                description: "Получите готовый MVP с исходным кодом и начните собирать обратную связь пользователей",
                icon: <Rocket className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    ШАГ {step.step}
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
        </div>
      </section>

      {/* Platform Examples */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Создавайте для любой
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> платформы</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['web', 'mobile', 'telegram', 'blockchain'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab === 'web' && 'Веб'}
                  {tab === 'mobile' && 'Мобильные'}
                  {tab === 'telegram' && 'Telegram'}
                  {tab === 'blockchain' && 'Блокчейн'}
                </button>
              ))}
            </div>

            <div className="text-center">
              {activeTab === 'web' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Веб-приложения</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Full-stack веб-приложения с React, Next.js, базами данных и API. 
                    Идеально для SaaS, маркетплейсов и дашбордов.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'mobile' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Мобильные приложения</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Нативные iOS и Android приложения на Flutter. 
                    Кроссплатформенная разработка с единой кодовой базой.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {['Flutter', 'Dart', 'iOS', 'Android', 'Firebase'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'telegram' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Telegram Mini Apps</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Интерактивные Telegram-боты и мини-приложения. 
                    Идеально для крипто-проектов и инструментов сообщества.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {['Telegram API', 'Web App', 'Bot Framework', 'Payments', 'TON'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'blockchain' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Блокчейн dApps</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Смарт-контракты и децентрализованные приложения. 
                    Поддержка Ethereum, Polygon, BSC, TON и Solana.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {['Solidity', 'Web3.js', 'Ethers.js', 'Smart Contracts', 'DeFi'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Простые и прозрачные
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> тарифы</span>
            </h2>
            <p className="text-xl text-gray-300">Выберите план, который соответствует вашей скорости инноваций</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 bg-white/5 backdrop-blur-sm border rounded-2xl transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/30' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                    САМЫЙ ПОПУЛЯРНЫЙ
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-purple-300 font-medium">{plan.mvps}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handlePricingClick(plan.name)}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  Начать
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Нужно больше? 
              <a 
                href="#" 
                onClick={() => trackCTAClick('contact_custom_plans')}
                className="text-purple-400 hover:text-purple-300 ml-2"
              >
                Свяжитесь с нами для индивидуальных планов
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
              Любимый инструмент
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> инноваторов</span>
            </h2>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы создать ваш
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> следующий большой проект?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Присоединяйтесь к сотням предпринимателей, которые запускают проекты быстрее с помощью AI
          </p>
          <button 
            onClick={() => handleCTAClick('footer_start_trial')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            Начать бесплатный триал
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-gray-400">Без кредитной карты • Поддержка 24/7</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-purple-500" />
                <span className="text-xl font-bold">NeuroTailor</span>
              </div>
              <p className="text-gray-400">Платформа AI-разработки MVP</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Шаблоны</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Конфиденциальность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Условия</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасность</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© 2024 NeuroTailor. Все права защищены.</p>
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
      />
    </div>
  );
}