import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import colors from "../../../common/theme/saasAppDark/colors";

const Section = styled.section`
  position: relative;
  z-index: 0;
  padding-top: 2rem;
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
  margin: auto;
  max-width: 755px;
  color: ${colors.textColorAlt} !important;
  font-weight: 900;
  font-size: 30px;
  line-height: 43px;
  margin-bottom: 22px;
  @media only screen and (max-width: 667px) {
    font-size: 22px;
    line-height: 1.5;
  }

`;

export const Features = styled.div`
  display: flex;
  margin: 2rem 0;
  justify-content: center;
  flex-direction: column;
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: ${colors.textColorAlt};
  p {
    margin-left: 0.5rem;
    padding: 0.5rem 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    line-height: 23px;
  }
`;
