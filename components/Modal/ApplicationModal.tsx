'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export default function ApplicationModal({ isOpen, onClose, source = 'unknown' }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    telegram: '',
    mvpDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Отправка данных на сервер
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        
        // Очистка формы через 2 секунды после успешной отправки
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            telegram: '',
            mvpDescription: ''
          });
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        console.error('Server error:', result.error);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black/90 border border-white/20 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">
            Начните создавать с
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> NeuroTailor</span>
          </h3>
          <p className="text-gray-400">
            Расскажите о вашей идее, и мы поможем воплотить её в жизнь
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                Имя *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="Иван"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                Фамилия *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                placeholder="Иванов"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
              Компания
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
              placeholder="Название вашей компании"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
              placeholder="ivan@example.com"
            />
          </div>

          <div>
            <label htmlFor="telegram" className="block text-sm font-medium text-gray-300 mb-1">
              Telegram *
            </label>
            <input
              type="text"
              id="telegram"
              name="telegram"
              value={formData.telegram}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
              placeholder="@username"
            />
          </div>

          <div>
            <label htmlFor="mvpDescription" className="block text-sm font-medium text-gray-300 mb-1">
              Описание твоего MVP *
            </label>
            <textarea
              id="mvpDescription"
              name="mvpDescription"
              value={formData.mvpDescription}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all resize-none"
              placeholder="Расскажите о вашей идее: что это за продукт, какие проблемы он решает, для кого предназначен..."
            />
          </div>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
              ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
              ❌ Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105'
            }`}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
          </p>
        </form>
      </div>
    </div>
  );
}
