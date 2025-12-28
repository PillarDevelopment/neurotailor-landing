import { NextRequest, NextResponse } from 'next/server';

// Интерфейс для данных формы
interface ApplicationData {
  firstName: string;
  email: string;
  telegram: string;
  mvpDescription: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ApplicationData = await request.json();

    // Validate required fields
    if (!data.firstName || !data.email) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Format Telegram message
    const message = `
🚀 <b>New Tech Catalyst Application</b>

👤 <b>Name:</b> ${escapeHtml(data.firstName)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
💬 <b>Telegram:</b> ${escapeHtml(data.telegram || 'Not provided')}
📍 <b>Source:</b> ${escapeHtml(data.source)}

📝 <b>Use Case:</b>
${escapeHtml(data.mvpDescription)}

⏰ <b>Time:</b> ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' })}
`.trim();

    // Получение данных телеграм бота из переменных окружения
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram bot credentials not configured');
      // Return success to user but log error
      return NextResponse.json(
        { success: true, message: 'Application received' },
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
      // Still return success to user
      return NextResponse.json(
        { success: true, message: 'Application received' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting the application' },
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
