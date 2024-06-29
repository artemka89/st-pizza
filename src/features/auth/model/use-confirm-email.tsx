import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useSignIn } from './use-sign-in';

export function useConfirmEmail() {
  const [searchParams] = useSearchParams();
  const signIn = useSignIn();

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      const userId = searchParams.get('userId');
      const secret = searchParams.get('secret');
      if (userId && secret) {
        signIn.mutate({ userId, secret });
      }
      hasMounted.current = true;
    }
  }, [searchParams, signIn]);

  return { status: signIn.status };
}
