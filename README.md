# ShortLinks

ShortLinks is a simple URL shortening application that allows users to convert long URLs into preferred shorter URLs. This application is built using modern web technologies for an efficient and user-friendly experience.

## Features
- Convert long URLs into shorter, customizable links.
- Store and manage shortened links.
- Simple, clean, and responsive user interface.

## Tech Stack
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Database**: MongoDB

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16.x or later)
- MongoDB (local or cloud instance)

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/prachisamuel/ShortLinks.git
   cd short-links
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration: Create a .env file in the root directory and add the following**:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=http://localhost:3000
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Deployment
The project is deployed on **Vercel**. You can access the live application at:
[https://short-links-one.vercel.app](https://short-links-one.vercel.app)

## How It Works
1. User enters a long URL and a preferred short text.
2. The provided text is stored in the MongoDB database along with the original URL.
3. Users can access the original URL by visiting the short link.

## Future Enhancements
- User authentication for managing personalized links.
- Link analytics (click counts, geographic data, etc.).
- QR code generation for shortened URLs.
