import { type FC } from 'react';
import { Link } from 'react-router';

export const HomePage: FC = () => {
  return (
    <>
      <title>Habits by Lee Ma | Track and Improve Your Daily Routines</title>
      <meta name="description" content="Habits is a personal project by Lee Ma designed to help you build, track, and maintain daily routines. Learn more about the project and get in touch for collaboration." />
      <meta property="og:title" content="Habits by Lee Ma | Track and Improve Your Daily Routines" />
      <meta property="og:description" content="Habits is a personal project by Lee Ma designed to help you build, track, and maintain daily routines. Learn more about the project and get in touch for collaboration." />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Habits" />
      <meta property="twitter:card" content="summary" />

      <header className="mb-8 flex items-center gap-4">
        <h1 className="font-bold text-2xl">Home</h1>
        <span className="font-bold text-2xl text-zinc-200">/</span>
        <Link to="/habits" className="font-bold text-2xl text-zinc-200 hover:underline hover:text-black">my habits</Link>
      </header>

      <section>
        <p className="mb-8">A minimal habit-tracking app designed to help you build consistency and monitor your daily routines.</p>
        <h2 className="mb-8 font-bold text-2xl">Features:</h2>
        <ul className="mb-8 list-inside list-disc">
          <li className="mb-3">User registration and authentication</li>
          <li className="mb-3">Session token refresh</li>
          <li className="mb-3">Create, edit, and delete habits</li>
          <li className="mb-3">Daily progress tracking</li>
          <li className="mb-3">Visual progress charts</li>
        </ul>
        <h2 className="mb-8 font-bold text-2xl">Contacts:</h2>
        <ul className="list-inside list-disc">
          <li className="mb-3">
            <span>Telegram - </span>
            <a href="https://t.me/mr_mashanlo" className="text-blue-500 decoration-[.1rem] hover:underline">@mr_mashanlo</a>
          </li>
          <li className="mb-3">
            <span>Linkedin - </span>
            <a href="https://linkedin.com/in/mr-mashanlo" className="text-blue-500 decoration-[.1rem] hover:underline">@mr-mashanlo</a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default HomePage;