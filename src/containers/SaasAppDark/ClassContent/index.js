import Container from 'common/components/UI/Container';
import {classContents} from 'common/data/SaasAppDark';
import React from 'react';
import Section, {
  FeatureItem, Features, SectionHeading
} from './content.style';
import styled from "styled-components";
import {diamonds} from 'react-icons-kit/icomoon/diamonds'
import {Icon} from "react-icons-kit";


const BrightSection = styled(Section)`
  background-color: #dedee4;
  padding-bottom: 2rem;
`

const ClassContent = () => {
  const {items} = classContents;

  return (
    <BrightSection id="class-content">
      <Container width="1170px">
        <SectionHeading>
          O QUE VOCÊ VAI APRENDER NA MASTERCLASS?
        </SectionHeading>
        <Features>
          {
            items.map((item) => (
              <FeatureItem key={item.id}>
                <Icon icon={diamonds}/>
                <p>{item.text}</p>
              </FeatureItem>
            ))
          }
        </Features>
      </Container>
    </BrightSection>
  );
};

export default ClassContent;
