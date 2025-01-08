import Landing from '@pages/Landing';
import { Route, Routes } from 'react-router';

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route index element={<Landing logged />} />
    </Routes>
  );
}
