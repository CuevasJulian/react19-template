import FormToSignIn from '@components/FormToSignIn';
import Header from '@components/Header';
import stg from '@utils/stg';

interface LandingProps {
  logged?: boolean;
}

export default function Landing({ logged }: LandingProps) {
  return (
    <div className="w-full flex flex-col h-full">
      <Header />
      <p className="text-base text-gray-900">{`${stg('testing')} ${logged ? 'private' : 'public'} route`}</p>
      <p className="text-base text-blue-600">
        {stg('testing_n_and_y', {
          replace: {
            '%n': 'hello',
            '%y': 'world',
          },
        })}
      </p>
      {!logged && (
        <div className="mx-auto bg-gray-300 rounded-lg">
          <FormToSignIn />
        </div>
      )}
    </div>
  );
}
