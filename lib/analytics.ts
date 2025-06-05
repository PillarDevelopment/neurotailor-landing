// Утилиты для работы с Яндекс.Метрикой

declare global {
  interface Window {
    ym: (counterId: number, action: string, ...params: any[]) => void;
  }
}

export const YM_ID = process.env.NEXT_PUBLIC_YM_ID || "102447006";

/**
 * Отправить событие в Яндекс.Метрику
 * @param eventName - название события
 * @param params - дополнительные параметры
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(Number(YM_ID), 'reachGoal', eventName, params);
  }
};

/**
 * Отслеживание кликов на кнопки CTA
 */
export const trackCTAClick = (buttonName: string) => {
  trackEvent('cta_click', { button: buttonName });
};

/**
 * Отслеживание выбора тарифного плана
 */
export const trackPricingSelect = (planName: string) => {
  trackEvent('pricing_select', { plan: planName });
};

/**
 * Отслеживание переключения платформ
 */
export const trackPlatformView = (platform: string) => {
  trackEvent('platform_view', { platform });
};

/**
 * Отслеживание открытия мобильного меню
 */
export const trackMobileMenuToggle = (isOpen: boolean) => {
  trackEvent('mobile_menu_toggle', { isOpen });
};