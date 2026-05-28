# 📅 DevEvent — Next-Gen Developer Event Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![PostHog](https://img.shields.io/badge/Analytics-PostHog-F54E00?style=for-the-badge&logo=posthog)](https://posthog.com/)

DevEvent is a high-performance, visually stunning event management and discovery platform built from the ground up for developers. It serves as a unified catalog for hackathons, technical meetups, and conferences, allowing users to discover events, RSVP instantly, and enable organizers to publish new events with cloud media integration.

---

![Preview](https://i.postimg.cc/65YTHM8J/Screenshot-2026-05-23-134820.png)

---

## 🌟 Overview

### The Problem It Solves
Technological events, hackathons, and developer meetups are typically scattered across disparate websites (e.g., Meetup, Eventbrite, Devpost, Discord channels). This fragmentation makes it hard for developers to find relevant learning and networking opportunities, and equally challenging for event hosts to reach their target technical audience.

### The Solution
**DevEvent** centralizes developer-focused events in a single, blazing-fast web portal. Organizers can seamlessly create events complete with custom poster banners, detailed agendas, and target audience segments. Developers can explore these events in a highly immersive UI, check schedules, and RSVP with a simple, secure one-click booking workflow.

### Target Audience
* **Software Developers & Engineers** searching for hackathons and tech meetups.
* **Tech Event Organizers** seeking to host, manage, and promote conferences or local developer groups.
* **Sponsors and Recruiters** looking to connect with technical talent at localized events.

---

## ✨ Features

* **🎨 Immersive Canvas Shaders**: Premium WebGL-rendered background glow using `LightRays` shader canvas elements via the OGL library for an interactive, modern user experience.
* **📅 Dynamic Event Directory**: Real-time listing of events with search capabilities, tags, event modes (online, offline, hybrid), and timing details.
* **⚡ One-Click Instant booking**: Quick RSVP validation ensuring each developer (unique email address) can claim only one ticket per event, complete with instant server-side double-booking protection.
* **📤 Cloud-Integrated Creator Hub**: Fully controlled creation form allowing organizers to upload banner images directly to Cloudinary and structure event agendas on a modular timeline.
* **📈 Privacy-First Event Telemetry**: Integrated PostHog tracking configured through a local server-side reverse proxy (`/ingest`) to route events safely without adblocker interference.
* **📱 Responsive Layout & Micro-Animations**: Built with mobile-first layout design using React 19, Tailwind CSS v4, custom-compiled component hooks, and smooth animation transitions.

---

## 🛠️ Tech Stack

### Frontend & Core Layout
* **Framework**: [Next.js 16.2.6 (App Router)](https://nextjs.org/)
* **Library**: [React 19.2.4](https://react.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
* **Components**: Custom build using [Shadcn UI](https://ui.shadcn.com/) primitives, [Radix UI](https://www.radix-ui.com/), and [Lucide React](https://lucide.dev/) icons.
* **Graphics**: [OGL 1.0.11](https://github.com/oogl/ogl) (Ultra-light WebGL engine for custom shaders).
* **Notifications**: [Sonner](https://react-hot-toast.com/sonner) (Toast notices).

### Backend & Database
* **Server**: Next.js Server Actions & API Route Handlers
* **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose 9.6.2](https://mongoosejs.com/) (ODM)
* **Media Uploads**: [Cloudinary API](https://cloudinary.com/) (Secure cloud hosting for event images)

### Telemetry & Analytics
* **Analytics Platform**: [PostHog JS](https://posthog.com/) integrated client-side via Next.js instrumentation and custom rewrites.

---

## 📐 Architecture & Workflow

The architecture leverages Next.js App Router hybrid rendering strategies combined with serverless MongoDB configurations.

```
                    ┌────────────────────────┐
                    │     Next.js Client     │
                    │   (React 19 Frontend)  │
                    └─────┬────────────┬─────┘
                          │            │
             (Server Actions)         (API Endpoints)
             createBooking()          GET/POST /api/events
                          │            │
                          ▼            ▼
                    ┌────────────────────────┐
                    │      Next.js Server    │
                    ├────────────┬───────────┤
                    │ Cloudinary │ PostHog   │
                    │ Media API  │ Ingest px │
                    └─────┬──────┴─────┬─────┘
                          │            │
                   (Media Storage) (Analytics Ingestion)
                          │            │
                          ▼            ▼
                    ┌────────────────────────┐
                    │        Database        │
                    │    (MongoDB Atlas)     │
                    └────────────────────────┘
```

### Flow Highlight: Event Registration (RSVP)
1. **User RSVP Form**: The user submits their email on an event detail card.
2. **Server Action Validation**: The server invokes `createBooking()` which automatically connects to the database via Mongoose.
3. **Database Guardrails**: A compound index constraints (`eventId` + `email`) prevents duplicate registration.
4. **Analytics Funnel**: On successful booking, PostHog logs `event_card_clicked` with payload tags to build user conversion stats.

---

## ⚙️ Installation

### Prerequisites
* **Node.js** v20.x or above
* **npm**, **yarn**, or **pnpm** installed
* A running **MongoDB instance** (or free MongoDB Atlas cluster)
* A **Cloudinary Account** for media hosting
* A **PostHog Project** for behavioral analytics

### Setup Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Pranjal-Sahu21/nextjs-project.git
   cd nextjs-project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory. Copy the structure from below and fill in your credentials.

---

## 🔑 Environment Variables

To run the application, define these environment variables in your `.env.local` file:

```env
# Database Connection String
MONGODB_URI=mongodb+srv://<db_user>:<db_password>@<cluster_address>/?retryWrites=true&w=majority

# Cloudinary Credentials for Banner Uploads
CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>

# Application URL configurations
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# PostHog Analytics Configurations
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=phc_your_posthog_project_token_here
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

> [!NOTE]
> The `CLOUDINARY_URL` is parsed by the Cloudinary SDK directly. Do not expose your private secret keys to client-side bundles (do not prefix with `NEXT_PUBLIC_`).

---

## 🚀 Running the Project

Run these commands inside your project root directory:

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Runs the app on `http://localhost:3000` with hot-reloading |
| **Production Build**| `npm run build` | Compiles and optimizes the project for production |
| **Start Production**| `npm run start` | Runs the compiled build in server mode |
| **Linting** | `npm run lint` | Checks typescript, eslint rules, and code styles |

---

## 💻 Usage Examples

### 1. Booking an Event (Server Action)

```typescript
import { createBooking } from "@/lib/actions/booking.actions";

const handleRegister = async (email: string, eventId: string, slug: string) => {
  const response = await createBooking({ eventId, slug, email });
  
  if (response.success) {
    console.log("Successfully registered!");
  } else {
    console.error("Booking error:", response.error); // Handles duplicate email validations
  }
};
```

### 2. Fetching Similar Events

```typescript
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";

// Returns a list of events sharing tags with the current event, excluding itself
const related = await getSimilarEventsBySlug("react-nexus-2026");
console.log(related);
```

---

## 🔌 API Reference

### 1. Get All Events
* **Endpoint**: `GET /api/events`
* **Query Parameters**:
  * `limit` (number, optional): Max number of events to return.
* **Success Response (200 OK)**:
  ```json
  {
    "message": "Events fetched successfully",
    "events": [
      {
        "_id": "67f81a7b...",
        "title": "React Nexus 2026",
        "slug": "react-nexus-2026",
        "date": "2026-06-15",
        "venue": "Grand Hall, SF",
        "image": "https://res.cloudinary.com/..."
      }
    ]
  }
  ```

### 2. Get Single Event by Slug
* **Endpoint**: `GET /api/events/[slug]`
* **Success Response (200 OK)**:
  ```json
  {
    "message": "Event fetched successfully",
    "event": {
      "title": "React Nexus 2026",
      "slug": "react-nexus-2026",
      "description": "Deep dive into React 19 and Next.js 16 compiler features...",
      "overview": "React 19 updates, Server components, compiler diagnostics.",
      "tags": ["react", "frontend", "nextjs"],
      "agenda": ["09:00 AM - Registration", "10:00 AM - React 19 Deep Dive"]
    }
  }
  ```

### 3. Create Event
* **Endpoint**: `POST /api/events`
* **Content-Type**: `multipart/form-data`
* **Payload Structure**:
  * `image` (File, required): Poster banner file.
  * `tags` (stringified JSON array, required): e.g., `["react", "nextjs"]`
  * `agenda` (stringified JSON array, required): e.g., `["09:00 - Welcome", "10:00 - Keynote"]`
  * Extra text fields: `title`, `description`, `overview`, `venue`, `location`, `date`, `time`, `mode`, `audience`, `organizer`.

---

## 📁 Folder Structure

The code follows the standardized Next.js App Router design layout:

```text
├── app/
│   ├── api/
│   │   └── events/
│   │       ├── [slug]/route.ts   # Fetch specific event details
│   │       └── route.ts          # List & create events API endpoints
│   ├── create-event/
│   │   ├── loading.tsx           # Form loading skeleton state
│   │   └── page.tsx              # Event publishing form
│   ├── events/
│   │   ├── [slug]/
│   │   │   ├── loading.tsx       # Detail page skeletons
│   │   │   └── page.tsx          # Single event visual display
│   │   ├── loading.tsx           # Directory loading fallback
│   │   └── page.tsx              # Grid view of all events
│   ├── globals.css               # Core styling tokens
│   ├── layout.tsx                # Master page templates
│   └── page.tsx                  # Home hero & featured event list
├── components/
│   ├── ui/                       # Shadcn UI primitives & shaders
│   │   ├── LightRays.tsx         # Custom WebGL OGL Canvas shader
│   │   └── LightRays.css         # Canvas specific overlays
│   ├── BookEvent.tsx             # RSVP interactive registration
│   ├── CreateEventForm.tsx       # Controlled multi-part form
│   ├── EventCard.tsx             # Event preview wrapper cards
│   ├── EventDetails.tsx          # Full screen view content
│   └── Navbar.tsx & Footer.tsx   # Global site layouts
├── database/
│   ├── booking.model.ts          # Mongoose Booking schema & hooks
│   ├── event.model.ts            # Mongoose Event validation, slugs & dates
│   └── index.ts                  # Unified model exports
├── lib/
│   ├── actions/                  # Next.js Server Actions 
│   │   ├── booking.actions.ts    # Database writes for booking events
│   │   └── event.actions.ts      # Query logic for matching events
│   ├── mongodb.ts                # Mongoose global connection pooler
│   └── utils.ts                  # Layout utility functions
├── next.config.ts                # Turbopack & rewrite configurations
├── package.json                  # Dependencies configuration
└── tsconfig.json                 # TypeScript strict definitions
```

---

## 🌐 Deployment

### Deploying to Vercel
1. Install [Vercel CLI](https://vercel.com/cli) or log in to the Vercel Dashboard.
2. Link your GitHub repository hosting the code.
3. In **Settings -> Environment Variables**, configure your production MongoDB URI and Cloudinary credentials.
4. Set the **Build Command** to `npm run build` and **Output Directory** to `.next`.
5. Deploy! Vercel automatically sets up edge serverless functions to run API routes.

---

## 🧪 Testing

This project incorporates strict static type enforcement and code quality standards:

### Code Audits
To inspect structural code layout, run the automated linting checks:
```bash
npm run lint
```

### Database Integration Tests
Ensure database instances are properly verified. You can test your remote MongoDB configuration directly by querying the endpoint:
```bash
curl http://localhost:3000/api/events
```

---

