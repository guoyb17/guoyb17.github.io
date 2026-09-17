# Yuanbo Guo — Academic Homepage

Personal academic homepage for Yuanbo Guo, a Ph.D. candidate in Computer Science and Engineering at the University of Notre Dame.

Live site: [https://www.yguo6.net/](https://www.yguo6.net/)

## About the site

The site presents research in efficient and reliable AI systems, highlighting new uses of hardware and model compression to help AI work well across population groups. The research narrative is written for faculty readers across fields, with implementation details available through the papers and code. It includes selected publications, a separately labeled preprint, teaching, mentoring, systems experience, and academic service.

It is a lightweight static site built with semantic HTML, CSS, and a small theme script. It has no build step, external JavaScript dependencies, analytics, cookies, or third-party runtime assets.

The color theme follows the browser's system preference by default. The header controls let visitors choose system, light, or dark mode; explicit choices are remembered locally in the browser. The site also follows the system theme when JavaScript is disabled.

## Repository structure

```text
index.html                  Homepage
404.html                    Custom not-found page
styles.css                  Shared responsive styles
theme.js                    System-aware theme preference and controls
robots.txt                  Crawler guidance
sitemap.xml                 Homepage sitemap
CNAME                       GitHub Pages custom domain
favicon.ico                 Browser favicon fallback
assets/favicon.svg          Primary favicon
assets/favicon-32.png       PNG favicon fallback
assets/apple-touch-icon.png Apple touch icon
assets/social-card.svg      Editable social-preview artwork
assets/social-card.png      Open Graph and social-preview image
assets/cv/CV_Guo_Yuanbo.pdf  Public curriculum vitae linked from the homepage
```

## Public CV

The faculty job-market notice links to `assets/cv/CV_Guo_Yuanbo.pdf`. This public copy retains academic contact information and omits the personal phone number. Update the editable Word copy separately, export and check the PDF, then replace this asset to keep the homepage link stable.

## Local preview

Run a local server from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deployment

The site is published with GitHub Pages from the `main` branch and repository root. Updates pushed to `main` are deployed automatically.
