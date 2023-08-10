import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { videoIntro } from 'common/data/SaasAppDark';
import React, { useState } from 'react';
import Section, {
  FeatureItem, Figure, IntroFeatures2, SectionHeading
} from './videoIntro.style';
import NextImage from "common/components/NextImage";
import {PlayButton} from "../Testimonials/testimonials.style";
import {Modal} from "@nextui-org/react";
import {PandaVideo} from "common/components/EmbeddedVideo/PandaVideo";
import playIcon from 'common/assets/image/saasAppDark/icons/play.svg';
import thumbnail from 'common/assets/image/saasAppDark/daniel_heuri_thumbnail.jpg';


const VideoIntro = () => {
  const [openModal, setModal] = useState(false);
  const { features } = videoIntro;

  return (
    <Section id="portfolio">
      <Container width="1170px">
        <Figure>
          <NextImage src={thumbnail} alt="video banner" />
          <PlayButton onClick={() => setModal(true)}>
            <img src={playIcon?.src} alt="play Icon" />
          </PlayButton>
        </Figure>

        <SectionHeading>
          <Text as="h2">Importante para</Text>
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
                <Heading as="h4" content={feature.title} />
                <Text as="p" color="white">{feature.desc}</Text>
              </div>
            </FeatureItem>
          ))}
        </IntroFeatures2>
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
        <PandaVideo videoId="017c669c-1eed-44d2-9953-693d67a5a11b" title="Masterclass - AXT PropTech Company"
                    autoPlay={true}/>
      </Modal>
    </Section>
  );
};

export default VideoIntro;
