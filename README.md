# NeuroTailor Landing Page

AI-powered MVP development platform landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, animated gradients, and floating particles
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Interactive Elements**: Hover animations, auto-rotating testimonials, platform tabs
- **Performance Optimized**: Built with Next.js 15 and Turbopack
- **SEO Ready**: Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd neurotailor-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-github-repo]
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with default settings

### Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Follow the prompts to deploy your application.

## 🎨 Customization

### Colors
The color scheme uses purple and pink gradients. To change colors, update the Tailwind classes in `app/page.tsx`.

### Content
All content is in `app/page.tsx`. Update the following sections:
- Hero section text
- Features
- Pricing plans
- Testimonials

### Animations
Animations are defined in `app/globals.css`. You can adjust:
- Animation duration
- Movement distance
- Timing functions

## 📱 Sections

1. **Hero**: Eye-catching header with animated background
2. **Stats**: Key metrics in a grid layout
3. **Features**: Three main features with hover effects
4. **How it Works**: Step-by-step process
5. **Platforms**: Tabbed interface showing different platforms
6. **Pricing**: Three-tier pricing with popular plan highlight
7. **Testimonials**: Auto-rotating customer reviews
8. **CTA**: Final call-to-action
9. **Footer**: Links and legal information

## 🔧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📄 License

MIT License

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

Built with ❤️ by NeuroTailor team