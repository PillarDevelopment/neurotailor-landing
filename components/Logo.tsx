'use client';

import React from 'react';

interface LogoProps {
  variant?: 'default' | 'minimal' | 'icon' | 'horizontal';
  className?: string;
  showText?: boolean;
}

export const NeuroTailorLogo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  className = '',
  showText = true 
}) => {
  // Вариант 1: Основной логотип с мозгом и иглой
  if (variant === 'default') {
    return (
      <svg 
        width="200" 
        height="60" 
        viewBox="0 0 200 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        
        {/* Иконка мозга с иглой */}
        <g transform="translate(10, 10)">
          {/* Мозг */}
          <path
            d="M20 8C20 5.79 18.21 4 16 4C15.28 4 14.61 4.2 14.05 4.55C13.45 3.65 12.48 3 11.35 3C10.8 3 10.29 3.15 9.85 3.4C9.3 2.55 8.35 2 7.25 2C5.46 2 4 3.46 4 5.25C4 5.55 4.05 5.85 4.1 6.1C2.85 6.65 2 7.9 2 9.35C2 10.8 2.85 12.05 4.1 12.6C4.05 12.85 4 13.15 4 13.45C4 15.24 5.46 16.7 7.25 16.7C8.35 16.7 9.3 16.15 9.85 15.3C10.29 15.55 10.8 15.7 11.35 15.7C12.48 15.7 13.45 15.05 14.05 14.15C14.61 14.5 15.28 14.7 16 14.7C18.21 14.7 20 12.91 20 10.7C20 10.15 19.85 9.65 19.6 9.2C19.85 8.75 20 8.25 20 7.7V8Z"
            fill="url(#gradient1)"
            stroke="url(#gradient2)"
            strokeWidth="0.5"
          />
          
          {/* Нейронные связи */}
          <circle cx="8" cy="8" r="1" fill="#f97316" opacity="0.8" />
          <circle cx="12" cy="6" r="1" fill="#ec4899" opacity="0.8" />
          <circle cx="16" cy="9" r="1" fill="#a855f7" opacity="0.8" />
          <circle cx="10" cy="12" r="1" fill="#c084fc" opacity="0.8" />
          
          <path
            d="M8 8L12 6M12 6L16 9M8 8L10 12M10 12L16 9"
            stroke="url(#gradient2)"
            strokeWidth="0.5"
            opacity="0.5"
          />
          
          {/* Игла (символизирующая tailor) */}
          <path
            d="M18 12L22 16M22 16L23 17C23.5 17.5 23.5 18.5 23 19C22.5 19.5 21.5 19.5 21 19L20 18M22 16L20 18"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="18" cy="12" r="1.5" fill="none" stroke="url(#gradient1)" strokeWidth="1" />
        </g>
        
        {/* Текст */}
        {showText && (
          <g transform="translate(45, 20)">
            <text
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="18"
              fontWeight="700"
              fill="url(#gradient2)"
            >
              <tspan x="0" y="0">Neuro</tspan>
              <tspan x="55" y="0" fill="url(#gradient1)">Tailor</tspan>
            </text>
            <text
              x="0"
              y="15"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="8"
              fontWeight="400"
              fill="#9ca3af"
              letterSpacing="1"
            >
              AI-POWERED MVP
            </text>
          </g>
        )}
      </svg>
    );
  }

  // Вариант 2: Минималистичный
  if (variant === 'minimal') {
    return (
      <svg 
        width="180" 
        height="50" 
        viewBox="0 0 180 50" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="gradientMin" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        
        {/* Абстрактный символ нейросети */}
        <g transform="translate(10, 10)">
          <circle cx="15" cy="15" r="2" fill="url(#gradientMin)" />
          <circle cx="5" cy="10" r="1.5" fill="#a855f7" opacity="0.7" />
          <circle cx="25" cy="10" r="1.5" fill="#ec4899" opacity="0.7" />
          <circle cx="5" cy="20" r="1.5" fill="#ec4899" opacity="0.7" />
          <circle cx="25" cy="20" r="1.5" fill="#a855f7" opacity="0.7" />
          
          <path
            d="M15 15L5 10M15 15L25 10M15 15L5 20M15 15L25 20"
            stroke="url(#gradientMin)"
            strokeWidth="1"
            opacity="0.3"
          />
        </g>
        
        {showText && (
          <text
            x="45"
            y="30"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="22"
            fontWeight="600"
            fill="url(#gradientMin)"
          >
            NeuroTailor
          </text>
        )}
      </svg>
    );
  }

  // Вариант 3: Только иконка
  if (variant === 'icon') {
    return (
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="iconGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="iconGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        
        {/* Стилизованная буква N с нейронными элементами */}
        <rect x="2" y="2" width="36" height="36" rx="8" fill="url(#iconGrad1)" opacity="0.1" />
        <rect x="2" y="2" width="36" height="36" rx="8" stroke="url(#iconGrad1)" strokeWidth="1" fill="none" />
        
        {/* Буква N из точек и связей */}
        <g transform="translate(8, 8)">
          <circle cx="4" cy="20" r="2" fill="url(#iconGrad1)" />
          <circle cx="4" cy="4" r="2" fill="url(#iconGrad2)" />
          <circle cx="20" cy="20" r="2" fill="url(#iconGrad2)" />
          <circle cx="20" cy="4" r="2" fill="url(#iconGrad1)" />
          
          <path
            d="M4 20L4 4M4 4L20 20M20 20L20 4"
            stroke="url(#iconGrad1)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Дополнительные нейронные точки */}
          <circle cx="12" cy="12" r="1.5" fill="#ec4899" opacity="0.8" />
          <circle cx="8" cy="8" r="1" fill="#f97316" opacity="0.6" />
          <circle cx="16" cy="16" r="1" fill="#a855f7" opacity="0.6" />
        </g>
      </svg>
    );
  }

  // Вариант 4: Горизонтальный с полным брендингом
  if (variant === 'horizontal') {
    return (
      <svg 
        width="280" 
        height="60" 
        viewBox="0 0 280 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id="horizGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Фоновый элемент */}
        <rect x="5" y="5" width="50" height="50" rx="12" fill="url(#horizGrad1)" opacity="0.1" />
        
        {/* Иконка с эффектом свечения */}
        <g transform="translate(15, 15)" filter="url(#glow)">
          {/* Центральный нейрон */}
          <circle cx="15" cy="15" r="4" fill="url(#horizGrad1)" />
          
          {/* Окружающие нейроны */}
          <circle cx="5" cy="5" r="2.5" fill="#a855f7" opacity="0.8" />
          <circle cx="25" cy="5" r="2.5" fill="#ec4899" opacity="0.8" />
          <circle cx="5" cy="25" r="2.5" fill="#f97316" opacity="0.8" />
          <circle cx="25" cy="25" r="2.5" fill="#c084fc" opacity="0.8" />
          
          {/* Связи */}
          <path
            d="M15 15L5 5M15 15L25 5M15 15L5 25M15 15L25 25"
            stroke="url(#horizGrad1)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          
          {/* Дополнительные маленькие точки */}
          <circle cx="10" cy="10" r="1" fill="#ec4899" />
          <circle cx="20" cy="10" r="1" fill="#f97316" />
          <circle cx="10" cy="20" r="1" fill="#a855f7" />
          <circle cx="20" cy="20" r="1" fill="#c084fc" />
        </g>
        
        {/* Текст */}
        <g transform="translate(70, 18)">
          <text
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="24"
            fontWeight="700"
            letterSpacing="-0.5"
          >
            <tspan x="0" y="0" fill="url(#horizGrad1)">Neuro</tspan>
            <tspan x="65" y="0" fill="#e5e7eb">Tailor</tspan>
          </text>
          <text
            x="0"
            y="20"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="11"
            fontWeight="400"
            fill="#9ca3af"
            letterSpacing="2"
          >
            AI-POWERED MVP PLATFORM
          </text>
        </g>
      </svg>
    );
  }

  return null;
};

// Экспорт отдельных вариантов для удобства
export const NeuroTailorLogoDefault = () => <NeuroTailorLogo variant="default" />;
export const NeuroTailorLogoMinimal = () => <NeuroTailorLogo variant="minimal" />;
export const NeuroTailorLogoIcon = () => <NeuroTailorLogo variant="icon" />;
export const NeuroTailorLogoHorizontal = () => <NeuroTailorLogo variant="horizontal" />;