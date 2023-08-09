import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Container from 'common/components/UI/Container';
import { videoIntro } from 'common/data/SaasAppDark';
import { useState } from 'react';
import Section, {
  FeatureItem, IntroFeatures2, SectionHeading
} from './videoIntro.style';


const VideoIntro = () => {
  const [openModal, setModal] = useState(false);
  const { features } = videoIntro;

  return (
    <Section id="portfolio">
      <Container width="1170px">
        <SectionHeading>
          <Text as="h2">Importante para</Text>
        </SectionHeading>
        {/*<Figure>*/}
        {/*  <NextImage src={banner} alt="video banner" />*/}
        {/*  <PlayButton onClick={() => setModal(true)}>*/}
        {/*    <img src={playIcon?.src} alt="play Icon" />*/}
        {/*  </PlayButton>*/}
        {/*</Figure>*/}
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
      {/*<Modal*/}
      {/*  blur*/}
      {/*  width='850px'*/}
      {/*  aria-labelledby="Search Panel"*/}
      {/*  open={openModal}*/}
      {/*  onClose={() => setModal(false)}*/}
      {/*  justify="center"*/}
      {/*  css={{*/}
      {/*    background: 'transparent !important',*/}
      {/*    borderRadius: '0px !important',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <div style={{ margin: 'auto' }}>*/}
      {/*    <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8" title="Cartsy - Super Fast WooCommerce Theme" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/}
      {/*  </div>*/}
      {/*</Modal>*/}
    </Section>
  );
};

export default VideoIntro;
