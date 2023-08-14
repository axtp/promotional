import React from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import Section, {
  BannerContentWrapper,
  BannerContent,
} from './banner.style';
import {useState} from 'react';
import {Constants} from "../../../constants";
import styled from "styled-components";
import {Icon} from "react-icons-kit";
import {themeGet} from "@styled-system/theme-get";

const VideoSection = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -100;
`

const HeroVideo = styled.video`
  position: absolute;
  inset: 0;
  object-fit: cover;
  height: 60vh;
  width: 100vw;
  z-index: -100;
  @media (max-width: 767px) {
    display: none;
  }
`

const VideoBlender = styled.div`
  position: absolute;
  inset: 0;
  height: 60vh;
  width: 100vw;
  background-blend-mode: color-burn;
  background-color: rgba(0,0,0,0.4);
  //backdrop-filter: blur(2px);
  z-index: 0;
  @media (max-width: 767px) {
    display: none;
  }
  
`

const CTAButton = styled(Button)`
    text-align: center;
    border-radius: 50px;
    margin-top: 40px;
    font-weight: 500;
    padding: 25px 27px;
    color: ${themeGet('colors.black')};
    .btn-icon {
      margin-left: 4px;
    }
    @media (max-width: 1023px) {
      padding: 20px 22px;
    }
    @media (max-width: 767px) {
      padding: 17px 18px;
      font-size: 13px;
    }
    &:hover {
      background-color: ${themeGet('colors.primaryHover')};
    }
`


const Banner = () => {
  const [openModal, setModal] = useState(false);
  return (
    <Section id="home" >
          <VideoSection>
            <HeroVideo autoPlay loop muted >
              <source src="https://pub-00a9fcf6f2c04d8d9717c5f22ed90362.r2.dev/banner-video.mp4"/>
            </HeroVideo>
            <VideoBlender />
          </VideoSection>
        <Container width="1300px">
          <BannerContentWrapper>
            <BannerContent>
              <Text className="animate__animated animate__fadeInUp" as="h1">
                <u>MASTERCLASS</u>
              </Text>
              <Text as="h2" className="animate__animated animate__fadeInUp">
                Imóveis nos Estados Unidos
              </Text>
              <Text as="h3" className="animate__animated animate__fadeInUp">
                Descubra como construir patrimônio e renda com imóveis nos Estados Unidos
              </Text>
              <Text
                className="animate__animated animate__fadeInUp"
                textAlign="justify"
                mt="2"
                color="white"
              >
                Depois de <b>morar</b> nos <b>Estados Unidos</b> e conhecer cada detalhe desse mercado, eu vou te
                mostrar <b>no dia {Constants.EventDates.Day}, às {Constants.EventDates.Time} horas em uma MasterClass
                Exclusiva.</b> Quais são os melhores caminhos para <b>investir</b> no mercado imobiliário, <b>o maior
                mercado do mundo.</b>
              </Text>
              <CTAButton title="Quero Reservar Minha Vaga" icon={<Icon icon={arrowRight2} />} iconPosition="right" />
                {/*<button className="button-two" onClick={() => setModal(true)}>*/}
                {/*<span className="play-icon">*/}
                {/*  <img src={playIcon?.src} alt="play Icon"/>*/}
                {/*</span>*/}
                {/*  <span className="btn-txt">*/}
                {/*  <span className="primary">Assista</span> Vídeo de Introdução*/}
                {/*</span>*/}
                {/*</button>*/}
            </BannerContent>
          </BannerContentWrapper>
        </Container>

    </Section>
  );
};

export default Banner;
