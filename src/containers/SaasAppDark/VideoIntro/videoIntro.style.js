import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 20px;
  //@media only screen and (max-width: 1536px) {
  //  padding-top: 20px;
  //}
  //@media only screen and (max-width: 1440px) {
  //  padding-top: 20px;
  //}
  //@media only screen and (max-width: 820px) {
  //  padding-top: 100px;
  //}
  //@media only screen and (max-width: 667px) {
  //  padding-top: 70px;
  //}
`;
export default Section;

export const SectionHeading = styled.div`
  text-align: center;
  max-width: 755px;
  margin: 0 auto 70px;
  span {
    color: ${themeGet('colors.secondary')};
    font-family: 'Roboto', cursive;
    font-weight: 700;
    font-size: 28px;
    color: ${themeGet('colors.secondary')};
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
    display: block;
    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-weight: 900;
    font-size: 30px;
    line-height: 43px;
    margin-bottom: 22px;
    @media only screen and (max-width: 667px) {
      font-size: 22px;
      line-height: 1.5;
    }
  }
  p {
    font-size: 17px;
    line-height: 2.06;
    margin-bottom: 0;
    @media only screen and (max-width: 667px) {
      font-size: 15px;
      line-height: 1.6;
    }
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 1240px;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Figure = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin: 0 auto;
  
  img {
    border-radius: 4px;
    filter: drop-shadow(0px 4px 10px rgba(0,0,0,0.7));
    
    @media (max-width: 480px){
      max-width: none;
      width: unset !important;
    }
  }
  
  > div {
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
  @media (min-width: 1024px) {
    max-width: 720px;
  }
  @media (min-width: 1366px) {
    max-width: 1040px;
  }
  @media (min-width: 1280px) {
    max-width: 9200px;
  }
  @media (min-width: 1440px) {
    max-width: 90%;
  }
  @media (min-width: 1600px) {
    max-width: 100%;
  }
`;



export const IntroFeatures2 = styled.div`
  gap: 20px;
  display: flex;
  margin-top: 60px;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    gap: 20px;
  }
  @media only screen and (max-width: 991px) {
    gap: 25px;
    margin-top: 40px;
    grid-template-columns: repeat(2, max-content);
  }
  @media only screen and (max-width: 667px) {
    gap: 10px;
    grid-template-columns: repeat(1, max-content);
  }
`;

export const FeatureItem = styled.div`
  gap: 0 20px;
  display: grid;
  align-items: center;
  grid-template-columns: max-content 1fr;
  @media only screen and (max-width: 667px) {
    align-items: flex-start;
  }

  h4 {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
  }
`;
