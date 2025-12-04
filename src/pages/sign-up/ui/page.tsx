import { type FC } from 'react';

import { SignUpForm } from '@/features/signup-form';

const SignupPage: FC = () => {
  return (
    <div className="h-screen p-5 sm:p-15">
      <title>Habits - Sign up</title>
      <meta name="description" content="Create an account and start building good habits today." />
      <meta property="og:title" content="Habits - Sign up" />
      <meta property="og:description" content="Create an account and start building good habits today." />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Habits" />
      <meta property="twitter:card" content="summary" />

      <section className="h-full flex justify-center items-center">
        <SignUpForm />
      </section>
    </div>
  );
};

export default SignupPage;