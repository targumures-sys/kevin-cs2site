# Counter-Strike 2 (CS2) NEXUS - Modern Website

A stunning, modern, and fully responsive Counter-Strike 2 website built with React, Vite, and custom CSS animations. Featuring a sleek dark theme with neon accents inspired by esports aesthetics.

## 🎮 Features

### Pages Included

1. **Home Page**
   - Hero section with bold headline and FPS-inspired visuals
   - Animated background with floating geometric elements
   - Call-to-action buttons (Explore, Watch Gameplay)
   - Quick highlights section showcasing key features
   - Responsive design for all devices

2. **About CS2**
   - Overview of Counter-Strike 2
   - Key features with icons (Source 2 Engine, Enhanced Graphics, etc.)
   - Historical timeline showing the evolution from mod to global phenomenon
   - Feature cards with hover animations

3. **Gameplay**
   - Game modes explanation (Competitive, Casual, Deathmatch)
   - Complete weapons arsenal organized by categories
   - Battle arenas/maps showcase with descriptions
   - Pro tips for success

4. **Esports**
   - Major tournaments listing with prize pools
   - Top teams ranking leaderboard
   - Competitive statistics
   - Latest news and updates in the esports scene

5. **Media / Gallery**
   - Interactive image and video gallery
   - Category filtering system
   - Lightbox modal for expanded viewing
   - Video highlights section
   - User submission section

6. **Contact / Community**
   - Contact form with validation
   - Community links (Discord, Twitter, YouTube, Twitch, etc.)
   - FAQ section
   - Newsletter subscription

### Design Features

- **Dark Theme with Neon Accents**
  - Primary color: `#0a0e27` (Deep Space Blue)
  - Accent colors: `#00d4ff` (Cyan), `#a855f7` (Purple), `#ff6b35` (Orange)

- **Smooth Animations**
  - Fade-in animations on scroll
  - Hover effects with glassmorphism
  - Animated background elements
  - Pulse and glow effects

- **Responsive Design**
  - Mobile-first approach
  - Works seamlessly on desktop, tablets, and mobile devices
  - Sticky navigation bar
  - Adaptive grid layouts

- **Modern UI Elements**
  - Glass-morphism cards with backdrop filters
  - Gradient text and buttons
  - Smooth transitions and transforms
  - Interactive hover states

### Components

- **Navigation**: Sticky header with smooth transitions and mobile hamburger menu
- **Footer**: Comprehensive footer with links, social icons, and copyright
- **Hero Section**: Full-screen introduction with animated backgrounds
- **Card Grid**: Responsive grid layouts for content display
- **Gallery**: Interactive media gallery with filtering and lightbox
- **Leaderboard**: Styled ranking table for teams
- **Forms**: Contact form with input validation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\targu\OneDrive\Desktop\Impact\ExpertKevin\nr 5\my-react-app"
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Running the Development Server

#### Option 1: Using the Batch File (Windows)
Simply double-click `start-dev.bat` file in the project directory.

#### Option 2: Using Terminal
From the project directory, run:
```bash
npm run dev
```

The development server will start on `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
my-react-app/
├── src/
│   ├── App.jsx              # Main app component with routing
│   ├── App.css              # Main app styles
│   ├── index.css            # Global styles and variables
│   ├── main.jsx             # React entry point
│   │
│   ├── Navigation.jsx       # Navigation bar component
│   ├── Navigation.css       # Navigation styles
│   │
│   ├── Footer.jsx           # Footer component
│   ├── Footer.css           # Footer styles
│   │
│   ├── Home.jsx             # Home page
│   ├── Home.css             # Home page styles
│   │
│   ├── About.jsx            # About CS2 page
│   ├── About.css            # About page styles
│   │
│   ├── Gameplay.jsx         # Gameplay page
│   ├── Gameplay.css         # Gameplay styles
│   │
│   ├── Esports.jsx          # Esports page
│   ├── Esports.css          # Esports styles
│   │
│   ├── Media.jsx            # Media/Gallery page
│   ├── Media.css            # Media styles
│   │
│   ├── Contact.jsx          # Contact page
│   └── Contact.css          # Contact styles
│
├── public/                  # Static assets
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint rules
├── start-dev.bat           # Batch file to start dev server
└── README.md               # This file
```

## 🎨 Design System

### Color Variables (CSS)
```css
--primary-dark: #0a0e27
--secondary-dark: #1a1f3a
--accent-blue: #00d4ff
--accent-orange: #ff6b35
--accent-purple: #a855f7
--text-primary: #ffffff
--text-secondary: #b0b9c3
--border-color: #2a3a52
--glass-bg: rgba(10, 14, 39, 0.7)
```

### Animations
- `fadeInUp`: Fade in with upward movement
- `fadeInDown`: Fade in with downward movement
- `slideInLeft`: Slide in from left
- `slideInRight`: Slide in from right
- `pulse`: Pulsing opacity effect
- `glow`: Glowing box-shadow effect
- `float`: Floating movement

### Typography
- **Headings**: Bold, letter-spaced, gradient text
- **Body**: Segoe UI, clean and readable
- **Accent**: Uppercase letters with increased letter-spacing

## 🔧 Technologies Used

- **React 19**: Modern UI library
- **Vite**: Lightning-fast build tool
- **React Router v6**: Client-side routing
- **CSS3**: Custom animations and gradients
- **HTML5**: Semantic markup

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Features Implemented

✅ Multi-page routing with React Router
✅ Sticky navigation bar with mobile menu
✅ Smooth scroll behavior
✅ Responsive grid layouts
✅ Interactive hover effects
✅ Modal/lightbox functionality
✅ Form handling with validation
✅ Glassmorphism UI elements
✅ Gradient text and backgrounds
✅ Icon integration (emoji-based)
✅ Animation on scroll
✅ Community links and social integration
✅ Professional leaderboard display
✅ Gallery with filtering

## 📝 Customization

### Changing Colors
Edit the CSS variables in [src/index.css](src/index.css) at the top of the file:
```css
:root {
  --primary-dark: #0a0e27;
  --accent-blue: #00d4ff;
  /* ... other colors ... */
}
```

### Modifying Content
Edit the component files (Home.jsx, About.jsx, etc.) to update page content. Each component includes hardcoded data that can be replaced with dynamic content.

### Adding New Pages
1. Create a new component file (`NewPage.jsx`)
2. Create corresponding styles (`NewPage.css`)
3. Add the route in `App.jsx`
4. Update navigation links in `Navigation.jsx`

## 🐛 Troubleshooting

### PowerShell Execution Policy Error
If you get an error about execution policies:
1. Use the `start-dev.bat` file instead (Windows)
2. Or run: `npm run dev` from Command Prompt (cmd)

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port and display it in the terminal.

### Styling Issues
Clear your browser cache and refresh the page with `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac).

## 📄 License

This is a demonstration project for educational and entertainment purposes.

## 🤝 Support

For issues or questions about the project structure, refer to the individual component files which contain detailed comments.

---

**Created:** March 28, 2026  
**Framework:** React + Vite  
**Theme:** Counter-Strike 2 Esports Website
