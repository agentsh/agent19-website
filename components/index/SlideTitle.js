import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSlideTitle = styled.header`
    color: #231f20;
    font-family: Teko;
    text-align: center;
    text-transform: uppercase;

    position: fixed;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    width: 80%;

    > h1,
    > h2 {
        font-size: 35px;
        line-height: 35px;
        @media (min-width: 600px) {
            font-size: 48px;
            line-height: 48px;
        }
        @media (min-width: 1000px) {
            font-size: 64px;
            line-height: 64px;
        }
        font-weight: 100;
    }

    > h3 {
        font-size: 28px;
        font-weight: 100;
        line-height: 28px;
    }
`;

export default class SlideTitle extends React.Component {
    static propTypes = {
        animationProgress: PropTypes.number.isRequired,
        progressStep: PropTypes.number.isRequired,
        fadeIn: PropTypes.bool,
        children: PropTypes.node,
    };

    static defaultProps = {
        fadeIn: true,
    };

    render() {
        return (
            <StyledSlideTitle
                style={{
                    opacity: this.getOpacity(this.props.animationProgress, this.props.progressStep, this.props.fadeIn),
                }}>
                {this.props.children}
            </StyledSlideTitle>
        );
    }

    getOpacity = (animationProgress, progressStep, fadeIn = true) => {
        const center = progressStep / 2;

        if (animationProgress < center && !fadeIn) {
            return 1;
        }

        const diff = Math.abs(animationProgress % progressStep - center);

        return 1 - diff / center;
    };
}
