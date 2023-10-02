import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, {BGImage, SectionHeading} from './cta.style';
import {Constants} from "../../../constants";
import styled from "styled-components";
import {HydratedCTAButton} from "../../../common/components/CTAButton";
import Link from "next/link";
import Button from "common/components/Button";
import {themeGet} from "@styled-system/theme-get";

const Centered = styled.div`
  text-align: center;
`

const PriceGroup = styled.div`
  margin: 3rem auto 0;
  text-align: center;
  width: 50%;
  padding: 0.5rem 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.7));

  p {
    text-align: center !important;
    margin: 0 auto
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContactButton = styled.button`
  text-align: center;
  border-radius: 50px;
  font-weight: 500;
  font-size: 14px;
  padding: 8px 6px;
  color: ${themeGet('colors.black')};
  background-color: ${themeGet('colors.green')};
  transition: all 300ms ease-in-out;

  .btn-icon {
    margin-left: 4px;
  }

  //@media (max-width: 1023px) {
  //  padding: 20px 22px;
  //}
  //@media (max-width: 767px) {
  //  padding: 17px 18px;
  //  font-size: 16px;
  //}

  &:hover {
    background-color: ${themeGet('colors.green')} !important;
    filter: saturate(1.4);
  }
`

const CallToAction = () => {
  return (
    <Section id="">
      <BGImage>
        <SectionHeading>
          <Heading content="O MELHOR INVESTIMENTO QUE VOCÊ PODE FAZER"/>
          <Text color="white">
            O que você vai aprender nesta Masterclass te fará economizar tempo, evitar erros comuns e, claro, evitar que
            você invista seu dinheiro de forma errada ou até no lugar errado!
          </Text>

          <Text as="h4">
            Você vai economizar tempo, erros e, principalmente, dinheiro.
          </Text>

          <Text color="white">
            Pior do que investir errado é levar prejuízo. Por isso é importante seguir a metodologia e os passos de quem
            sabe o que está fazendo!
          </Text>

          <Text as="h3">
            O valor dessa Masterclass <b>será R$ 197</b>, <br/>mas para essa primeira turma, o valor será <u>R$ 97 + o
            Encontro Presencial (Bônus)</u>
          </Text>

          <Text as="h3" mt={8}>
            RESERVE SUA VAGA NA MASTERCLASS <br/> EXCLUSIVA DIA {Constants.EventDates.Day},
            ÀS {Constants.EventDates.Time} HORAS
          </Text>


          <PriceGroup>
            <Text color="white">POR APENAS</Text>
            <Text as="h1" color="#a9fd00 !important">R$ 97</Text>
          </PriceGroup>
        </SectionHeading>
        <Centered>
          <HydratedCTAButton/>
        </Centered>

        <SectionHeading style={{marginTop: "12rem", padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)"}}>
          <Heading content="QUALQUER DÚVIDA, ENTRE EM CONTATO" style={{fontSize: "22px"}}/>
          <Link href={`https://wa.me/5511916360102?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a MasterClass.")}`} target="_blank">
            <ContactButton type="button">FALAR COM ESPECIALISTA</ContactButton>
            {/*<Image src={WhatsAppLogo} width={48} alt="Fala consosco via Whatsapp"/>*/}
          </Link>
        </SectionHeading>
      </BGImage>
    </Section>
  );
};

export default CallToAction;
