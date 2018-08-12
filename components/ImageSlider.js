import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import Icon from './Icon';
const Slide = styled.div`
  img {
    width: 100%;
    filter: grayscale(1);
  }
`;
const propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

const NextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className + ' image-slider'}
            style={style}
            onClick={onClick}>
            <Icon name="iconRight" />
        </div>
    );
};
NextArrow.propTypes = propTypes;

const PrevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className + ' image-slider'}
            style={style}
            onClick={onClick}>
            <Icon name="iconLeft" />
        </div>
    );
};
PrevArrow.propTypes = propTypes;

export default class ImageSlider extends React.PureComponent {
    state = {
        currentSlide: 0,
    };

    static propTypes = {
        images: PropTypes.array.isRequired,
    };

    _sliderSettings = () => ({
        dots: false,
        speed: 300,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    });

    render() {
        const { images } = this.props;
        const slides = images.map((img, idx) => {
            return (
                <Slide key={idx}>
                    <img src={img.imageInfo.medium} alt={img.imageInfo.alt} />
                </Slide>
            );
        });

        return (
            <Slider {...this._sliderSettings()} pre>
                {slides}
            </Slider>
        );
    }
}
