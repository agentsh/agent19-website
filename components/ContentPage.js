import PropTypes from 'prop-types';
import React from 'react';
import Circle from './Circle';

import {
    HeaderImage,
    HeaderImageContainer,
    HeaderSection,
    Main,
    MainSection,
} from './DefaultPage';
import ContentBlock from './ContentBlock';
import Footer from '../components/Footer.js';
import Page from '../components/Page.js';

export default class ContentPage extends React.PureComponent {
    static propTypes = {
        headerImage: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        title2: PropTypes.string.isRequired,
        seo: PropTypes.object.isRequired,
        contentBlocks: PropTypes.array.isRequired,
    };

    state = {
        windowHeight: 0,
        windowWidth: 0,
    };

    componentDidMount() {
        this.updateWindowDimensions();
    }

    updateWindowDimensions = () => {
        this.setState({windowHeight: document.body.scrollHeight, windowWidth: window.innerWidth});
    };

    render() {
        const { contentBlocks } = this.props;
        const {windowHeight} = this.state;
        const circleCount = windowHeight ? Math.floor((windowHeight - 900) / 1300) : 1;

        return (
            <Page {...this.props}>
                <HeaderImageContainer>
                    <HeaderImage image={this.props.headerImage}>
                        <h1>{this.props.title}</h1>
                    </HeaderImage>
                </HeaderImageContainer>
                {[...Array(circleCount)].map((element, index) => (
                    <Circle
                        key={index}
                        left={index % 2 === 0 ? 100 : this.state.windowWidth - 750}
                        top={900 + 1300 * index} />
                ))}
                <Main>
                    <HeaderSection>
                        <h2>{this.props.title2}</h2>
                    </HeaderSection>
                    <MainSection>
                        {contentBlocks && contentBlocks.length > 0 &&
                            contentBlocks.map((block, idx) => (
                                <ContentBlock key={idx} index={idx} {...block} />
                            ))
                        }
                    </MainSection>
                </Main>
                <Footer />
            </Page>
        );
    }
}
