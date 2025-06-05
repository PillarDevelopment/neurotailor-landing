#!/bin/bash

# Скрипт для автоматического коммита и деплоя
echo "🚀 Подготовка к деплою NeuroTailor Landing..."

# Добавляем все изменения
git add .

# Создаем коммит
git commit -m "Update Russian content and translations"

# Проверяем, есть ли remote origin
if git remote | grep -q "origin"; then
    echo "📤 Отправка изменений в GitHub..."
    git push origin main
else
    echo "⚠️  Remote origin не настроен. Настройте его командой:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/neurotailor-landing.git"
fi

echo "✅ Готово! Теперь можете запустить 'vercel' для деплоя."