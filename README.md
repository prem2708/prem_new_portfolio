# 🎨 Prem's macOS Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-0AC775?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Zustand-764ABC?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
</div>

<br />

<div align="center">
  <h3>🚀 A stunning macOS-inspired portfolio website built with modern web technologies</h3>
  <p>Experience a fully interactive desktop environment showcasing creative development skills</p>
  <br />
  <a href="https://premnewport.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-00C46A?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
  </a>
</div>

## ✨ Features

- **🖥️ macOS Desktop Interface**: Authentic macOS-like desktop with dock, navbar, and window management
- **🎯 Interactive Windows**: Multiple draggable, resizable windows including:
  - 🖥️ Terminal emulator
  - 🌐 Safari browser simulation
  - 📄 Resume viewer (PDF support)
  - 🗂️ Finder file explorer
  - 📝 Text editor
  - 🖼️ Image viewer
  - 📞 Contact form
- **🎨 Smooth Animations**: Powered by GSAP for fluid transitions and interactions
- **📱 Responsive Design**: Optimized for desktop and tablet experiences
- **🎪 Dynamic Typography**: Variable font weights with mouse-following effects
- **🌓 Modern UI**: Clean, minimalist design with attention to detail

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP + GSAP React
- **State Management**: Zustand
- **Icons**: Lucide React
- **PDF Viewer**: React PDF
- **Date Handling**: Dayjs
- **Utilities**: Immer, Clsx

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/prem-mac.git
   cd prem-mac
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
prem_mac/
├── public/
│   ├── files/
│   ├── icons/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Dock.jsx
│   │   ├── Navbar.jsx
│   │   ├── Welcome.jsx
│   │   └── WindowControls.jsx
│   ├── constants/
│   ├── hoc/
│   │   └── WindowWrapper.jsx
│   ├── store/
│   │   ├── location.js
│   │   └── window.js
│   └── windows/
│       ├── Contact.jsx
│       ├── Finder.jsx
│       ├── Image.jsx
│       ├── Resume.jsx
│       ├── Safari.jsx
│       ├── Terminal.jsx
│       └── Text.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎮 Usage

- **🖱️ Click and drag** windows to reposition them
- **📏 Resize** windows using the corner handles
- **🎯 Click the dock icons** to open/close applications
- **⌨️ Use keyboard shortcuts** for enhanced navigation
- **📱 Optimized** for desktop and tablet screens

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by macOS interface design
- Built with modern React ecosystem
- Special thanks to the open-source community

---

<div align="center">
  <p>Made with ❤️ by Prem</p>
  <p>💼 <a href="#contact">Get in touch</a> | 🌐 <a href="#safari">Visit my website</a></p>
</div>
