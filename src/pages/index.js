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
import { ThemeProvider } from 'styled-components';

const SaasAppDark = () => {
	return (
		<ThemeProvider theme={theme}>
			<Fragment>
				<Head>
					<title>AXT PropTech | MasterClass 2023</title>
					<meta name="Description" content="AXT PropTech MasterClass 2023. Aprenda sobre formas de investimentos alternativas" />
					<meta name="theme-color" content="#ec5555" />
					{/* Load google fonts */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
						rel="stylesheet"
					/>

					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=DM+Sans:wght@400&family=Inter:wght@400;500;600&family=Manrope:wght@700&family=Noto+Serif+KR:wght@700;900&display=swap"
					/>
				</Head>

				<ResetCSS />
				<GlobalStyle />

				<ContentWrapper>
					{/*<Sticky top={0} innerZ={200} activeClass="sticky-nav-active">*/}
					{/*	<DrawerProvider>*/}
					{/*		<Navbar />*/}
					{/*	</DrawerProvider>*/}
					{/*</Sticky>*/}
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
