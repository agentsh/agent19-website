import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {HeaderImage, HeaderImageContainer, MainSection, Main} from './DefaultPage';
import ContentBlock from './ContentBlock';
import Footer from '../components/Footer.js';
import Page from '../components/Page.js';
import Schedule from './Schedule';

const Section = styled.div`
    margin: 0 auto;
    width: 90%;
`;

export default class SchedulePage extends React.PureComponent {
    static propTypes = {
        headerImage: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        title2: PropTypes.string.isRequired,
        seo: PropTypes.object.isRequired,
        contentBlocks: PropTypes.array.isRequired,
        speakers: PropTypes.array.isRequired,
    };

    render() {
        const {contentBlocks, speakers} = this.props;
        return (
            <Page {...this.props}>
                <HeaderImageContainer>
                    <HeaderImage image={this.props.headerImage}>
                        <h1>{this.props.title}</h1>
                    </HeaderImage>
                </HeaderImageContainer>
                <Section>
                    <Schedule speakers={speakers} />
                </Section>
                <Main>
                    <MainSection>
                        {contentBlocks &&
                            contentBlocks.length > 0 &&
                            contentBlocks.map((block, idx) => <ContentBlock key={idx} index={idx} {...block} />)}
                    </MainSection>
                </Main>
                <Footer />
            </Page>
        );
    }
}
