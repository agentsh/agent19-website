import PropTypes from 'prop-types';
import React from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';
import EyeCatcher from '../components/EyeCatcher';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Icon from '../components/Icon';
import Page from '../components/Page';
import Sponsors from '../components/Sponsors';
import SlideBackground from '../components/index/SlideBackground';
import SlideTitle from '../components/index/SlideTitle';
import SpeakerSlider from '../components/SpeakerSlider';
import Tickets from '../components/Tickets';
import VideoPlayer from '../components/VideoPlayer';
import VideoTrigger from '../components/VideoTrigger';
import config from '../config';

const maxProgress = 100;

const SlideContainerWrapper = styled.div`height: ${props => props.height}px;`;

const IndexContainer = styled.div`
    h2 {
        font-size: 48px;
        font-family: Teko;
        font-weight: 100;
        line-height: 54px;
        color: white;
        text-transform: uppercase;
    }
`;

const SlideContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    background-color: ${props => ('color' in props ? props.color : '#fff')};

    h2 {
        color: black;
    }
`;

const MountainCloud = styled.img`
    position: fixed;
    will-change: transform, opacity;
`;

const VideoImageContainer = styled.figure`
    display: flex;
    align-items: center;
    position: relative;
    height: ${props => props.height}px;
    margin-top: -${props => props.height}px;
    @media (min-width: 800px) {
        height: ${props => props.height - 120}px;
        padding: 60px;
    }
`;

const VideoSlideImageContainer = styled.figure`
    height: 100%;
    @media (min-width: 800px) {
        height: calc(100% - ${props => props.margin * 2}px);
        width: calc(100% - ${props => props.margin * 2}px);
        margin: ${props => props.margin}px;
    }
    background-color: #fff;
    overflow: hidden;
    will-change: height, width, margin;
    position: relative;
`;

const videoImageGradient = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))';

const VideoImage = styled.div`
    height: 100%;
    width: 100%;
    ${props => (props.opacity ? 'opacity: ' + props.opacity : '')};

    background-image: ${videoImageGradient}, url(${props => props.image['small']});
    background-position: right;
    background-size: cover;

    @media (min-width: 1000px) {
        background-image: ${videoImageGradient}, url(${props => props.image['medium']});
        background-position: center;
    }
    @media (min-width: 2000px) {
        background-image: ${videoImageGradient}, url(${props => props.image['large']});
    }
    position: relative;
    will-change: opacity;
`;

const VideoText = styled.div`
    display: flex;
    align-items: center;
    position: ${props => (props.absolute ? 'absolute' : 'fixed')};
    top: 0;
    bottom: 0;
    left: 5%;
    width: 300px;
    z-index: 10;
    color: #ffffff;
    font-family: Teko;

    text-transform: uppercase;
    font-size: 50px;
    line-height: 50px;
    @media (min-width: 800px) {
        left: 15%;
        width: 380px;
        font-size: 64px;
        line-height: 64px;
    }
`;

const CfpHeader = styled.h2`
    font-family: Teko;
    font-size: 36px;
    font-weight: 100;
    line-height: 51px;
    text-transform: uppercase;
`;

const CfpHeaderClosed = styled.h2`
    font-family: Teko;
    font-size: 18px;
    line-height: 50px;
    white-space: nowrap;
    text-transform: uppercase;
    text-align: center;
`;

const CfpDeadline = styled.div`color: #d9d9d9;`;

const CfpSubmit = styled.a`
    margin-top: 30px;

    color: #ffffff;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 26px;
    text-decoration: none;

    > span:first-child {
        margin-right: 15px;
        text-decoration: underline;
    }

    > span:last-child {
        font-size: 10px;
    }
`;

class MountainCloudContainer extends React.Component {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        left: PropTypes.number,
        top: PropTypes.number,
    };

    render() {
        return (
            <MountainCloud
                src={this.props.image}
                style={{
                    top: this.props.top + 'px',
                    left: this.props.left + 'px',
                    transform: 'scale(' + (1 + this.props.animationProgress / 50) + ')',
                    opacity: 1 - this.props.animationProgress / 100,
                }} />
        );
    }
}

