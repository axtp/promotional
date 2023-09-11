import Heading from 'common/components/Heading'
import Image from 'common/components/Image'
import Text from 'common/components/Text'
import Container from 'common/components/UI/Container'
import {testimonials} from 'common/data/SaasAppDark'
import Section, {
  AuthorInfo, Figure,
  Item, PlayButton,
  ReactSlick,
  SectionHeading,
} from './testimonials.style'
import styled from "styled-components";

const settings = {
  infinite: true,
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

const VideoButton = styled(PlayButton)`
  left: 30%;
  bottom: 10%;
  opacity: 0.8;

  @media (max-width: 600px) {
    left: 40%;
    flex-direction: column;
    align-items: center;
  }
`
const Testimonials = () => {
  return (
    <Section id='testimonials'>
      <Container width='1300px'>
        <SectionHeading>
          <Text as='span'>Os Especialistas</Text>
          <Heading content='Conheça um pouco dos especialistas que estarão nesta Masterclass'/>
        </SectionHeading>
        <ReactSlick {...settings}>
          {testimonials.map((testimonial) => (
            <Item key={testimonial.id}>
              <Quote>
                <PersonContainer>
                  <PersonImage src={testimonial.logo?.src} alt='logo'></PersonImage>
                </PersonContainer>
                <Text as='blockquote'>
                  {testimonial.quote}
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

export default Testimonials
