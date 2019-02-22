import React from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const Wrapper = styled.div`
    position: fixed;
    z-index: 10000;
    background: black;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-content: center;
    color: white;
    border: 1px solid white;
`;

const Block = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    img {
        max-width: 70%;
    }
    a,
    a:hover {
        font-size: 20px;
        text-decoration: none;
        color: white;
    }
`;

const Close = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
`;

export default class TicketPopUp extends React.Component {
    state = {visible: false};
    componentDidMount() {
        const modal = Cookies.get('modal');
        if (modal !== 'false') {
            this.setState({visible: true});
        }
    }
    close = () => {
        Cookies.set('modal', 'false', {expires: 7});
        this.setState({visible: false});
    };

    render() {
        if (!this.state.visible) {
            return null;
        }

        return (
            <Wrapper>
                <Block>
                    <a href="https://ti.to/ac/agentconf20" target="_blank">
                        <img src="/static/logo.png" />
                        <div>Get 2020 AgentConf tickets NOW!</div>
                    </a>
                </Block>
                <Close onClick={this.close}>close this damn commercial.</Close>
            </Wrapper>
        );
    }
}
