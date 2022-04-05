import { useContext } from 'react';
import { Context } from '../context';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import PageLayout from '../components/layouts/PageLayout';
import Navbar from '../containers/navbar';
const RequireAuth = () => {
  const location = useLocation();
  const { user } = useContext(Context);
  return (
    <>
      {user ? (
        <PageLayout>
          <Navbar />
          <Outlet />
        </PageLayout>
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
