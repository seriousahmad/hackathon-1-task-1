# Quickstart Guide: AI/Spec-Driven Professional Textbook Frontend

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git for version control
- A GitHub account for deployment

## Setup Instructions

### 1. Initialize Docusaurus Project

```bash
# Create a new Docusaurus project
npx create-docusaurus@latest website textbook-frontend --typescript

cd textbook-frontend
```

### 2. Install Required Dependencies

```bash
# Install Framer Motion for animations
npm install framer-motion

# Install additional dependencies as needed
npm install @docusaurus/module-type-aliases @docusaurus/types
```

### 3. Project Structure

After setup, your project will have the following structure:

```
textbook-frontend/
├── blog/                 # Blog posts (optional)
├── docs/                 # Textbook content
│   ├── index.md          # Home page
│   ├── chapters/         # Main chapters
│   │   ├── robotic-nervous-system.mdx
│   │   ├── digital-twin.mdx
│   │   └── ai-robot-brain.mdx
│   ├── learning-outcomes.md
│   ├── weekly-breakdown.md
│   ├── assessments.md
│   └── hardware-requirements.md
├── src/
│   ├── components/       # Custom React components
│   ├── css/              # Custom styles
│   └── pages/            # Additional pages
├── static/               # Static assets
├── docusaurus.config.js  # Docusaurus configuration
├── package.json
└── tsconfig.json
```

### 4. Configuration

Update `docusaurus.config.js` with your textbook settings:

```javascript
// docusaurus.config.js
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics: The Future of Embodied Intelligence',
  tagline: 'A comprehensive textbook on embodied intelligence',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-username.github.io',
  // Set the /<base>/ pathname under which your site is served
  // For GitHub pages deployment, it's usually '/<repo-name>/'
  baseUrl: '/textbook-frontend/',

  // GitHub pages deployment config
  organizationName: 'your-username', // Usually your GitHub org/user name
  projectName: 'textbook-frontend', // Usually your repo name
  deploymentBranch: 'gh-pages', // Branch that GitHub Pages will deploy from

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-username/textbook-frontend/tree/main/',
        },
        blog: false, // Disable blog if not needed
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Textbook',
        logo: {
          alt: 'Textbook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Chapters',
          },
          {
            href: 'https://github.com/your-username/textbook-frontend',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Home',
                to: '/docs/',
              },
              {
                label: 'Chapters',
                to: '/docs/chapters/robotic-nervous-system',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
```

### 5. Custom Styling

Create `src/css/custom.css` with book-like styling:

```css
/* Custom styling for book-like appearance */
:root {
  /* Typography */
  --doc-sidebar-width: 300px;

  /* Gradients */
  --ifm-color-primary: #4f46e5; /* indigo */
  --ifm-color-primary-dark: #4338ca;
  --ifm-color-primary-darker: #3730a3;
  --ifm-color-primary-darkest: #312e81;
  --ifm-color-primary-light: #6366f1;
  --ifm-color-primary-lighter: #818cf8;
  --ifm-color-primary-lightest: #c7d2fe;

  /* Page layout */
  --ifm-container-width-xl: 1200px;
}

/* Apply book-like typography */
.markdown {
  font-family: 'Lexend', 'Calibri', system-ui, -apple-system, sans-serif;
  max-width: 65ch;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Body text typography */
.markdown p {
  line-height: 1.7 !important;
  margin-bottom: 1.5rem;
}

/* Apply margins to content pages */
article {
  padding: 3rem 2rem;
  max-width: 65ch;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Gradient accents */
.navbar {
  background: linear-gradient(135deg, #4f46e5, #06b6d4);
}

/* Custom theme toggle */
.react-toggle-track {
  background: linear-gradient(135deg, #4f46e5, #06b6d4) !important;
}

/* Sidebar styling */
.menu {
  font-family: 'Lexend', 'Calibri', system-ui, -apple-system, sans-serif;
}

/* Code blocks styling */
.codeBlockContainer_node_modules-\@docusaurus-theme-classic-lib-theme-CodeBlock-Container-styles-module {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
```

### 6. Development Server

```bash
# Start the development server
npm run start

# This will start a local server at http://localhost:3000
```

### 7. Build and Deploy

```bash
# Build the static site
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Next Steps

1. Create the 3 main chapters in the `docs/chapters/` directory
2. Add supplementary pages (Learning Outcomes, Weekly Breakdown, etc.)
3. Implement custom components for the RAG chatbot placeholder
4. Add Framer Motion animations to enhance the user experience
5. Test accessibility and performance metrics
6. Deploy to GitHub Pages