# Campus Gatherings

## Project Overview

Campus Gatherings is a university-focused event registration interface built with React and Vite. It helps students discover upcoming campus events, choose a program they want to attend, and register by submitting their details in a structured form. The app also shows a live list of attendees, tracks registrations across events, and lets users remove entries when needed.

This project is designed to showcase a polished front-end experience with interactive event cards, a responsive layout, animated UI feedback, and a clean registration flow that feels like a real student portal.

## Features

- Three reusable event cards with:
  - Event name
  - Date
  - Venue
  - Organizer
  - Short description
  - Register button
- Registration form displayed for the selected event
- Selected event information passed to the form through props
- Controlled form fields for:
  - Student name
  - Enrollment ID
  - University email
  - Country
  - Phone number
- Alphabetical country selector with international dialing codes
- Visible registered-student list
- Registration count across all events
- Delete button for each registration
- Confirmation toast after successful registration
- Responsive layout for desktop and mobile
- Glassmorphic visual styling with:
  - Translucent surfaces
  - Backdrop blur
  - Soft ambient background layers
  - Card hover effects
  - Staggered entrance animations
  - Animated registration modal and confirmation toast
- Reduced-motion support for users who prefer less animation

## Component Structure

```text
App
|
|-- EventCard
|-- EventCard
|-- EventCard
`-- RegistrationForm
```

### `App`

Owns the selected event, registration list, confirmation message, and delete behavior. It passes event data into `EventCard` and passes the selected event into `RegistrationForm`.

### `EventCard`

A reusable component that receives an event object and an `onRegister` callback through props.

### `RegistrationForm`

Receives the selected event through props and manages the form fields with React state. On submit, it sends the completed form data back to `App`.

## State Flow

1. The user clicks `Register` on an event card.
2. `App` stores the selected event.
3. `RegistrationForm` opens and receives the selected event through props.
4. The student completes the controlled form.
5. `App` stores the registration and displays it in the registered-student list.
6. The student can delete the registration from the list.

## Tech Stack

- React
- React DOM
- Vite
- JavaScript
- CSS
- Google Fonts: Fraunces, Manrope, and DM Mono

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite, normally:

```text
http://localhost:5173/
```

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
.
|-- index.html
|-- package.json
|-- src
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
`-- README.md
```

## Data Persistence

Registrations are currently stored in React state only. They remain visible while the page is open, but they reset when the page is refreshed. A backend or browser storage can be added later for permanent persistence.
