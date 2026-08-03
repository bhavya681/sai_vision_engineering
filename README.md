# Sai Vision Engineering Website

Professional company website for **Sai Vision Engineering**, built from the official company profile PDF.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content source

Company facts, products, services, partnerships, clients, and contact details are sourced from:

`sai vision Profile (N).pdf`

Centralized content lives in:

- `src/data/company.ts`
- `src/data/products.ts`
- `src/data/industries.ts`
- `src/data/services.ts`

## Inquiry form

The contact / quote form validates on the client and shows a success state.

**TODO:** Connect `src/components/InquiryForm.tsx` to an email/CRM backend (API route, Resend, Formspree, etc.).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
