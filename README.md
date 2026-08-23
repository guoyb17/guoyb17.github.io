# Yuanbo Guo — Academic Homepage

Personal academic homepage for Yuanbo Guo, a Ph.D. candidate in Computer Science and Engineering at the University of Notre Dame.

Live site: [https://guoyb17.github.io/](https://guoyb17.github.io/)

## About the site

The site presents research in efficient AI, hardware–model co-design, model compression, and population-level model performance, together with selected publications, teaching, mentoring, and systems experience.

It is a lightweight static site built with semantic HTML and CSS. It has no build step, JavaScript dependency, analytics, cookies, or third-party runtime assets.

## Repository structure

```text
index.html                  Homepage
404.html                    Custom not-found page
styles.css                  Shared responsive styles
robots.txt                  Crawler guidance
sitemap.xml                 Homepage sitemap
favicon.ico                 Browser favicon fallback
assets/favicon.svg          Primary favicon
assets/favicon-32.png       PNG favicon fallback
assets/apple-touch-icon.png Apple touch icon
```

## Local preview

Run a local server from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deployment

The site is published with GitHub Pages from the `main` branch and repository root. Updates pushed to `main` are deployed automatically.
