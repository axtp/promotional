import ResetCSS from 'common/assets/css/style';
import { theme } from 'common/theme/saasAppDark';
import AppDownload from 'containers/SaasAppDark/AppDownload';
import Banner from 'containers/SaasAppDark/Banner';
import CallToAction from 'containers/SaasAppDark/CallToAction';
import Clients from 'containers/SaasAppDark/Clients';
import Footer from 'containers/SaasAppDark/Footer';
import Monitoring from 'containers/SaasAppDark/Monitoring';
import NewsFeed from 'containers/SaasAppDark/NewsFeed';
import { ContentWrapper, GlobalStyle } from 'containers/SaasAppDark/saasAppDark.style';
import Services from 'containers/SaasAppDark/Services';
import StatsCounter from 'containers/SaasAppDark/StatsCounter';
import Testimonials from 'containers/SaasAppDark/Testimonials';
import VideoIntro from 'containers/SaasAppDark/VideoIntro';
import Head from 'next/head';
import React, { Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {StickyLogo} from "../common/components/StickyLogo";




const SaasAppDark = () => {
	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<Head>
					<title>AXT PropTech | MasterClass 2023</title>
					<meta name="Description" content="AXT PropTech MasterClass 2023. Aprenda sobre formas de investimentos alternativas" />
					<meta name="theme-color" content="#ec5555" />
				</Head>

				<ResetCSS />
				<GlobalStyle />

				<ContentWrapper>
					{/*<Sticky top={0} innerZ={200} activeClass="sticky-nav-active">*/}
					{/*	<DrawerProvider>*/}
					{/*		<Navbar />*/}
					{/*	</DrawerProvider>*/}
					{/*</Sticky>*/}
					<StickyLogo />
					<Banner />
					<Clients />
					<Services />
					<Monitoring />
					<StatsCounter />
					<VideoIntro />
					<Testimonials />
					<CallToAction />
					<NewsFeed />
					<AppDownload />
					<Footer />
				</ContentWrapper>
			</Fragment>
		</ThemeProvider>
	);
};
export default SaasAppDark;
