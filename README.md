# Caroline Sarkki - Portfolio Website

A modern, responsive portfolio website showcasing full-stack development skills, AI integration expertise, and professional experience at KQED. Built with Next.js, TypeScript, and Sass, featuring a clean design with the iconic Golden Gate Bridge as the hero background.

## 🌟 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app) *(Update with your actual deployment URL)*

## 🚀 Features

### Professional Showcase
- **KQED Work Experience**: Featured projects including voter guide, navigation system redesign, micro websites, and user account management
- **Technical Leadership**: 4 interns mentored with focus on JavaScript, React, Java, Python, and database technologies
- **3+ Years Experience**: Proven track record in full-stack development and team leadership

### AI-Powered Personal Projects
- **AI Note-Taking App**: Sophisticated application with OpenAI API integration for intelligent summarization
- **Chrome Extension**: Web content summarizer providing instant AI-powered summaries of web pages
- **AI Job Search Agent**: Intelligent agent using OpenAI API to aggregate and analyze job postings
- **Mini Games Collection**: Interactive games built with modern web technologies

### Modern Design & UX
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized bundle sizes and static generation for fast loading

## 🛠️ Technical Stack

### Frontend Development
- **TypeScript** (90% proficiency) - Type-safe development
- **React** (85% proficiency) - Component-based architecture
- **Next.js 15.5.2** - Full-stack React framework
- **Sass/SCSS** (90% proficiency) - Advanced CSS preprocessing
- **HTML5/CSS3** (95% proficiency) - Modern web standards
- **Responsive Design** (90% proficiency) - Mobile-first approach

### Backend Development
- **Node.js** (80% proficiency) - Server-side JavaScript
- **Java** (85% proficiency) - Enterprise development
- **Python** (80% proficiency) - Data processing and AI integration
- **SQL** (90% proficiency) - Database querying
- **PostgreSQL** (85% proficiency) - Advanced database management
- **MySQL** (80% proficiency) - Relational database systems

### AI & Integration
- **OpenAI API** (90% proficiency) - AI model integration
- **AI Integration** (85% proficiency) - Seamless AI implementation
- **Web Scraping** (80% proficiency) - Data collection for AI processing
- **Chrome Extensions** (85% proficiency) - Browser extension development
- **Data Analysis** (80% proficiency) - Processing and analyzing data

### Leadership & Practices
- **Intern Mentoring** (90% proficiency) - Technical leadership and guidance
- **Code Review** (90% proficiency) - Quality assurance and best practices
- **Unit Testing** (85% proficiency) - Test-driven development
- **Technical Leadership** (85% proficiency) - Team guidance and architecture decisions
- **SEO Optimization** (80% proficiency) - Search engine optimization

## 📁 Project Structure

```
caroline_sarkki_portfolio/
├── public/
│   ├── caroline-headshot.jpg    # Professional headshot
│   ├── goldenGateBridge.jpg     # Hero background image
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── globals.scss         # SCSS imports
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Homepage component
│   ├── components/
│   │   ├── About.tsx            # About section with stats
│   │   ├── Contact.tsx          # Contact form with validation
│   │   ├── Experience.tsx       # Professional experience timeline
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Hero.tsx             # Hero section with CTA buttons
│   │   ├── Navbar.tsx           # Navigation with smooth scrolling
│   │   ├── Projects.tsx         # Project showcase (professional & personal)
│   │   ├── Skills.tsx           # Technical skills with proficiency levels
│   │   └── ui/                  # Reusable UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── styles/
│   │   ├── accessibility.scss   # Accessibility styles
│   │   ├── base.scss            # Base styles
│   │   ├── components.scss      # Component styles
│   │   ├── main.scss            # Main SCSS imports
│   │   ├── reset.scss           # CSS reset
│   │   ├── utilities.scss       # Utility classes
│   │   └── variables.scss       # SCSS variables and mixins
│   └── types/
│       └── index.ts             # TypeScript type definitions
├── components.json              # UI components configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/caroline-sarkki-portfolio.git
   cd caroline-sarkki-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm run start
```

## 🎨 Design Features

### Color Palette
- **Primary**: Warm amber (#f59e0b) - Professional and inviting
- **Accent**: Warm orange (#f97316) - Highlights and CTAs
- **Neutral**: Sophisticated grays for text and backgrounds
- **Gradients**: Clean, warm gradients throughout

### Typography
- **Font Family**: Inter (modern, readable)
- **Font Weights**: Light (300) to Bold (700)
- **Responsive**: Scales appropriately across devices

### Animations
- **Framer Motion**: Smooth page transitions and scroll animations
- **Hover Effects**: Subtle interactions on buttons and cards
- **Scroll Animations**: Elements animate into view as user scrolls

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1200px+ (full layout with side-by-side content)
- **Tablet**: 768px - 1199px (stacked layout with adjusted spacing)
- **Mobile**: 320px - 767px (mobile-first design with touch-friendly interactions)

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **High Contrast**: All colors meet contrast requirements
- **Focus Management**: Clear focus indicators and logical tab order
- **Reduced Motion**: Respects user preferences for reduced motion

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the static files to an S3 bucket

## 🔧 Customization

### Updating Content
1. **Personal Information**: Edit `src/components/Hero.tsx` and `src/components/About.tsx`
2. **Projects**: Modify the projects arrays in `src/components/Projects.tsx`
3. **Skills**: Update skill levels in `src/components/Skills.tsx`
4. **Contact**: Update contact information in `src/components/Contact.tsx`

### Styling
- **Colors**: Modify `src/styles/variables.scss` for color changes
- **Typography**: Update font imports in `src/app/layout.tsx`
- **Components**: Edit individual component SCSS files

### Images
- Replace `public/caroline-headshot.jpg` with your professional photo
- Replace `public/goldenGateBridge.jpg` with your preferred hero background

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized JavaScript bundles (~153kB first load)
- **Static Generation**: Prerendered content for fast loading
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal performance

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Caroline Sarkki**
- **Email**: csarkki.swe@gmail.com
- **LinkedIn**: [Caroline Sarkki](https://www.linkedin.com/in/caroline-sarkki-2a5517126/)
- **GitHub**: [Chocoloco123](https://github.com/Chocoloco123)
- **Location**: San Francisco Bay Area

## 🙏 Acknowledgments

- **KQED**: For the amazing professional experience and opportunities
- **Next.js Team**: For the incredible React framework
- **Framer Motion**: For smooth animations
- **Font Awesome**: For beautiful icons
- **San Francisco**: For the inspiration and Golden Gate Bridge backdrop

---

*Built with ❤️ by Caroline Sarkki using Next.js, TypeScript, and Sass*