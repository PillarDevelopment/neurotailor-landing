// Функция для отправки заявки в Telegram бот
export async function sendToTelegram(data: {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  telegram: string;
  mvpDescription: string;
  source: string;
}) {
  // Получаем конфигурацию из переменных окружения
  const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Telegram configuration is missing');
    throw new Error('Telegram configuration is missing');
  }

  // Форматируем сообщение
  const message = `
🚀 <b>Новая заявка с NeuroTailor</b>

👤 <b>Имя:</b> ${data.firstName} ${data.lastName}
🏢 <b>Компания:</b> ${data.company || 'Не указана'}
📧 <b>Email:</b> ${data.email}
💬 <b>Telegram:</b> ${data.telegram}
📍 <b>Источник:</b> ${data.source}

📝 <b>Описание MVP:</b>
${data.mvpDescription}

⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
  `.trim();

  // Отправляем сообщение через Telegram Bot API
  const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
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

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Telegram API error: ${error.description}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    throw error;
  }
}

// Альтернативный вариант через webhook (если у вас есть свой сервер)
export async function sendToTelegramWebhook(data: {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  telegram: string;
  mvpDescription: string;
  source: string;
}) {
  const WEBHOOK_URL = process.env.NEXT_PUBLIC_TELEGRAM_WEBHOOK_URL;

  if (!WEBHOOK_URL) {
    console.error('Telegram webhook URL is missing');
    throw new Error('Telegram webhook URL is missing');
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'neurotailor_application',
        data: {
          ...data,
          timestamp: new Date().toISOString(),
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending to webhook:', error);
    throw error;
  }
}