class MountainSlide extends React.PureComponent {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        image: PropTypes.object.isRequired,
    };

    slideCount = 4;
    progressStep = maxProgress / this.slideCount;

    render() {
        let slide = null;

        if (this.props.animationProgress > 3 * this.progressStep) {
            // empty slide for transition of background images
        } else if (this.props.animationProgress > 2 * this.progressStep) {
            slide = (
                <SlideTitle animationProgress={this.props.animationProgress} progressStep={this.progressStep}>
                    <h2>Learn, talk and ski</h2>
                </SlideTitle>
            );
        } else if (this.props.animationProgress > this.progressStep) {
            slide = (
                <SlideTitle animationProgress={this.props.animationProgress} progressStep={this.progressStep}>
                    <h3>25 - 28 January 2018</h3>
                    <h2>
                        Experts and industry leaders come together to showcase their work in ReactJS, React Native
                        and more
                    </h2>
                </SlideTitle>
            );
        } else {
            slide = (
                <SlideTitle
                    animationProgress={this.props.animationProgress}
                    progressStep={this.progressStep}
                    fadeIn={false}>
                    <h3>The international event for coding inspiration</h3>
                    <h1>AgentConf 2018</h1>
                </SlideTitle>
            );
        }

        return (
            <SlideContainer>
                <SlideBackground
                    animationProgress={this.props.animationProgress}
                    animationSplit={90}
                    startOpacity={0.4}
                    topOpacity={0.7}
                    image={this.props.image} />
                <MountainCloudContainer
                    animationProgress={this.props.animationProgress}
                    image="static/cloud1.png"
                    top={-366}
                    left={-65} />
                <MountainCloudContainer
                    animationProgress={this.props.animationProgress}
                    image="static/cloud2.png"
                    top={299} />
                <MountainCloudContainer
                    animationProgress={this.props.animationProgress}
                    image="static/cloud3.png"
                    left={-284} />
                {slide}
            </SlideContainer>
        );
    }
}

class CitySlide extends React.PureComponent {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        image: PropTypes.object.isRequired,
    };

    maxProgress = 100;
    slideCount = 3;
    progressStep = this.maxProgress / this.slideCount;

    render() {
        let slideTitleContainer = null;

        if (this.props.animationProgress > 2 * this.progressStep) {
            // empty slide
        } else if (this.props.animationProgress > this.progressStep) {
            slideTitleContainer = (
                <SlideTitle animationProgress={this.props.animationProgress} progressStep={this.progressStep}>
                    <h2>Dornbirn, Austria</h2>
                </SlideTitle>
            );
        } else {
            // empty slide
        }

        return (
            <SlideContainer>
                <SlideBackground
                    animationProgress={this.props.animationProgress}
                    animationSplit={50}
                    startOpacity={0.0}
                    topOpacity={0.5}
                    image={this.props.image} />
                {slideTitleContainer}
            </SlideContainer>
        );
    }
}

class VideoSlide extends React.PureComponent {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        image: PropTypes.object.isRequired,
        videoHeadline: PropTypes.string.isRequired,
        startVideo: PropTypes.func.isRequired,
    };

    render() {
        const opacity = (this.props.animationProgress + 1) / 50;
        return (
            <SlideContainer color="transparent">
                <VideoSlideImageContainer margin={60 * (this.props.animationProgress - 50) / 50}>
                    <VideoText absolute={false}>
                        {this.props.videoHeadline}
                    </VideoText>
                    <VideoTrigger absolute={false} handleClick={this.props.startVideo} opacity={opacity} />
                    <VideoImage image={this.props.image} opacity={opacity} />
                </VideoSlideImageContainer>
            </SlideContainer>
        );
    }
}

export default class Index extends React.PureComponent {
    state = {
        windowHeight: 0,
        scrollY: 0,
        showVideoPlayer: false,
    };

    static propTypes = {
        animationBackground1: PropTypes.object.isRequired,
        animationBackground2: PropTypes.object.isRequired,
        videoTeaserImage: PropTypes.object.isRequired,
        videoYoutubeId: PropTypes.string.isRequired,
        videoHeadline: PropTypes.string.isRequired,
        seo: PropTypes.object.isRequired,
        cfpDeadline: PropTypes.string.isRequired,
        speakers: PropTypes.array.isRequired,
        scrollSpeed: PropTypes.number.isRequired,
        mainSponsorLogo: PropTypes.string,
        mainSponsorWebsite: PropTypes.string,
        sponsors: PropTypes.array,
        partners: PropTypes.array,
    };

    mountainSlideScrollDividend = 50;
    citySlideScrollDividend = 30;
    videoSlideScrollDividend = 10;

    static async getInitialProps(ctx) {
        const {req} = ctx;
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
        const response = await fetch(config.baseUrl + '/.json');
        const json = await response.json();
        json.scrollSpeed = 1;
        if (userAgent && userAgent.toLowerCase().match(/(ipad|iphone|ipod|android)/g)) {
            json.scrollSpeed = 1.5;
        }
        return json;
    }

