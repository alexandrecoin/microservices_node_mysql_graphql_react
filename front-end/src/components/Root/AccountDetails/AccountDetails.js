import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';
import SignUp from './SignUp';
import Account from './Account';

const AccountDetails = () => {
  const session = useSelector((state) => state.session);
  const [isSigningUp, setIsSigningUp] = useState(false);
  console.log(session);
  if (session) return <Account />;

  return isSigningUp ? (
    <SignUp
      onChangeToLogin={() => {
        setIsSigningUp(false);
      }}
    />
  ) : (
    <Login
      onChangeToSignUp={() => {
        setIsSigningUp(true);
      }}
    />
  );
};

export default AccountDetails;
