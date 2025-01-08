import Router from '@routes/Router';
import { UserProvider } from './repo';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
