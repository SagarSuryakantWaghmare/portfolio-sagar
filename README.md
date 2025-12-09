# Sagar Waghmare - Portfolio

A modern, professional portfolio website built with Next.js 16, TypeScript, Tailwind CSS v3, and Framer Motion — inspired by braydoncoyer.dev's clean design aesthetic.

## ✨ Features

- **Bento Grid Layout** - Modern card-based design with smooth hover effects
- **Smooth Animations** - Powered by Framer Motion for elegant transitions
- **Responsive Design** - Optimized for all devices with decorative grid borders
- **Professional UI** - Clean, minimal interface with careful attention to typography and spacing
- **SEO Optimized** - Proper meta tags and Open Graph configuration
- **Type-Safe** - Built with TypeScript for better development experience

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.7
- **Animations**: Framer Motion 12
- **Fonts**: Geist Sans & Geist Mono
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio-sagar.git

# Navigate to project directory
cd portfolio-sagar

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🎨 Project Structure

```
portfolio-sagar/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedText.tsx
│   │   ├── AnimatedProfilePicture.tsx
│   │   ├── BentoCard.tsx
│   │   ├── GridWrapper.tsx
│   │   ├── SectionTitlePill.tsx
│   │   ├── HorizontalLine.tsx
│   │   ├── AboutMeBento.tsx
│   │   ├── SkillsGridBento.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── EducationCard.tsx
│   │   └── ContactCard.tsx
│   ├── data/                # Site content and metadata
│   │   └── siteMetadata.ts
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
│       └── profile.svg
├── tailwind.config.ts
└── package.json
```

## 📝 Customization

### Update Personal Information

Edit `app/data/siteMetadata.ts` to update:
- Personal details (name, bio, contact info, location)
- Social media links (GitHub, LinkedIn, LeetCode)
- Education history with GPA and coursework
- Technical skills organized by category
- Project details with live URLs and GitHub repos
- Certifications and achievements

### Replace Profile Picture

Replace `public/images/profile.svg` with your photo:
- Recommended size: 200x200px or larger
- Supported formats: JPG, PNG, SVG
- Update the path in `AnimatedProfilePicture.tsx` if needed

### Color Scheme

Modify `tailwind.config.ts` to customize colors:
```typescript
colors: {
  "bg-primary": "#F7F7F8",        // Background
  "border-primary": "#D6DADE",    // Borders
  "purple-primary": "#6C47FF",     // Accent color
  "text-primary": colors.slate[900],
  "text-secondary": "#5E5F6E",
}
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Compatible with:
- Netlify
- Render
- Railway
- Cloudflare Pages

## 👨‍💻 Author

**Sagar Waghmare**
- 📧 Email: sagarwaghmare1384@gmail.com
- 📍 Location: Maharashtra, India
- 🔗 GitHub: [@SagarSuryakantWaghmare](https://github.com/SagarSuryakantWaghmare)
- 💼 LinkedIn: [sagarwaghmare44](https://www.linkedin.com/in/sagarwaghmare44)
- 💻 LeetCode: [SagarSuryakantWaghmare](https://leetcode.com/u/SagarSuryakantWaghmare)
- 📱 Phone: +91 7219330989

## 🎓 Education

**B.Tech in Computer Science** - Deogiri Institute of Engineering and Management Studies  
GPA: 8.4/10.0 | 2022 – 2026

## 🏆 Featured Projects

- **ProCraft AI** - AI-powered resume builder (Next.js 15, Prisma, Clerk, Razorpay)
- **The Digital Cart** - E-commerce platform (MERN Stack, Redux, JWT)

## 📜 License

This project is open source and available under the MIT License.

## 🙏 Credits

Design inspiration from [braydoncoyer.dev](https://braydoncoyer.dev) - check out Braydon's amazing work!

---

Built with ❤️ using Next.js 16 and Tailwind CSS 3

