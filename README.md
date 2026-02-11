# Porter Peterson | Portfolio Website
![Build Status](https://github.com/[username]/portfolio/actions/workflows/deploy.yml/badge.svg)

A modern, high-performance portfolio website built with **Angular 21** and **Material 3**. This project showcases full-stack development principles, responsive UI/UX design, and automated deployment pipelines.

## Live Demo
https://porter-peterson.github.io/portfolio

## Key Features
* **Dynamic Theming**: Full Light and Dark mode support with `localStorage` persistence and system-level color-scheme synchronization.
* **Material 3 Architecture**: Utilizing the latest M3 tokens and system variables for a scalable, enterprise-grade design system.
* **Glassmorphism UI**: Custom SCSS mixins for high-end glass effects, optimized for readability in both light and dark environments.
* **Responsive Design**: A "mobile-first" approach ensuring seamless performance across desktops, tablets, and mobile devices.
* **Automated CI/CD**: Fully automated build and deployment pipeline using GitHub Actions.

## 🛠️ Tech Stack
* **Framework**: Angular 21
* **Styling**: SCSS (Advanced Mixins, M3 System Variables)
* **Component Library**: Angular Material 3
* **Deployment**: GitHub Pages
* **Automation**: GitHub Actions

## Project Structure
* `/src/app/pages`: Modular component architecture for About, Projects, and Contact sections.
* `/src/app/header`: Navigation and theme control logic.
* `styles.scss`: Global theme configuration and "Breathing" background animation logic.
* `_shared-utils.scss`: Reusable styling mixins for glassmorphism and layouts.

## Local Development

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/](https://github.com/)[username]/portfolio.git
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    ng serve
    ```
4.  **Open the browser**: Navigate to `http://localhost:4200/`.

## Deployment Logic
This repository uses a custom GitHub Action (`deploy.yml`) that triggers on every push to the `main` branch. 
1.  **Build**: Compiles the Angular application with a specific `--base-href`.
2.  **Artifact**: Packages the static files including a custom `404.html` for SPA routing support.
3.  **Deploy**: Automatically pushes to the GitHub Pages environment.

---
Created by Porter Peterson