import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { useDispatch, useSelector } from 'react-redux';
import { clearSession } from '#root/store/ducks/session';

import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${(props) => props.theme.mortar};
  font-size: 0.9rem;
`;

const Email = styled.div`
  color: ${(props) => props.theme.nero};
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const LogOutLink = styled.a.attrs({ href: '#' })`
  color: blue;
  display: block;
  margin-top: 0.25rem;
`;

const mutation = gql`
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId)
  }
`;

const Account = () => {
  const dispatch = useDispatch();
  const [deleteUserSession] = useMutation(mutation);
  const session = useSelector((state) => state.session);

  return (
    <Wrapper>
      Logged in as <Email>{session.user.email}</Email>
      <LogOutLink
        onClick={(event) => {
          event.preventDefault();
          dispatch(clearSession());
          deleteUserSession({ variables: { sessionId: session.id } });
        }}
      >
        Logout
      </LogOutLink>
    </Wrapper>
  );
};

export default Account;
