import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import ImageSlider from './ImageSlider';

const ImageBackground = styled.div`
    height: 250px;
    width: 250px;
    display: block;
    background: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(1);

    div {
        position: absolute;
        bottom: 20px;
        left: 40px;
    }
`;

const ContentWrapper = styled.div`
    flex: ${props => (props.double ? 3 : 1)};
    display: flex;
    align-items: center;
    position:relative;
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;

    a, a:hover {
        text-decoration: underline;
        font-size: 16px;
        font-family: 'Open Sans';
    }

    @media (min-width: 800px) {
        flex-direction: ${props => (props.col ? 'column' : 'row')};
    }
`;
const SliderContainer = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    margin-bottom: 35px;
    margin-top: 35px;

    * {
        min-height: 0;
        min-width: 0;
    }
`;

export default class ContentBlock extends React.PureComponent {
    static propTypes = {
        images: PropTypes.array,
        imagePosition: PropTypes.string,
        imageDescription: PropTypes.string,
        article: PropTypes.string,
        index: PropTypes.number.isRequired,
    };
    static defaultProps = {
        images: [],
    };

    _renderImages = (images, imageDescription) => {
        if (images && images.length === 1) {
            return (
                <ContentWrapper>
                    <ImageBackground image={images[0].imageInfo.medium}>
                        <div dangerouslySetInnerHTML={{ __html: imageDescription }} />
                    </ImageBackground>
                </ContentWrapper>
            );
        }
        if (images && images.length > 1) {
            return (
                <ContentWrapper>
                    <SliderContainer>
                        <ImageSlider images={images} />
                    </SliderContainer>
                </ContentWrapper>
            );
        }
    };

    render() {
        const {
      article,
      images,
      imagePosition,
      imageDescription,
    } = this.props;

        if (!article && images) {
            return <Wrapper>{this._renderImages(images, imageDescription)}</Wrapper>;
        }

        return (
            <Wrapper col={images.length > 1}>
                {imagePosition === 'left' &&
                    this._renderImages(images, imageDescription)}
                <ContentWrapper double={images.length === 1}>
                    <div dangerouslySetInnerHTML={{ __html: article }} />
                </ContentWrapper>
                {imagePosition === 'right' &&
                    this._renderImages(images, imageDescription)}
            </Wrapper>
        );
    }
}
