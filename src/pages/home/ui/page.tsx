import { type FC } from 'react';

import { Habits } from '@/widgets/habits';

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

      <Habits className="sm:w-[43.5rem] mx-auto p-5 sm:p-15" />
    </>
  );
};

export default HomePage;