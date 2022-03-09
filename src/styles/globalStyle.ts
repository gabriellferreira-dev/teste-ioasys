import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: GillSans;
    src: local(GillSans-SemiBold),
      url(/fonts/GillSans-SemiBold.woff2) format("woff2"),
      url(/fonts/GillSans-SemiBold.woff) format("woff"),
      url(/fonts/GillSans-SemiBold.ttf) format("truetype");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: LucidaGrande;
    src: local(LucidaGrande-Regular),
      url(/fonts/LucidaGrande-Regular.woff2) format("woff2"),
      url(/fonts/LucidaGrande-Regular.woff) format("woff"),
      url(/fonts/LucidaGrande-Regular.ttf) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: Roboto;
    src: local(Roboto-Regular),
      url(/fonts/Roboto-Regular.woff2) format("woff2"),
      url(/fonts/Roboto-Regular.woff) format("woff"),
      url(/fonts/Roboto-Regular.ttf) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: Roboto;
    src: local(Roboto-Bold),
      url(/fonts/Roboto-Bold.woff2) format("woff2"),
      url(/fonts/Roboto-Bold.woff) format("woff"),
      url(/fonts/Roboto-Bold.ttf) format("truetype");
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: SourceSansPro;
    src: local(SourceSansPro-Regular),
      url(/fonts/SourceSansPro-Regular.woff2) format("woff2"),
      url(/fonts/SourceSansPro-Regular.woff) format("woff"),
      url(/fonts/SourceSansPro-Regular.ttf) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
  .Text-Style-5 {
    font-family: Roboto;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${({ theme }) => theme.colors['white-two']};
  }
  .Text-Style-4 {
    font-family: Roboto;
    font-size: 34px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${({ theme }) => theme.colors.rouge};
  }
  .Text-Style-3 {
    font-family: Roboto;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: -0.45px;
    text-align: center;
    color: ${({ theme }) => theme.colors['charcoal-grey']};
  }
  .Text-Style-6 {
    font-family: Roboto;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${({ theme }) => theme.colors['dark-indigo']};
  }
  .Text-Style-11 {
    font-family: Roboto;
    font-size: 25.6px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.2px;
    text-align: center;
    color: ${({ theme }) => theme.colors['charcoal-grey']};
  }
  .Text-Style-10 {
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${({ theme }) => theme.colors['charcoal-grey']};
  }
  .Text-Style-7 {
    font-family: Roboto;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${({ theme }) => theme.colors['warm-grey']};
  }
  .Text-Style-9 {
    font-family: SourceSansPro;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: -0.38px;
    text-align: left;
    color: ${({ theme }) => theme.colors['warm-grey']};
  }
  .Text-Style-8 {
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${({ theme }) => theme.colors['warm-grey']};
  }
  .Text-Style-2 {
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.25px;
    text-align: left;
    color: ${({ theme }) => theme.colors['charcoal-grey']};
  }
  .Text-Style {
    font-family: Roboto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: -0.25px;
    text-align: center;
    color: ${({ theme }) => theme.colors['charcoal-grey']};
  }
  .Text-Style-12 {
    font-family: GillSans;
    font-size: 17px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.04px;
    text-align: center;
    color: ${({ theme }) => theme.colors['white-two']};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

`;
