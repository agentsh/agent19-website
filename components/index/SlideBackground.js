import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const maxProgress = 100;

const StyledSlideBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-image: url(${(props) => props.image['large']});
    background-size: cover;

    will-change: transform, filter;

    @media (max-width: 1000px) {
        background-image: url(${(props) => props.image['small']});
    }
    @media (max-width: 2000px) {
        background-image: url(${(props) => props.image['medium']});
    }
`;

export default class SlideBackground extends React.Component {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        image: PropTypes.object.isRequired,
        animationSplit: PropTypes.number.isRequired,
        topOpacity: PropTypes.number.isRequired,
        startOpacity: PropTypes.number.isRequired,
    };

    render() {
        return (
            <StyledSlideBackground
                image={this.props.image}
                style={{
                    transform: 'scale(' + (1 + this.props.animationProgress / 500) + ')',
                    opacity: this.getBackgroundOpacity(),
                }} />
        );
    }

    getBackgroundOpacity = () => {
        const increaseOpacity = this.props.topOpacity - this.props.startOpacity;

        if (this.props.animationProgress <= this.props.animationSplit) {
            return this.props.startOpacity + (
                increaseOpacity * this.props.animationProgress / this.props.animationSplit
            );
        }

        return this.props.topOpacity - (
            this.props.topOpacity * (
                (this.props.animationProgress - this.props.animationSplit) / (maxProgress - this.props.animationSplit)
            )
        );
    };
}
