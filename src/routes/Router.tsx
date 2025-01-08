import { UserContext } from '@repo/index';
import { useContext } from 'react';
import { BrowserRouter } from 'react-router';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function Router() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>{user ? <PrivateRoutes /> : <PublicRoutes />}</BrowserRouter>
  );
}
