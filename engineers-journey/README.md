# Engineer's Journey — Arya Mourya

A pixel-art RPG inspired developer portfolio built with React, Vite and CSS. Visitors explore six locations and complete quests to discover the developer's background, skills, projects and achievements.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Customize before publishing

1. Update GitHub and LinkedIn URLs in `src/data/profile.js`.
2. Add your real email address and resume PDF in `public/resume.pdf`.
3. Verify each project's repository and live-demo URL in `src/data/projects.js`.
4. Update project and achievement statuses so they accurately reflect your work.
5. Deploy the repository with AWS Amplify Hosting.

## Quest mechanics

Quest progress is stored in `sessionStorage`. It persists across reloads in the same browser tab and resets when that tab's session ends. No account or backend is required.

## Deployment

Connect this repository to AWS Amplify Hosting. The included `amplify.yml` configures the Vite production build.
