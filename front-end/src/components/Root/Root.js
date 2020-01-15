import React from 'react';
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

const Root = () => {
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
