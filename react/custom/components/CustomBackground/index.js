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

const BrandingBackgroundContainer = styled.div`
    position: fixed;

    img {
        width: 100vw;
        height: 100vh;
    }
`;

const BrandingLogoComponent = styled.div`
    background-image: url(${props => props.image});
    max-width: 140px;
    max-height: 70px;
    position: absolute;
`

function BrandingLogo({ image }) {
    return <BrandingLogoComponent image={image} className="watermark leftwatermark" />
}

function BrandingBackground({ image }) {
    return (
        <BrandingBackgroundContainer>
            <img src={image} />
        </BrandingBackgroundContainer>
    )
}

function getRoomName() {
    const [room] = (window.location.ancestorOrigins.length ? window.location.ancestorOrigins[0] : window.location.href).replace('https://', '').split('.');
    return room;
}

const CustomBackground = () => {
    const [logo, setLogo] = React.useState('');
    const [background, setBackground] = React.useState('');

    const fetchBranding = async () => {
        const roomName = getRoomName();
        const data = await fetch(`https://app.zellim.com/module/chat/conference/rooms/branding/${roomName}`).then(data => data.json());

        if (data?.branding?.logo) {
            setLogo(data.branding.logo)
        }
        if (data?.branding?.background) {
            setBackground(data.branding.background)
        }
    }

    React.useEffect(() => {
        fetchBranding();
    }, []);

    return (
        <Container>
            {logo && <BrandingLogo image={logo} />}
            {background ? (
                <BrandingBackground image={background} />
            ) : (
                <>
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
                </>
            )}
        </Container>
    )
};

export default CustomBackground;
