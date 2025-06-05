'use client';

import React from 'react';
import { 
  NeuroTailorLogo,
  NeuroTailorLogoDefault,
  NeuroTailorLogoMinimal,
  NeuroTailorLogoIcon,
  NeuroTailorLogoHorizontal 
} from '@/components/Logo';
import { Download } from 'lucide-react';

export default function LogoShowcase() {
  const downloadSVG = (variant: string) => {
    // Создаем элемент для рендера SVG
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);

    // Рендерим нужный вариант
    let svgElement: SVGSVGElement | null = null;
    
    switch(variant) {
      case 'default':
        tempDiv.innerHTML = '<div id="temp-logo"></div>';
        const defaultContainer = tempDiv.querySelector('#temp-logo');
        if (defaultContainer) {
          // Тут нужно будет добавить рендер компонента
          svgElement = defaultContainer.querySelector('svg');
        }
        break;
      // Добавьте другие варианты по аналогии
    }

    // Очищаем временный элемент
    document.body.removeChild(tempDiv);
    
    alert(`Для скачивания SVG скопируйте код из компонента Logo.tsx для варианта "${variant}"`);
  };

  const variants = [
    {
      name: 'Основной логотип',
      description: 'Полная версия с иконкой мозга, нейронными связями и текстом',
      component: <NeuroTailorLogoDefault />,
      variant: 'default',
      usage: 'Используйте для главной страницы, презентаций и документов'
    },
    {
      name: 'Минималистичный',
      description: 'Упрощенная версия с абстрактной нейросетью',
      component: <NeuroTailorLogoMinimal />,
      variant: 'minimal',
      usage: 'Для минималистичных дизайнов и современных интерфейсов'
    },
    {
      name: 'Иконка',
      description: 'Квадратная иконка для favicon и мобильных приложений',
      component: <NeuroTailorLogoIcon />,
      variant: 'icon',
      usage: 'Favicon, иконка приложения, социальные сети'
    },
    {
      name: 'Горизонтальный',
      description: 'Расширенная версия с эффектом свечения',
      component: <NeuroTailorLogoHorizontal />,
      variant: 'horizontal',
      usage: 'Для хедера сайта, баннеров и широких макетов'
    }
  ];

  const colorPalette = [
    { name: 'Primary Purple', hex: '#a855f7', rgb: 'rgb(168, 85, 247)' },
    { name: 'Primary Pink', hex: '#ec4899', rgb: 'rgb(236, 72, 153)' },
    { name: 'Accent Orange', hex: '#f97316', rgb: 'rgb(249, 115, 22)' },
    { name: 'Light Purple', hex: '#c084fc', rgb: 'rgb(192, 132, 252)' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NeuroTailor
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Логотипы</span>
          </h1>
          <p className="text-xl text-gray-300">Варианты логотипа для разных применений</p>
        </div>

        {/* Цветовая палитра */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Цветовая палитра</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {colorPalette.map((color) => (
              <div key={color.hex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div 
                  className="w-full h-20 rounded-lg mb-3"
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="font-semibold mb-1">{color.name}</h3>
                <p className="text-sm text-gray-400">{color.hex}</p>
                <p className="text-xs text-gray-500">{color.rgb}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Варианты логотипов */}
        <div className="space-y-12">
          {variants.map((item) => (
            <div 
              key={item.variant}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <p className="text-sm text-purple-400 mb-6">
                    <strong>Применение:</strong> {item.usage}
                  </p>
                  <button
                    onClick={() => downloadSVG(item.variant)}
                    className="inline-flex items-center px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg transition-all"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Скачать SVG
                  </button>
                </div>
                
                <div className="flex items-center justify-center">
                  {/* Светлый фон для демонстрации */}
                  <div className="bg-white/10 rounded-xl p-8">
                    {item.component}
                  </div>
                </div>
              </div>

              {/* Примеры использования */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-semibold mb-4">Примеры использования</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* На темном фоне */}
                  <div className="bg-black rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-400 mb-2">На темном фоне</p>
                    <div className="flex justify-center">
                      <NeuroTailorLogo variant={item.variant} className="h-10" />
                    </div>
                  </div>
                  
                  {/* На светлом фоне */}
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-xs text-gray-600 mb-2">На светлом фоне</p>
                    <div className="flex justify-center">
                      <NeuroTailorLogo variant={item.variant} className="h-10" />
                    </div>
                  </div>
                  
                  {/* На градиентном фоне */}
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-4 text-center">
                    <p className="text-xs text-white/80 mb-2">На градиенте</p>
                    <div className="flex justify-center">
                      <NeuroTailorLogo variant={item.variant} className="h-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Руководство по использованию */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Руководство по использованию</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Минимальные размеры</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Основной логотип: минимум 180px в ширину</li>
                <li>Минималистичный: минимум 150px в ширину</li>
                <li>Иконка: минимум 32x32px</li>
                <li>Горизонтальный: минимум 240px в ширину</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Отступы</h3>
              <p>Всегда оставляйте свободное пространство вокруг логотипа равное высоте буквы "N" в логотипе.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Запрещено</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Изменять пропорции логотипа</li>
                <li>Изменять цвета градиентов</li>
                <li>Добавлять тени или эффекты</li>
                <li>Размещать на слишком пестром фоне</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Кнопка возврата */}
        <div className="mt-12 text-center">
          <a 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}