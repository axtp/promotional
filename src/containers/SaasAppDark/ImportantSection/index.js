import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import {HydratedCTAButton} from "common/components/CTAButton";
import {importantFeatures} from 'common/data/SaasAppDark';
import React from 'react';
import Section, {
  FeatureItem, IntroFeatures2, SectionHeading
} from './importantSection.style';
import styled from "styled-components";

const Centered = styled.div`
  text-align: center;
`
const Attention = styled.div`
  text-align: justify;
  font-size: large;
  padding: 0.5rem 0;
  color: white;
`

const ImportantSection = () => {
  const {features} = importantFeatures;

  return (
    <Section id="why">
      <Container width="1170px">
          <SectionHeading>
            <h2>Importante para</h2>
          </SectionHeading>
          <IntroFeatures2>
            {features.map((feature) => (
              <FeatureItem key={feature.id}>
                <svg
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10.2977L8.5611 18.8751L25 2.45244L22.6399 0.125L8.5611 14.1875L2.32739 7.95383L0 10.2977Z"
                    fill="#15E49E"
                  />
                </svg>
                <div>
                  <Heading as="h4" content={feature.title}/>
                  <Text as="p" color="white">{feature.desc}</Text>
                </div>
              </FeatureItem>
            ))}
          </IntroFeatures2>
            <Attention>
              <b>ATENÇÃO: </b>Você que gostaria de seguir uma metodologia comprovada e segura para investir no mercado imobiliário, por alguém que conhece e já fez isso na prática.
            </Attention>
          <Centered>
          <HydratedCTAButton />
          </Centered>
      </Container>
    </Section>
  );
};

export default ImportantSection;
