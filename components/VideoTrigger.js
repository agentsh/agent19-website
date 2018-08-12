import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const IconContainer = styled.div`
    height: 50px;
    width: 50px;
    background: white;
    border-radius: 50%;
    position: relative;
    display: block;
`;
const Icon = styled.span`
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 50px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:before {
        content: '\\e90c';
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    position: ${props => (props.absolute ? 'absolute' : 'fixed')};
    opacity: ${props => ('opacity' in props ? props.opacity : 1)};
    bottom: 15%;
    right: 5%;
    @media (min-width: 800px) {
        right: 25%;
        top: 0;
        bottom: 0;
    }
    width: 250;
    z-index: 10;
    color: white;
    padding: 30px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const Text = styled.span`
    font-family: Teko;
    text-decoration: underline;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 26px;
    text-align: right;
    margin-right: 15px;
`;

export default class VideoTrigger extends React.PureComponent {
    static propTypes = {
        absolute: PropTypes.bool.isRequired,
        handleClick: PropTypes.func.isRequired,
        opacity: PropTypes.number,
    };

    state = {
        width: null,
    };

    render() {
        return (
            <Container absolute={this.props.absolute} onClick={this.props.handleClick} opacity={this.props.opacity}>
                <Text>play video</Text>
                <IconContainer>
                    <Icon name="play" />
                </IconContainer>
            </Container>
        );
    }
}
