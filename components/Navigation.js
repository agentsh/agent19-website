import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from './Button';
import Icon from './Icon';
import Lines from './Lines';

const logoSize = 80;

const Header = styled.header`
    position: relative;
    z-index: 2;
`;

const HeaderContainer = styled.div`
    position: fixed;
    top: 20px;
    left: 50%;
    z-index: 2;
    width: ${logoSize}px;
    transform: translateX(-50%);
`;

const Logo = styled.div`
    position: relative;
    height: ${logoSize}px;
    width: ${logoSize}px;
    z-index: 2;

    background: url(static/logo.png);
    background-size: ${logoSize}px ${logoSize}px;
    border-radius: ${logoSize / 2}px;
    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

const Toggler = styled(Button)`
    position: relative;
    top: -5px;
    left: 50%;
    z-index: 1;
    transform: translateX(-50%);

    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
`;

const List = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: url(static/menu-background.png) #fff;

    text-align: center;
    text-transform: uppercase;
    font-family: Teko;
    font-size: 40px;
    line-height: 1.1;

    > ul {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        list-style-type: none;
        list-style-position: inside;

        > li {
            margin: 20px 0 0 0;

            letter-spacing: 1px;

            > a {
                color: #2c2c2c;
                text-decoration: none;
            }
        }
    }
    @media (max-height: 600px) {
        font-size: 20px;
        > ul {
            margin-top: 20px;
            > li {
                margin: 10px 0 0 0;
            }
        }
    }
`;

export default class Navigation extends React.PureComponent {
    state = {
        opened: false,
    };

    render() {
        const navigationList = this.state.opened ? this.renderNavigationList() : '';

        return (
            <Header>
                <HeaderContainer opened={this.state.opened}>
                    <Link href="/index">
                        <Logo />
                    </Link>
                    <Toggler onClick={this.handleToggle}>
                        <Icon name={this.state.opened ? 'close' : 'hamburger'} />
                    </Toggler>
                </HeaderContainer>
                {navigationList}
            </Header>
        );
    }

    renderNavigationList() {
        return (
            <List>
                <Lines color="rgba(0, 0, 0, 0.07)" />
                <ul>
                    <li onClick={this.handleClose}>
                        <Link href="/schedule">
                            <a>Schedule</a>
                        </Link>
                    </li>
                    <li onClick={this.handleClose}>
                        <Link href="/coc">
                            <a>Code of Conduct</a>
                        </Link>
                    </li>
                    <li onClick={this.handleClose}>
                        <a href="https://www.eventbrite.de/e/agentconf-2018-tickets-31262914218">Tickets</a>
                    </li>
                    <li onClick={this.handleClose}>
                        <Link href="/dornbirn">
                            <a>Venue Dornbirn</a>
                        </Link>
                    </li>
                    <li onClick={this.handleClose}>
                        <Link href="/lech">
                            <a>Venue Lech</a>
                        </Link>
                    </li>
                    <li onClick={this.handleClose}>
                        <Link href="/faq">
                            <a>FAQ</a>
                        </Link>
                    </li>
                    <li onClick={this.handleClose}>
                        <a href="https://blog.agent.sh">Blog</a>
                    </li>
                    <li onClick={this.handleClose}>
                        <a href="http://2017.agent.sh">AgentConf 2017</a>
                    </li>
                </ul>
            </List>
        );
    }

    handleToggle = () => {
        this.setState(prevState => ({
            opened: !prevState.opened,
        }));
    };

    handleClose = () => {
        this.setState({opened: false});
    };
}
