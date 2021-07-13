import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: #33373d;
    z-index: 1;

    * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
`;

const Background = styled.div`
    position: fixed;

    img {
        max-width: 45vw;
        max-height: 45vh;
    }

    &.topLeft {
        left: 0;
        top: 0;

    }

    &.topRight {
        right: 0;
        top: 0;
        transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
    }

    &.bottomLeft {
        left: 0;
        bottom: 0;
        transform: scale(1, -1);
        -webkit-transform: scale(1, -1);
    }

    &.bottomRight {
        right: 0;
        bottom: 0;
        transform: scale(-1);
        -webkit-transform: scale(-1);

    }
`;

const CustomBackground = () => (
    <Container>
        <Background className = 'topLeft'>
            <img src = 'images/background.png' />
        </Background>

        <Background className = 'topRight'>
            <img src = 'images/background.png' />
        </Background>

        <Background className = 'bottomLeft'>
            <img src = 'images/background.png' />
        </Background>

        <Background className = 'bottomRight'>
            <img src = 'images/background.png' />
        </Background>
    </Container>
);

export default CustomBackground;
