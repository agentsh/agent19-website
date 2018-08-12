import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

import Icon from './Icon';
import SpeakerSlide from './SpeakerSlide';
import styled from 'styled-components';

const Container = styled.div`margin-bottom: 40px;`;
const Headline = styled.h2`
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 30px;
    @media (min-width: 800px) {
        margin-left: 15%;
        width: 250px;
    }
`;

const SliderContainer = styled.div`
    background-color: #343434;
    background-size: cover;
    background-position: bottom;
    background-image: url('static/mountains.jpg');
    padding: 88px 0 212px 0;
`;

const propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
};

const NextArrow = ({ className, style, onClick }) => {
    return (
        <div className={className} style={style} onClick={onClick}>
            <Icon name="iconRight" />
        </div>
    );
};
NextArrow.propTypes = propTypes;

const PrevArrow = ({ className, style, onClick }) => {
    return (
        <div className={className} style={style} onClick={onClick}>
            <Icon name="iconLeft" />
        </div>
    );
};
PrevArrow.propTypes = propTypes;

export default class SpeakerSlider extends React.PureComponent {
    state = {
        currentSlide: 0,
    };

    static propTypes = {
        speakers: PropTypes.array.isRequired,
    };

    _sliderSettings = () => ({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        variableWidth: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: idx => {
            this.setState({ currentSlide: idx });
        },
    });

    render() {
        const { currentSlide } = this.state;
        const { speakers } = this.props;
        const slides = speakers.map((speaker, idx) => {
            return (
                <div key={idx} style={{display: 'block'}}>
                    <SpeakerSlide speaker={speaker} active={currentSlide === idx}  />
                </div>
            );
        });

        return (
            <Container>
                <Headline>Agentconf 2018 Speaker Lineup</Headline>
                <SliderContainer>
                    <Slider {...this._sliderSettings()}>
                        {slides}
                    </Slider>
                </SliderContainer>
            </Container>
        );
    }
}
