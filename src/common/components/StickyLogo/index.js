import Link from "next/link";
import Image from 'next/image';
import AxtLogo from '../../assets/image/axt_logo.svg'
import WhatsAppLogo from '../../assets/image/saasAppDark/icons/icons8-whatsapp-96.svg'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
  width: 200px;
  gap: 0 1rem;
  min-width: 200px;
  @media (max-width: 480px) {
    width: 80px
  }
  
  a {
    transition: opacity ease-in-out 300ms;
    opacity: 0.8;
    &:hover {
      opacity: 1.0;
    }
  }
`

export const StickyLogo = () => {
  return (

    <Container>
    <Link href="https://axtp.com.br" target="_blank">
      <Image src={AxtLogo} width={128} alt="AXT Proptech Company S/A"/>
    </Link>
    <Link href={`https://wa.me/5511916360102?text=${encodeURIComponent("Olá, gostaria de saber mais sobre a MasterClass.")}`} target="_blank">
      <Image src={WhatsAppLogo} width={48} alt="Fala consosco via Whatsapp"/>
    </Link>
    </Container>
  )
}
