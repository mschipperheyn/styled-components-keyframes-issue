import React from 'react';
import styled, { keyframes } from 'styled-components';

const FullScreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const flyFromLeft = keyframes`
	0% {
        opacity: 0;
        transform: translateX(-500px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: ${flyFromLeft};
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
`

function DemoApp() {
  return (
    <FullScreen>
        <Box/>
    </FullScreen>
  );
}

export default DemoApp;
