# MBTI Personality Web App

Web application that allows users to take the MBTI (Myers-Briggs Type Indicator) personality test and receive a personality type result (e.g., INTJ, ENFP). The project is built with **Next.js** and uses **MongoDB** as the database. It's developed as part of a university course project for Inżynieria IO/BD.


## Technologies

- **Frontend & Backend**: [Next.js](https://nextjs.org/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Styling**: Tailwind CSS

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/your-username/mbti-web-app.git
cd mbti-web-app
```

Create a `.env.local` file in the root directory and add your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mbti?retryWrites=true&w=majority
```

and then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
