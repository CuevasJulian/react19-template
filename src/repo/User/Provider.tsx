import { ReactNode, useMemo, useState } from 'react';
import Context, { User } from './Context';

interface Provider {
  children: ReactNode;
}

export default function Provider({ children }: Provider) {
  const [user, setUser] = useState<User>();

  const userContext = useMemo(() => ({ user, setUser }), [user]);

  return <Context.Provider value={userContext}>{children}</Context.Provider>;
}
