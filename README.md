# Sarwar Hossain Portfolio

![Under Development](https://img.shields.io/badge/Status-Under%20Development-amber?style=flat-pill)

A full-stack portfolio platform powered by a custom Express + Prisma backend and a Next.js frontend.

## Overview
This repository contains the Next.js frontend for the portfolio platform. It is designed to showcase projects, blogs, and public resumes while integrating securely with the backend API.

## Backend Alignment
The UI is built to work with the backend in the same workspace (`/home/sarwar/Desktop/Portfolio/sarwar-hossain-portfolio`). Key backend capabilities:
- Authentication & role-based access (NextAuth + API guards)
- Blog, project, and resume management (CRUD)
- Public resume endpoints for visitors
- Media upload pipeline (Cloudinary)
- Structured stats services for dashboards

## API Endpoints Used
Base URL: `NEXT_PUBLIC_BASE_API` (default: `http://localhost:5000/api/v1`)

- `GET /projects` (featured + published for homepage)
- `GET /blogs` (list content)
- `GET /resumes/public` (public resume list)
- `GET /resumes/public/:id` (public resume detail)

## Tech Stack
- Next.js (App Router)
- React 19
- TailwindCSS
- Redux Toolkit + RTK Query
- NextAuth

## Local Development
```bash
bun install
bun run dev
```

## Notes
- SEO includes sitemap, robots, Open Graph, Twitter cards, and JSON-LD where relevant.
- `public/llms.txt` is included for AI indexing and summarization.

## Environment Variables
```bash
NEXT_PUBLIC_BASE_API=http://localhost:5000/api/v1
NEXT_PUBLIC_FORMBOLD_API_KEY=your_formbold_key
```
