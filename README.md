# Kanishka Sharma Portfolio

A premium portfolio website for Kanishka Sharma, featuring an AI chatbot and contact form.

## Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS, Framer Motion
- **Backend**: Python, FastAPI, Uvicorn
- **Styling**: Tailwind CSS (Dark/Light mode)

## Getting Started

### Prerequisites

- Node.js (v18+)
- Python (v3.8+)

### 1. Setup Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

### 2. Setup Frontend

Open a new terminal, navigate to the project root, and install dependencies:

```bash
npm install
```

Run the Next.js development server:

```bash
npm run dev
```

The website will be available at `https://kanishka-s-portfolio.vercel.app/`.

## Features

- **Responsive Design**: Works on all devices.
- **Dark/Light Theme**: Toggle between themes.
- **AI Chatbot**: Integrated with FastAPI backend.
- **Contact Form**: Sends data to FastAPI backend.
