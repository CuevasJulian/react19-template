import { UserContext } from '@repo/index';
import { useContext } from 'react';

export default function FormToSignIn() {
  const { setUser } = useContext(UserContext);

  const signIn = () => {
    const emailInput = document.getElementById(
      'email-input',
    ) as HTMLInputElement;
    setUser({ email: emailInput?.value, id: 1, name: 'test user' });
  };

  return (
    <div className="flex flex-col p-4">
      <input
        id="email-input"
        type="email"
        placeholder="Email"
        className="mb-4"
      />
      <button
        type="button"
        onClick={signIn}
        className="bg-gray-100 hover:bg-gray-200"
      >
        Sign In
      </button>
    </div>
  );
}
