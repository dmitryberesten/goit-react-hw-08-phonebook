import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react'; // для лінивої загрузки
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      {' '}
      {/* для того щоб AppBar не перекривав контент */}
      <AppBar />
      {/* для лінивої загрузки */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
