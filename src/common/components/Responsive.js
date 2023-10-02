import styled from "styled-components";

export const OnMobile = styled.div`
  @media (min-width: 767px) {
    display: none;
  }
`
export const OnDesktop = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`
