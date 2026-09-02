# Sanket Bilas — A-Level Computer Science Portfolio

A responsive portfolio website built with plain HTML, CSS and JavaScript. It is designed for fast deployment on Vercel, Netlify, Cloudflare Pages or GitHub Pages.

## Run locally

Open `index.html` directly, or use VS Code Live Server.

## Personalise before publishing

1. Replace all `href="#"` project and social links in `index.html`.
2. Add a PDF CV at `assets/Sanket-Bilas-CV.pdf`.
3. Replace sample project descriptions, dates and statistics with verified information.
4. Update `sanket.bilas@sanketbilas.online` if a different mailbox will be used.
5. Add screenshots or full project pages later if required.

## Deploy with Vercel

1. Create a GitHub repository and upload these files.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Other**. No build command is required.
4. Output directory: leave blank.
5. Deploy.
6. In **Project Settings → Domains**, add `sanketbilas.online` and `www.sanketbilas.online`.
7. Apply the DNS records Vercel displays at the domain registrar.

Typical Vercel DNS configuration:

- Apex domain: `A` record for `@` to `76.76.21.21`
- `www`: `CNAME` to `cname.vercel-dns.com`

Always use the exact records shown in the current Vercel dashboard because provider instructions can change.

## Project repositories

Each major portfolio project is maintained in its own GitHub repository:

- [Exam Question Recommendation System](https://github.com/bilassanket-CS/NEA-Exam-Recommendation-System)
- [Student Grade Predictor](https://github.com/bilassanket-CS/StudentGradePredictor)
- [Smart Weather Dashboard](https://github.com/bilassanket-CS/SmartWeatherDashboard)
- [Pathfinding Visualiser](https://github.com/bilassanket-CS/AlgoPathfindVisualiser)

The `sanket-portfolio` repository contains only the main portfolio website and links to the individual project repositories.
