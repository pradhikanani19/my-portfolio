# Pradhi Kanani — Portfolio

React + Vite portfolio. Design: deep ink/navy, warm off-white, muted teal, tiny brass accents; Manrope + Inter.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
```

## Structure
```
public/            favicon.svg
src/components/    Navbar, Hero, About, Education, Skills, ProjectCard, Projects, Learning, Contact, Footer
src/data/          profile.js (bio, education, skills, contact) · projects.js (project content)
src/styles/        global.css (design tokens at top)
```

## What you must fill in (all in `src/data/`)
Fields set to `null` are hidden on the live site; in `npm run dev` they show as dashed brass hints.

- `profile.js`: college name, degree title, expected graduation, CGPA (optional), certifications, activities. Contact links are already set.
- `projects.js`: source-code URLs, verified features, tech stack, your contribution.
- **CareerVision**: purpose, features, stack, contribution, links. It is a clearly marked "details pending" card until you fill it in; set `placeholder: false` and `status` when done.
- **Skills**: review every item in `profile.js`; delete anything you can't explain.

## Push to GitHub
```bash
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

## Deploy to Vercel
1. vercel.com → Add New → Project → import the GitHub repo.
2. Framework preset: Vite (build `npm run build`, output `dist`). Deploy.
3. Test the public URL in an incognito window: every link and the mobile menu.