    componentDidMount() {
        this.updateWindowHeight();
        this.updateScrollY();
        window.addEventListener('resize', this.updateWindowHeight);
        window.addEventListener('scroll', this.updateScrollY);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowHeight);
        window.removeEventListener('scroll', this.updateScrollY);
    }

    render() {
        const mountainSlideHeight = maxProgress * this.mountainSlideScrollDividend;
        const citySlideHeight = maxProgress * this.citySlideScrollDividend;
        const videoSlideHeight = maxProgress * this.videoSlideScrollDividend;

        let mountainSlide = null;
        let citySlide = null;
        let videoSlide = null;
        let videoImageContainer = null;

        if (this.state.scrollY < mountainSlideHeight) {
            mountainSlide = (
                <MountainSlide
                    animationProgress={this.state.scrollY / this.mountainSlideScrollDividend}
                    image={this.props.animationBackground1} />
            );
        } else if (this.state.scrollY < mountainSlideHeight + citySlideHeight) {
            citySlide = (
                <CitySlide
                    animationProgress={(this.state.scrollY - mountainSlideHeight) / this.citySlideScrollDividend}
                    image={this.props.animationBackground2} />
            );
        } else if (this.state.scrollY < mountainSlideHeight + citySlideHeight + videoSlideHeight) {
            videoSlide = (
                <VideoSlide
                    animationProgress={
                        (this.state.scrollY - mountainSlideHeight - citySlideHeight) / this.videoSlideScrollDividend
                    }
                    image={this.props.videoTeaserImage}
                    videoHeadline={this.props.videoHeadline}
                    startVideo={this.toggleVideoPlayer} />
            );
        } else {
            videoImageContainer = (
                <VideoImageContainer height={this.state.windowHeight}>
                    <VideoTrigger absolute={true} handleClick={this.toggleVideoPlayer} />
                    <VideoText absolute={true}>
                        {this.props.videoHeadline}
                    </VideoText>
                    <VideoImage image={this.props.videoTeaserImage} />
                </VideoImageContainer>
            );
        }

        return (
            <IndexContainer>
                <Head {...this.props.seo} />
                <Page hideHeader={this.state.showVideoPlayer} showScrollInfo={this.state.scrollY < 500}>
                    <SlideContainerWrapper height={mountainSlideHeight / this.props.scrollSpeed}>
                        {mountainSlide}
                    </SlideContainerWrapper>
                    <SlideContainerWrapper height={citySlideHeight / this.props.scrollSpeed}>
                        {citySlide}
                    </SlideContainerWrapper>
                    <SlideContainerWrapper height={videoSlideHeight / this.props.scrollSpeed + this.state.windowHeight}>
                        {videoSlide}
                    </SlideContainerWrapper>
                    {videoImageContainer}
                    {this.props.speakers && <SpeakerSlider speakers={this.props.speakers} />}
                    <Tickets {...this.props} />
                    <Sponsors
                        mainSponsor={{
                            logo: this.props.mainSponsorLogo,
                            website: this.props.mainSponsorWebsite,
                        }}
                        sponsors={this.props.sponsors}
                        partners={this.props.partners} />
                    <Footer />
                    <VideoPlayer
                        visible={this.state.showVideoPlayer}
                        youtubeId={this.props.videoYoutubeId}
                        handleClose={this.toggleVideoPlayer} />
                    {new Date(this.props.cfpDeadline).getTime() > new Date().getTime() &&
                        <EyeCatcher>
                            {this.renderEyecatcher}
                        </EyeCatcher>}
                </Page>
            </IndexContainer>
        );
    }

    renderEyecatcher = isOpen => {
        if (isOpen) {
            const deadline = new Date(this.props.cfpDeadline);
            return (
                <div>
                    <CfpHeader>Call for Papers</CfpHeader>
                    <CfpDeadline>
                        Deadline: {deadline.toDateString()}, 23:59:59 CEST
                    </CfpDeadline>
                    <CfpSubmit href="https://www.papercall.io/agent-conf-2018">
                        <span>Submit Here</span>
                        <Icon name="forward" />
                    </CfpSubmit>
                </div>
            );
        } else {
            return <CfpHeaderClosed>Call for Papers</CfpHeaderClosed>;
        }
    };

    updateWindowHeight = () => {
        this.setState({windowHeight: window.innerHeight});
    };

    updateScrollY = () => {
        this.setState({scrollY: window.scrollY * this.props.scrollSpeed});
    };
    toggleVideoPlayer = () => {
        this.setState({showVideoPlayer: !this.state.showVideoPlayer});
    };
}
