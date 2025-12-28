import { type FC } from 'react';

import { WelcomeForm } from '@/features/welcome-form';

export const WelcomePage: FC = () => {
  return (
    <>
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Habits" />
      <meta property="twitter:card" content="summary" />

      <section className="h-screen p-5 sm:p-15 flex justify-center items-center">
        <WelcomeForm />
      </section>
    </>
  );
};

export default WelcomePage;