'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Code, Zap, Shield, Users, Star, ArrowRight, Play, Check, X, Menu, Sparkles, Cpu, Clock, DollarSign, Rocket, GitBranch, Globe, BarChart, Brain } from 'lucide-react';

export default function NeuroTailorLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('web');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      mvps: '1 MVP per month',
      features: [
        'Up to 10 screens',
        '48-hour delivery',
        'Basic functionality',
        'Free hosting included',
        'Source code access',
        'Email support'
      ],
      color: 'from-blue-500 to-cyan-400',
      popular: false
    },
    {
      name: 'Growth',
      price: '$2,499',
      period: '/month',
      mvps: '3 MVPs per month',
      features: [
        'Up to 15 screens per MVP',
        '24-48 hour delivery',
        'API integrations',
        'Blockchain support',
        'Priority support',
        'Custom branding'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Scale',
      price: '$4,999',
      period: '/month',
      mvps: '5 MVPs per month',
      features: [
        'Unlimited screens',
        'Priority queue',
        'External API access',
        'Dedicated manager',
        'White-label option',
        'Custom AI training'
      ],
      color: 'from-orange-500 to-red-500',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, TechStart",
      content: "NeuroTailor helped me validate 3 different ideas in just one month. The AI-generated MVPs were impressive enough to secure my pre-seed funding.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Rodriguez",
      role: "Serial Entrepreneur",
      content: "I've launched 5 successful products using NeuroTailor. The speed and quality are unmatched. It's like having a entire dev team at your fingertips.",
      avatar: "👨‍💻"
    },
    {
      name: "Emma Watson",
      role: "Product Manager, Fortune 500",
      content: "We use NeuroTailor for rapid prototyping. What used to take 3 months now takes 2 days. It's revolutionized our innovation process.",
      avatar: "👩‍🔬"
    }
  ];

  const stats = [
    { number: "500+", label: "MVPs Created", icon: <Rocket className="w-6 h-6" /> },
    { number: "24h", label: "Average Delivery", icon: <Clock className="w-6 h-6" /> },
    { number: "94%", label: "Success Rate", icon: <BarChart className="w-6 h-6" /> },
    { number: "$187", label: "Cost per MVP", icon: <DollarSign className="w-6 h-6" /> }
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
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How it Works</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                Start Building
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block hover:text-purple-400 transition-colors">Features</a>
              <a href="#how-it-works" className="block hover:text-purple-400 transition-colors">How it Works</a>
              <a href="#pricing" className="block hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="block hover:text-purple-400 transition-colors">Testimonials</a>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                Start Building
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
            <span className="text-sm text-purple-300">AI-Powered MVP Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            From Idea to MVP in
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              24 Hours
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let AI agents build your startup MVP while you sleep. 
            No coding required. Investor-ready in days, not months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              Start Building Now
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
              <Play className="inline-block mr-2 w-5 h-5" />
              Watch Demo
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
              Build Anything with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Agents</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI agents handle everything from design to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Full-Stack Development",
                description: "Frontend, backend, and database - all generated automatically",
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Multi-Platform",
                description: "Web, mobile, Telegram bots, and blockchain dApps",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Deployment",
                description: "Your MVP goes live automatically with free hosting",
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
              How It
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Works</span>
            </h2>
            <p className="text-xl text-gray-300">From idea to live MVP in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 -translate-y-1/2" />
            
            {[
              {
                step: "01",
                title: "Describe Your Idea",
                description: "Tell us about your product vision, target audience, and core features",
                icon: <Brain className="w-8 h-8" />
              },
              {
                step: "02",
                title: "AI Builds Your MVP",
                description: "Our AI agents design, code, and test your application automatically",
                icon: <Cpu className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Launch & Iterate",
                description: "Get your live MVP with source code and start collecting user feedback",
                icon: <Rocket className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    STEP {step.step}
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
              Build for Any
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Platform</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['web', 'mobile', 'telegram', 'blockchain'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="text-center">
              {activeTab === 'web' && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">Web Applications</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Full-stack web apps with React, Next.js, databases, and APIs. 
                    Perfect for SaaS, marketplaces, and dashboards.
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
                  <h3 className="text-2xl font-semibold">Mobile Applications</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Native iOS and Android apps with Flutter. 
                    Cross-platform development with a single codebase.
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
                    Interactive Telegram bots and mini-apps. 
                    Perfect for crypto projects and community tools.
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
                  <h3 className="text-2xl font-semibold">Blockchain dApps</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Smart contracts and decentralized applications. 
                    Support for Ethereum, Polygon, BSC, TON, and Solana.
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
              Simple, Transparent
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your innovation speed</p>
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
                    MOST POPULAR
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

                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/10 hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Need more? 
              <a href="#" className="text-purple-400 hover:text-purple-300 ml-2">
                Contact us for custom plans
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
              Loved by
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Innovators</span>
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
            Ready to Build Your
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"> Next Big Thing?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of entrepreneurs who are shipping faster with AI
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            Start Your Free Trial
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-gray-400">No credit card required • 24/7 support</p>
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
              <p className="text-gray-400">AI-powered MVP development platform</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>© 2024 NeuroTailor. All rights reserved.</p>
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
    </div>
  );
}