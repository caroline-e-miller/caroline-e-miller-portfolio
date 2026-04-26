# Caroline Miller - Portfolio

A modern, responsive portfolio website built with Next.js 15, showcasing projects and professional work.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Headless UI
- **Theme Management:** next-themes
- **Fonts:** Geist (Google Fonts)
- **Deployment:** Vercel

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/caroline-e-miller/caroline-e-miller-portfolio.git
   cd caroline-e-miller-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```


## 🚀 Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

The app will automatically reload when you make changes to the code.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 🏗️ Building for Production

To build the app for production:

```bash
npm run build
```

This will create an optimized build in the `.next` folder.

## 📁 Project Structure

```
caroline-e-miller-portfolio/
├── src/
│   └── app/
│       ├── components/          # Reusable components
│       │   ├── footer.tsx      # Site footer
│       │   └── primarynav.tsx  # Navigation header
│       ├── about/              # About page
│       ├── blog/               # Blog page
│       ├── contact/            # Contact page
│       ├── portfolio/          # Portfolio page
│       ├── globals.css         # Global styles
│       ├── layout.tsx          # Root layout
│       └── page.tsx            # Home page
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── eslint.config.mjs           # ESLint configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Features

- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Dark/Light Mode:** Theme switching with system preference detection
- **TypeScript:** Full type safety
- **SEO Optimized:** Server-side rendering with Next.js
- **Contact Form:** Integrated with Formspree
- **Modern UI:** Clean, professional design with Headless UI components

## 🚀 Deployment

This app is deployed on GitHub Pages.


## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js
