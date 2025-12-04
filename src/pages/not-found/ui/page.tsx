import { type FC } from 'react';
import { Link } from 'react-router';

const NotFoundPage: FC = () => {
  return (
    <div className="p-5 sm:p-15">
      <title>Page not found</title>
      <meta property="og:title" content="Page not found" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:site_name" content="Habits" />
      <meta property="twitter:card" content="summary" />

      <header className="mb-8 flex items-center gap-4">
        <h1 className="font-bold text-2xl">Page 404</h1>
        <span className="font-bold text-2xl text-zinc-200">/</span>
        <Link to="/" className="font-bold text-2xl text-zinc-200 hover:underline hover:text-black">go to home</Link>
      </header>

      <section>
        <p>The resource requested could not be found on this server.</p>
      </section>
    </div>
  );
};

export default NotFoundPage;