import ResetCSS from 'common/assets/css/style';
import {theme} from 'common/theme/saasAppDark';
import Banner from 'containers/SaasAppDark/Banner';
import CallToAction from 'containers/SaasAppDark/CallToAction';
import Footer from 'containers/SaasAppDark/Footer';
import HowItWorks from 'containers/SaasAppDark/HowItWorks';
import {ContentWrapper, GlobalStyle} from 'containers/SaasAppDark/saasAppDark.style';
import Experts from 'containers/SaasAppDark/Testimonials';
import VideoIntro from 'containers/SaasAppDark/VideoIntro';
import Head from 'next/head';
import React, {Fragment} from 'react';
import {ThemeProvider} from 'styled-components';
import {StickyLogo} from "../common/components/StickyLogo";
import {Constants} from "../constants";
import Important from "../containers/SaasAppDark/ImportantSection";
import ClassContent from "../containers/SaasAppDark/ClassContent";
import Audience from "../containers/SaasAppDark/Audience";


const Url = "https://masterclass.axtp.com.br"
const ImageUrl = `${Url}/seo_image.jpg`
const Title = "AXT PropTech | MasterClass 2023"
const Description = `MASTERCLASS - IMÓVEIS NOS ESTADOS UNIDOS - Descubra como construir patrimônio e renda com imóveis nos Estados Unidos. ${Constants.EventDates.Day} as ${Constants.EventDates.Time} horas`
const SaasAppDark = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>{Title}</title>
          <meta name="Description" content={Description}/>
          <meta name="theme-color" content="#ec5555"/>

          <title>{Title}</title>
          <meta name="title" content={Title}/>
          <meta name="description" content={Description}/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content={Url}/>
          <meta property="og:title" content={Title}/>
          <meta property="og:description" content={Description}/>
          <meta property="og:image" content={ImageUrl}/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content={Url}/>
          <meta property="twitter:title" content={Title}/>
          <meta property="twitter:description" content={Description}/>
          <meta property="twitter:image" content={ImageUrl}/>

        </Head>

        <ResetCSS/>
        <GlobalStyle/>

        <ContentWrapper>
          <StickyLogo/>
          <Banner/>
          <VideoIntro/>
          <ClassContent/>
          <Important/>
          <Audience />
          {/*<Clients/>*/}
          {/*<StatsCounter/>*/}
          {/*<Services/>*/}
          <Experts/>
          <HowItWorks/>
          {/*<NewsFeed/>*/}
          <CallToAction/>
          {/*<AppDownload/>*/}
          <Footer/>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasAppDark;
