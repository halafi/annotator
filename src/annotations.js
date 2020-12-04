import React from 'react';
import styled from 'styled-components';

// do your magic here 👇

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: palegreen;
`;

const handleSelection = ev => {
  const { pageX: x, pageY: y } = ev;
  alert(`(${x}, ${y})`);
};

const Annotations = () => (
  <Container
    onClick={handleSelection}
  >
    It works
  </Container>
);

export default Annotations;
