import { NextRequest, NextResponse } from 'next/server';

// Интерфейс для данных формы
interface ApplicationData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  telegram: string;
  mvpDescription: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ApplicationData = await request.json();

    // Проверка обязательных полей
    if (!data.firstName || !data.lastName || !data.email || !data.telegram || !data.mvpDescription) {
      return NextResponse.json(
        { error: 'Пожалуйста, заполните все обязательные поля' },
        { status: 400 }
      );
    }

    // Форматирование сообщения для Telegram
    const message = `
🚀 <b>Новая заявка с NeuroTailor</b>

👤 <b>Имя:</b> ${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}
🏢 <b>Компания:</b> ${data.company ? escapeHtml(data.company) : 'Не указана'}
📧 <b>Email:</b> ${escapeHtml(data.email)}
💬 <b>Telegram:</b> ${escapeHtml(data.telegram)}
📍 <b>Источник:</b> ${escapeHtml(data.source)}

📝 <b>Описание MVP:</b>
${escapeHtml(data.mvpDescription)}

⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
`.trim();

    // Получение данных телеграм бота из переменных окружения
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram bot credentials not configured');
      // Возвращаем успех для пользователя, но логируем ошибку
      return NextResponse.json(
        { success: true, message: 'Заявка принята' },
        { status: 200 }
      );
    }

    // Отправка сообщения в Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramData);
      // Все равно возвращаем успех для пользователя
      return NextResponse.json(
        { success: true, message: 'Заявка принята' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Заявка успешно отправлена' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заявки' },
      { status: 500 }
    );
  }
}

// Функция для экранирования HTML в сообщениях Telegram
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
