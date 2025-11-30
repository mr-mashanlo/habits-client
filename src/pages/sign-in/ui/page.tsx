import { type FC, useState } from 'react';

import { SignInForm } from '@/features/signin-form';
import { Family } from '@/widgets/family';

const SigninPage: FC = () => {
  const [ mood, setMood ] = useState<'neutral' | 'angry' | 'sad'>( 'neutral' );

  return (
    <>
      <title>Habits - Sign in</title>
      <meta name="description" content="Log in to access your daily habits and progress tracking." />
      <meta property="og:title" content="Habits - Sign in" />
      <meta property="og:description" content="Log in to access your daily habits and progress tracking." />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Habits" />
      <meta property="twitter:card" content="summary" />

      <section className="h-full grid sm:grid-cols-2 gap-10 sm:gap-4">
        <div className="flex justify-center items-center">
          <Family mood={mood} />
        </div>
        <div className="flex justify-center items-center">
          <SignInForm setMood={setMood} />
        </div>
      </section>
    </>
  );
};

export default SigninPage;