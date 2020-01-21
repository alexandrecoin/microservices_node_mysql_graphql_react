import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setSession } from '#root/store/ducks/session';

import gql from 'graphql-tag';
import graphqlClient from '#root/api/graphqlClient';

import styled from 'styled-components';

import Login from './Login';

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-row: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Sidebar = styled.div`
  flex: 0 auto;
  widht: 10rem;
`;

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        email
        id
      }
    }
  }
`;

const Root = () => {
  const [initialised, setInitialised] = useState(false);
  const dispatch = useDispatch();
  if (!initialised) return 'Loading...';

  useEffect(async () => {
    const data = await graphqlClient.query({ query });
    if (data.userSession) dispatch(setSession(data.userSession));
    setInitialised(true);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Content>ok</Content>
        <Sidebar>
          <Login />
        </Sidebar>
      </Container>
    </Wrapper>
  );
};

export default Root;
