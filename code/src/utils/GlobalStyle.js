import styled, { createGlobalStyle, css } from 'styled-components/macro';
import BackgroundImg from '../assets/background-img.jpg';

export const GlobalStyle = createGlobalStyle`
html {
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat; 
     background-size: cover;
     background-position: center center;
    width: 100%;
    height: 100%;
}
  body {
    margin: 0;
    padding: 0;

    font-family: 'Permanent Marker', cursive;
  }
 
`;

export const OuterWrapper = styled.div`
  height: 100vh;

  /* padding: 100px 0; */
`;

export const InnerWrapper = styled.div`
  width: 98%;
  margin: 0 auto;
`;

export const DirectionBtn = styled.button`

background-color: inherit;

 ${(props) => props.north && css`
 grid-area: 1 / 4 / span 2 / span 2;

 @media (max-width: 700px) {
  grid-area: 1 / 3 / span 1 / span 4;
  }
  
`};

${(props) => props.east && css`
grid-area: 4 / 7 / span 2 / span 3;
`};

${(props) => props.west && css`
grid-area: 4 / 1 / span 2 / span 2;
`};

${(props) => props.south && css`
grid-area: 7 / 4 / span 2 / span 2;
`};
`;
