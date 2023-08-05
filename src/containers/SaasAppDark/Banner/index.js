import React from 'react';
import Container from 'common/components/UI/Container';
import Text from 'common/components/Text';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Image from 'common/components/Image';
import Section, {
  BannerContentWrapper,
  BannerContent,
  VideoWrapper,
  Buttons,
  Figure,
} from './banner.style';
import playIcon from 'common/assets/image/saasAppDark/icons/play.svg';
import dashboard from 'common/assets/image/saasAppDark/banner-dashboard.png';
import {Modal} from '@nextui-org/react';
import {useState} from 'react';
import {Constants} from "../../../constants";

const Banner = () => {
  const [openModal, setModal] = useState(false);

  return (
    <Section id="home">
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
            >
              Depois de <b>morar</b> nos <b>Estados Unidos</b> e conhecer cada detalhe desse mercado, eu vou te mostrar <b>no dia {Constants.EventDates.Day}, às {Constants.EventDates.Time} horas em uma MasterClass Exclusiva.</b> Quais são os melhores caminhos para <b>investir</b> no mercado imobiliário, <b>o maior mercado do mundo.</b>

            </Text>
            <Buttons>
              <Button
                colors="primary"
                title="Quero Reservar Minha Vaga"
                className="button-one"
              />
              <button className="button-two" onClick={() => setModal(true)}>
                <span className="play-icon">
                  <img src={playIcon?.src} alt="play Icon"/>
                </span>
                <span className="btn-txt">
                  <span className="primary">Assista</span> Vídeo de Introdução
                </span>
              </button>
            </Buttons>
          </BannerContent>
          <Figure className="hero-banner">
            <NextImage src={dashboard} alt="dashboard"/>
          </Figure>
        </BannerContentWrapper>
      </Container>
      <Modal
        blur
        width='850px'
        aria-labelledby="Search Panel"
        open={openModal}
        onClose={() => setModal(false)}
        justify="center"
        css={{
          background: 'transparent !important',
          borderRadius: '0px !important',
        }}
      >
        <div style={{margin: 'auto'}}>
          <iframe width="850" height="505" src="https://www.youtube.com/embed/hW98BFnVCm8"
                  title="Cartsy - Super Fast WooCommerce Theme" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
        </div>
      </Modal>
    </Section>
  );
};

export default Banner;
