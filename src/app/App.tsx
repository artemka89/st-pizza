import { useState } from 'react';

import { SignInForm } from '@/features/auth';
import { Button } from '@/shared/ui/button';

function App() {
  const [show, setShow] = useState(false);
  const onClickButton = () => {
    setShow(true);
  };
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello World!</h1>
      <div>
        <Button onClick={onClickButton}>Click me</Button>
        {show && <div>Button is clicked</div>}
        <SignInForm />
      </div>
    </>
  );
}

export default App;
