import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import {importantFeatures} from 'common/data/SaasAppDark';
import React, {useState} from 'react';
import Section, {
  FeatureItem, Figure, IntroFeatures2, IntroFeaturesSection, SectionHeading
} from './videoIntro.style';
import NextImage from "common/components/NextImage";
import {PlayButton} from "../Testimonials/testimonials.style";
import {Modal} from "@nextui-org/react";
import {PandaVideo} from "common/components/EmbeddedVideo/PandaVideo";
import playIcon from 'common/assets/image/saasAppDark/icons/play.svg';
import thumbnail from 'common/assets/image/saasAppDark/thumbnail.jpg';


const VideoIntro = () => {
  const [openModal, setModal] = useState(false);
  const {features} = importantFeatures;

  return (
    <Section id="portfolio">
      <Container width="1170px">
        <Figure>
          <NextImage src={thumbnail} alt="video banner"/>
          <PlayButton onClick={() => setModal(true)}>
            <img src={playIcon?.src} alt="play Icon"/>
          </PlayButton>
        </Figure>
      </Container>
      <Modal
        blur
        width="800px"
        aria-labelledby="Search Panel"
        open={openModal}
        onClose={() => setModal(false)}
        justify="center"
        css={{
          borderRadius: "8px !important",
          maxWidth: '800px',
        }}
      >
        <PandaVideo videoId="5c7ac03a-f519-413a-a3a9-d7d4ef94b0a3" title="Masterclass - AXT PropTech Company"
                    autoPlay={true}/>
      </Modal>
    </Section>
  );
};

export default VideoIntro;
