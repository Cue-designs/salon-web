# Morrow Hair House

A salon website for **Morrow Hair House**, a fictional neighborhood hair studio. The site brings the salon experience online with a warm visual identity, service and stylist information, inspiration galleries, journal content, and appointment enquiries.

This is also my hands-on learning project. I’m using it to strengthen my skills in React and Next.js, TypeScript, responsive interface design, accessible interactions, and connecting UI actions to APIs. I’m building and refining the experience as I learn, including practicing server/client component boundaries and CRUD workflows.

## What’s in the project

- Salon landing page and shared site navigation and footer
- Service listings and stylist profiles
- Lookbook gallery and journal pages
- Booking form and WhatsApp enquiry link
- A names/posts area for practicing API-backed create, read, update, and delete interactions
- Responsive styling with Tailwind CSS

## Built with

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- React Icons

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The names/posts CRUD area uses the `NEXT_API_URL` environment variable for its API endpoint. To use it locally, create a `.env.local` file in the project root:

```env
NEXT_API_URL=https://your-api-endpoint
```

The WhatsApp button can use `NEXT_PUBLIC_WHATSAPP_NUMBER` for a prefilled salon contact link. If it is not set, the link opens WhatsApp without a preset phone number.

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=15551234567
```

Restart the development server after changing environment variables.

## Useful commands

```bash
npm run dev
npm run lint
npm run build
```
