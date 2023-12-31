import masterclass from 'common/assets/image/saasAppDark/masterclass.jpg';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import {howItWorksFeatures} from 'common/data/SaasAppDark';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Section, {
  Content,
  FeatureList
} from './howitworks.style';
import styled from "styled-components";


const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Figure = styled.figure`
  position: relative;
  width: 400px;
  height: 600px;
  margin: 0 auto;

  img {
    border-radius: 8px;
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.7));
    object-fit: cover;
    object-position: -580px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
  }

  @media (max-width: 400px) {
    display: none;
  }

`

const HowItWorks = () => {
  return (
    <Section>
      <Container width="1300px">
        <Box>
          <Content>
            <Text as="h2">
              MASTERCLASS
            </Text>
            <Heading content="Como vai funcionar?"/>
            <Text
              as="description"
            >
              Os participantes do primeiro lote, ganharão o ingresso para a próxima Masterclass Presencial em SP
            </Text>
            <FeatureList>
              {howItWorksFeatures?.map((feature) => (
                <div className="feature" key={feature.id}>
                  <figure className="icon">
                    <img src={feature?.icon?.src} alt="feature icon"/>
                  </figure>
                  <div className="feature-content">
                    <Text>{feature.title}</Text>
                    <Text as="h4">{feature.desc}</Text>
                  </div>
                </div>
              ))}
            </FeatureList>
          </Content>
          <Fade right>
            <Figure>
              <NextImage
                fill
                src={masterclass}
                alt="masterclass"
              />
            </Figure>
          </Fade>
        </Box>
      </Container>
    </Section>
  );
};

export default HowItWorks;
