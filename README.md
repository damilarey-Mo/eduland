# EduLand - Modern Educational Institution Website

A modern, fully responsive website for an educational institution built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![EduLand Website Preview](public/images/preview.jpg)

## Features

- 🚀 **Built with Next.js 14** (App Router) for exceptional performance and SEO
- 🔍 **SEO Optimized** with proper metadata and semantic HTML
- 📱 **Fully Responsive Design** that looks great on all devices
- 🎨 **Modern UI/UX** with Tailwind CSS for styling
- ✨ **Smooth Animations** powered by Framer Motion
- 🧩 **Modular Component Architecture** for easy maintenance and scalability
- 💡 **Interactive UI Components** for improved user engagement

## Key Sections

- Modern hero section with animated elements
- Featured sections highlighting school offerings
- About section with key information
- Animated statistics display
- Testimonials carousel with student and parent reviews
- Latest news and updates
- Call-to-action for admissions
- Footer with navigation and newsletter signup

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/eduland.git
cd eduland
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
eduland/
├── public/           # Static assets (images, etc.)
├── src/
│   ├── app/          # Next.js app router
│   ├── components/   # Reusable components
│   │   ├── home/     # Home page specific components
│   │   ├── layout/   # Layout components (Header, Footer, etc.)
│   │   └── ui/       # Shared UI components
│   └── styles/       # Global styles
├── .eslintrc.json    # ESLint configuration
├── next.config.js    # Next.js configuration
├── package.json      # Project dependencies
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by editing the `tailwind.config.ts` file.

### Content

Most content is stored directly in the component files. To update content, edit the relevant component files in the `src/components` directory.

### Images

Replace the images in the `public/images` directory with your own images. Make sure to maintain the same file structure and naming convention.

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/eduland)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
