import Container from 'common/components/UI/Container';
import React from 'react';
import Section, {
  FeatureItem, Features, SectionHeading
} from './content.style';
import styled from "styled-components";
import colors from "../../../common/theme/saasAppDark/colors";
import background from "common/assets/image/saasAppDark/classig-noble.jpg"
import {Icon} from 'react-icons-kit'
import {ic_monetization_on_outline} from 'react-icons-kit/md/ic_monetization_on_outline'

const BrightSection = styled(Section)`
  background-color: #dedee4;
  position: relative;
  &::after {
    background-image: url(${background.src});
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -100;
    filter: saturate(0.2) opacity(0.2) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
  }
  padding-bottom: 2rem;
  color: ${colors.textColorAlt};
  text-align: center;
  p {
    text-align: justify;
    font-size: large;
  }
`

const Audience = () => {
  return (
    <BrightSection id="class-content">
      <Container width="1170px">
        <SectionHeading>
          PARA QUEM É A MASTERCLASS?
        </SectionHeading>
        <Features>
          {
            [
              "Advogados",
              "Empresários",
              "Funcionários Públicos",
              "Investidores",
              "Médicos",
            ].map((item, index) => (
              <FeatureItem key={`audience-${index}`}>
                <Icon icon={ic_monetization_on_outline}/>
                <p>{item}</p>
              </FeatureItem>
            ))
          }
        </Features>
        <p>
          Qualquer pessoa que deseja construir patrimônio e ter uma renda passiva em dólar através do maior mercado do mundo: <b>O Mercado Imobiliário.</b>
        </p>
      </Container>
    </BrightSection>
  );
};

export default Audience;
