import { type FC } from 'react';
import { Link } from 'react-router';

import { Calendar } from '@/widgets/calendar';
import { Progress } from '@/widgets/progress';

export const TodayPage: FC = () => {
  return (
    <>
      <title>Habits - Today's habits</title>
      <meta name="description" content="Check off your daily habits and track progress effortlessly." />
      <meta property="og:title" content="Habits - Today's habits" />
      <meta property="og:description" content="Check off your daily habits and track progress effortlessly." />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Habits" />
      <meta property="twitter:card" content="summary" />

      <header className="mb-8 flex items-center gap-4">
        <h1 className="font-bold text-2xl">Today</h1>
        <span className="font-bold text-2xl text-zinc-200">/</span>
        <Link to="/habits" className="font-bold text-2xl text-zinc-200 hover:underline hover:text-black">my habits</Link>
      </header>

      <section>
        <Progress />
      </section>

      <section>
        <div className="mt-15 mb-11">
          <h2 className="font-bold text-2xl">Calendar</h2>
        </div>
        <Calendar />
      </section>
    </>
  );
};

export default TodayPage;