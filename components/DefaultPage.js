import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Page from '../components/Page.js';
import Footer from '../components/Footer.js';

export const HeaderImageContainer = styled.div`
    height: 100vh;

    @media (min-width: 800px) {
        height: calc(100vh - 120px);
        width: calc(100vw - 120px);
        margin: 60px;
    }
`;
const headerImageGradient = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))';

export const HeaderImage = styled.div`
    position: relative;
    z-index: 1;
    height: 100%;
    max-width: 100vw;
    background-image: ${headerImageGradient}, url(${props => props.image['small']});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;

    @media (min-width: 1000px) {
        background-image: ${headerImageGradient}, url(${props => props.image['medium']});
    }

    @media (min-width: 2000px) {
        background-image: ${headerImageGradient}, url(${props => props.image['large']});
        margin: 60px 60px 0 60px;
    }

    h1 {
        margin-left: 15%;
        width: 352px;
        max-width: 85%;
        color: #ffffff;
        font-family: Teko;
        font-size: 64px;
        line-height: 64px;
        text-transform: uppercase;
    }
`;

export const Main = styled.main`
    display: flex;
    margin: 150px auto;
    width: 1200px;
    max-width: 90%;
    position: relative;
    z-index: 1;
    flex-direction: column;
    color: #fff;

    @media (max-width: 550px) {
        max-width: 100%;
    }
    @media (min-width: 1000px) {
        flex-direction: row;
    }

    h1,
    h2,
    h3,
    h4 {
        font-weight: 100;
        font-family: Teko;
        font-size: 28px;
        line-height: 40px;
        text-transform: uppercase;
        margin: 15px 0 30px 0;
    }

    p {
        color: #fff;
        font-size: 16px;
        line-height: 30px;
        padding-bottom: 30px;
    }

    a,
    a:hover {
        color: #fff;
        text-decoration: none;
        font-family: Teko;
        font-size: 22px;
    }
`;

export const HeaderSection = styled.section`
    width: 100%;
    padding-left: 5%;
    @media (min-width: 1000px) {
        width: 320px;
        padding-left: 0;
        padding-right: 70px;
    }
    h2 {
        font-weight: 100;
        font-family: Teko;
        font-size: 48px;
        line-height: 54px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
`;

export const MainSection = styled.section`
    flex-direction: column;
    margin: 0 20px;

    @media (min-width: 1000px) {
        margin: 0px 60px;
        display: flex;
        max-width: calc(90% - 320px);
        flex: 1;

        p {
            padding-right: 40px;
        }
    }
`;

export default class DefaultPage extends React.PureComponent {
    static propTypes = {
        headerImage: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        article: PropTypes.string.isRequired,
        title2: PropTypes.string.isRequired,
        seo: PropTypes.object.isRequired,
    };

    render() {
        return (
            <Page {...this.props}>
                <HeaderImageContainer>
                    <HeaderImage image={this.props.headerImage}>
                        <h1>{this.props.title}</h1>
                    </HeaderImage>
                </HeaderImageContainer>
                <Main>
                    <HeaderSection>
                        <h2>{this.props.title2}</h2>
                    </HeaderSection>
                    <MainSection dangerouslySetInnerHTML={{__html: this.props.article}} />
                </Main>
                <Footer />
            </Page>
        );
    }
}
