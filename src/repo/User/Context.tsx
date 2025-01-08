import { createContext } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserContext {
  user?: User;
  setUser: (user?: User) => void;
}

export default createContext<UserContext>({
  setUser: () => {},
  user: undefined,
});
