import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import Text from 'common/components/Text'
import Container from 'common/components/UI/Container'
import {testimonials} from 'common/data/SaasAppDark'
import Section, {
  AuthorInfo, Item, ReactSlick,
  SectionHeading,
} from './testimonials.style'
import styled from "styled-components";
import {useEffect, useRef} from "react";

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const PersonContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 140px;
  margin: 0 auto;
`

const PersonImage = styled(Image)`
  position: relative;
  margin: 0 auto;
  max-height: 200px;
  border-radius: 4px;
`

const Quote = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  gap: 1rem;
  @media (max-width: 600px) {
    text-align: justify;
    flex-direction: column;
    align-items: center;
  }
`

const Experts = () => {

  const sliderRef = useRef();

  useEffect(() => {

    if(sliderRef.current){
      sliderRef.current.slickPlay()
    }

  }, [sliderRef])

  return (
    <Section id='experts'>
      <Container width='1300px'>
        <SectionHeading>
          <Text as='span'>Os Especialistas</Text>
          <Heading content='Conheça um pouco dos especialistas que estarão nesta Masterclass'/>
        </SectionHeading>
        <ReactSlick ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <Item key={testimonial.id}>
              <Quote>
                <PersonContainer>
                  <PersonImage src={testimonial.logo?.src} alt='logo'></PersonImage>
                </PersonContainer>
                <Text as='p'>
                  {testimonial.bio()}
                </Text>
              </Quote>
              <AuthorInfo>
                <Heading as='h4' content={testimonial.author}/>

                <Text>{testimonial.designation}</Text>
              </AuthorInfo>
            </Item>
          ))}
        </ReactSlick>
      </Container>

    </Section>
  )
}

export default Experts
