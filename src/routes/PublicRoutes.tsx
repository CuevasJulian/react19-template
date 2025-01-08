import Landing from '@pages/Landing';
import { Route, Routes } from 'react-router';

export default function PublicRoutes() {
  return (
    <Routes>
      <Route index element={<Landing />} />
    </Routes>
  );
}
