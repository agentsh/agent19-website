import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import Icon from './Icon';

const Container = styled.div`
    position: fixed;
    top: -100%;
    width: 100%;
    height: 100%;
    background: #282828;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    top: ${props => (props.visible ? 0 : '-100%')};
    opacity: ${props => (props.visible ? 1 : 0)};
    transition: all 1s;
    will-change: top, opacity;
    iframe {
        max-width: 100%;
    }
`;

const CloseVideo = styled.div`
    position: fixed;
    right: 30px;
    top: 30px;
    z-index: 20;
    color: white;
    font-size: 2em;
    cursor: pointer;
`;

export default class VideoPlayer extends React.PureComponent {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        youtubeId: PropTypes.string.isRequired,
        handleClose: PropTypes.func.isRequired,
    };
    render() {
        const opts = {
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: this.props.visible === true ? 1 : 0,
                showInfo: 0,
                controls: 1,
                fs: 1,
            },
        };
        const {visible} = this.props;
        return (
            <Container visible={this.props.visible}>
                {visible === true && <YouTube videoId={this.props.youtubeId} opts={opts} />}
                <CloseVideo onClick={this.props.handleClose}>
                    <Icon name="close" />
                </CloseVideo>
            </Container>
        );
    }
}
