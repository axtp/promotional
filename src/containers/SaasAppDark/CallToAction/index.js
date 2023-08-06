import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import { Icon } from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import Section, { BGImage, SectionHeading } from './cta.style';
import {Constants} from "../../../constants";
import styled from "styled-components";

const PriceGroup = styled.div`
  margin: 3rem auto 0;
  text-align: center;
  width: 50%;
  padding: 0.5rem 0;
  background: rgba(0,0,0,0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  filter: drop-shadow(0px 4px 10px rgba(0,0,0,0.7));
  p {
    text-align: center !important;
    margin: 0 auto
  }
`

const VideoIntro = () => {
  return (
    <Section id="">
      <BGImage>
        <SectionHeading>
          <Heading content="O MELHOR INVESTIMENTO QUE VOCÊ PODE FAZER" />
          <Text>
            O que você vai aprender nesta Masterclass te fará economizar tempo, evitar erros comuns e, claro, evitar que você invista seu dinheiro de forma errada ou até no lugar errado!
          </Text>

          <Text as="h4">
            Você vai economizar tempo, erros e, principalmente, dinheiro.
          </Text>

          <Text>
            Pior do que investir errado é levar prejuízo. Por isso é importante seguir a metodologia e os passos de quem sabe o que está fazendo!
          </Text>

          <Text as="h5">
            O valor dessa Masterclass <b>será R$ 197</b>, mas para essa primeira turma, o valor será <u>R$ 97 + o Encontro Presencial (Bônus)</u>
          </Text>

          <Text as="h3">
            RESERVE SUA VAGA NA MASTERCLASS EXCLUSIVA DIA {Constants.EventDates.Day}, ÀS {Constants.EventDates.Time} HORAS
          </Text>


          <PriceGroup>
            <Text>POR APENAS</Text>
            <Text as="h1">R$ 97</Text>
          </PriceGroup>


          <Button title="Quero Reserver Minha Vaga" icon={<Icon icon={arrowRight2} />} iconPosition="right" />
        </SectionHeading>
      </BGImage>
    </Section>
  );
};

export default VideoIntro;
