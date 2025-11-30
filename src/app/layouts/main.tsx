import { type FC } from 'react';
import { Outlet } from 'react-router';

const MainLayout: FC = () => {
  return (
    <div className="p-5 sm:p-15">
      <Outlet />
    </div>
  );
};

export default MainLayout;