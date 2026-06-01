# Portfolio

A personal portfolio website that showcases my work, skills, and contact information in an interactive, visually appealing way. Built with **Next.js 16**, **Tailwind CSS 4**, **React**, and **TypeScript**, it features custom animations, a 3‑D globe, particle effects, and a **Magic Bento** layout that unifies multiple interactive components.

---

## ✨ Features

- **Responsive Bento Grid** – Cards dynamically rearrange for mobile, tablet, and desktop.
- **Orbiting Icons** – Skill icons orbit along a semi‑circular path using CSS custom properties and `@keyframes`.
- **3‑D Globe** – Interactive globe powered by `cobe` with smooth mouse‑drag navigation.
- **Particle Effects** – Hover‑triggered particles that add a subtle kinetic feel.
- **Global Spotlight** – Light‑blur spotlight that follows the cursor across the grid.
- **Smooth Animations** – Powered by `gsap` and Tailwind's `@theme` utilities.
- **Dark Mode Support** – Auto switches based on the user's system preference.
- **Type‑Safe** – Full TypeScript support for a reliable development experience.
- **SEO Friendly** – Proper meta tags and `next/head` usage for better discoverability.

---

## 🛠️ Tech Stack

| Technology         | Reason                                                                               |
| ------------------ | ------------------------------------------------------------------------------------ |
| **Next.js 16**     | Server‑side rendering, fast routing, and the new Turbopack bundler for quick builds. |
| **React 19**       | Modern component model, concurrent features, and hooks.                              |
| **Tailwind CSS 4** | Utility‑first styling with JIT compilation and `@theme` for custom CSS variables.    |
| **TypeScript**     | Type safety across the codebase, better IDE experience.                              |
| **GSAP**           | High‑performance animations and timelines.                                           |
| **cobe**           | Simple, performant 3‑D globe visualization.                                          |
| **motion**         | Reactive motion values for smooth interactions.                                      |
| **skillicons.dev** | Quick access to a wide variety of skill icons.                                       |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (>= 20) – recommended via [nvm](https://github.com/nvm-sh/nvm).
- **pnpm** (or npm/yarn/bun) – this project uses `pnpm` in the scripts, but any package manager works.

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies (using pnpm)
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Open <http://localhost:3000> in your browser. The page reloads automatically when you edit files.

### Building for Production

```bash
# Create an optimized production build
pnpm build

# Preview the production build locally
pnpm start
```

---

## 📦 Deploying

The app is fully compatible with **Vercel**, **Netlify**, or any platform that supports Next.js.

### Deploy to Vercel (recommended)

1. Push your repo to GitHub.
2. Sign in to [Vercel](https://vercel.com) and import the project.
3. Vercel detects the `next` framework automatically and runs `pnpm build`.
4. Done! Your portfolio will be live on a Vercel sub‑domain, which you can customize.

### Other Platforms

- **Netlify:** Use the _Next.js_ build settings and set the build command to `pnpm build` and the publish directory to `.next`.
- **Docker:** A `Dockerfile` can be added to containerise the app if you prefer self‑hosted deployments.

---

## 🧩 Project Structure

```
├─ app/                     # Next.js app directory (pages, layout, globals)
│   ├─ globals.css          # Tailwind + custom CSS variables
│   └─ page.tsx             # Home page entry point
├─ components/ui/           # Re‑usable UI components
│   ├─ magic-bento.jsx      # Main interactive grid component
│   ├─ orbiting-circles.tsx # Orbiting icons component
│   ├─ icon-cloud.tsx       # 3‑D icon cloud (cobe)
│   └─ true-focus.jsx        # Text‑focus animation component
├─ lib/utils.ts             # Utility functions (e.g., className merger)
├─ public/                  # Static assets
└─ package.json            # Scripts and dependencies
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome‑feature`).
3. Commit your changes with a clear message.
4. Push the branch (`git push origin feature/awesome‑feature`).
5. Open a pull request.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **shadcn UI** – for design inspiration and component patterns.
- **skillicons.dev** – awesome SVG icons for tech stacks.
- **Magic UI** – original orbiting‑circles example that inspired the animation.
- **Tailwind Labs** – for an amazing utility‑first CSS framework.

---

## 🎉 Demo

Visit the live demo at **[https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)** (replace with your actual URL).
