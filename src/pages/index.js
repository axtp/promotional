import ResetCSS from 'common/assets/css/style';
import {theme} from 'common/theme/saasAppDark';
import AppDownload from 'containers/SaasAppDark/AppDownload';
import Banner from 'containers/SaasAppDark/Banner';
import CallToAction from 'containers/SaasAppDark/CallToAction';
import Clients from 'containers/SaasAppDark/Clients';
import Footer from 'containers/SaasAppDark/Footer';
import HowItWorks from 'containers/SaasAppDark/HowItWorks';
import NewsFeed from 'containers/SaasAppDark/NewsFeed';
import {ContentWrapper, GlobalStyle} from 'containers/SaasAppDark/saasAppDark.style';
import Services from 'containers/SaasAppDark/Services';
import StatsCounter from 'containers/SaasAppDark/StatsCounter';
import Testimonials from 'containers/SaasAppDark/Testimonials';
import VideoIntro from 'containers/SaasAppDark/VideoIntro';
import Head from 'next/head';
import React, {Fragment} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {StickyLogo} from "../common/components/StickyLogo";
import {Constants} from "../constants";


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
          <Clients/>
          <Services/>
          {/*<StatsCounter/>*/}
          <VideoIntro/>
          <Testimonials/>
          <HowItWorks/>
          {/*<NewsFeed/>*/}
          {/*<CallToAction/>*/}
          {/*<AppDownload/>*/}
          <Footer/>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasAppDark;
