import { type FC } from 'react';

import { SignInForm } from '@/features/signin-form';

const SigninPage: FC = () => {
  return (
    <>
      <title>Habits - Sign in</title>
      <meta name="description" content="Log in to access your daily habits and progress tracking." />
      <meta property="og:title" content="Habits - Sign in" />
      <meta property="og:description" content="Log in to access your daily habits and progress tracking." />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Habits" />
      <meta property="twitter:card" content="summary" />

      <section className="h-screen p-5 sm:p-15 flex justify-center items-center">
        <SignInForm />
      </section>
    </>
  );
};

export default SigninPage;