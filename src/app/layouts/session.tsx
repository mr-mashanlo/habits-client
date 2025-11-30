import { type FC } from 'react';
import { Outlet } from 'react-router';

const SessionLayout: FC = () => {
  return (
    <div className="h-screen p-5 sm:p-15">
      <Outlet />
    </div>
  );
};

export default SessionLayout;