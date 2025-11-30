import { type FC, useState } from 'react';

import { SignUpForm } from '@/features/signup-form';
import { Family } from '@/widgets/family';

const SignupPage: FC = () => {
  const [ mood, setMood ] = useState<'neutral' | 'angry' | 'sad'>( 'neutral' );

  return (
    <>
      <title>Habits - Sign up</title>
      <meta name="description" content="Create an account and start building good habits today." />
      <meta property="og:title" content="Habits - Sign up" />
      <meta property="og:description" content="Create an account and start building good habits today." />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Habits" />
      <meta property="twitter:card" content="summary" />

      <section className="h-full grid sm:grid-cols-2 gap-10 sm:gap-4">
        <div className="flex justify-center items-center">
          <Family mood={mood} />
        </div>
        <div className="flex justify-center items-center">
          <SignUpForm setMood={setMood} />
        </div>
      </section>
    </>
  );
};

export default SignupPage;