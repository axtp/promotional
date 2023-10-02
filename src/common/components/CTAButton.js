import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';
import Button from "./Button";
import Link from "next/link";
import { Icon } from 'react-icons-kit';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';

export const CTAButton = styled(Button)`
  text-align: center;
  border-radius: 50px;
  margin-top: 40px;
  font-weight: 500;
  font-size: 20px;
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
    font-size: 16px;
  }

  &:hover {
    background-color: ${themeGet('colors.primaryHover')};
  }
`

export const HydratedCTAButton = () => {
  return (
    <Link href="https://pay.hotmart.com/Y86635243A" target="_blank">
      <CTAButton title="Quero Reservar Minha Vaga" icon={<Icon icon={arrowRight2}/>} iconPosition="right"/>
    </Link>
  )
}
