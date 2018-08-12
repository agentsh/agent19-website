import React from 'react';
import styled from 'styled-components';
import Newsletter from './Newsletter';
import Button from './Button';
import Icon from './Icon';
import Link from 'next/link';

const FooterContainer = styled.footer`
    margin: 100px 0 55px 0;
    padding: 60px 25px;
    color: white;
    background-color: black;
    font-family: Teko;
    @media (min-width: 800px) {
        margin: 150px 70px 55px 70px;
        padding: 45px 60px;
    }
`;

const TextLink = styled.a`
    display: block;
    color: white;
    font-size: 22px;
    line-height: 35px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    @media (min-width: 800px) {
        display: inline-block;
        padding-right: 30px;
    }
`;

const ButtonLink = styled.a`
    position: relative;
    color: black;
    float: right;
    margin-left: 10px;
`;

const buttonSize = 35;
const buttonFontSize = 16;

export default class Footer extends React.PureComponent {
    render() {
        return (
            <FooterContainer>
                <Newsletter />
                <Link href="/schedule">
                    <TextLink>Schedule</TextLink>
                </Link>
                <Link href="/dornbirn">
                    <TextLink>Venue Dornbirn</TextLink>
                </Link>
                <Link href="/lech">
                    <TextLink>Venue Lech</TextLink>
                </Link>
                <Link href="/coc">
                    <TextLink>Code of Conduct</TextLink>
                </Link>
                <Link href="/disclaimer">
                    <TextLink>Disclaimer</TextLink>
                </Link>
                <TextLink href="mailto:team@agent.sh" target="_blank">
                    contact
                </TextLink>
                <ButtonLink href="https://www.instagram.com/teamagent" target="_blank">
                    <Button size={buttonSize} fontSize={buttonFontSize}>
                        <Icon name="instagram" />
                    </Button>
                </ButtonLink>
                <ButtonLink href="https://twitter.com/agentconf" target="_blank">
                    <Button size={buttonSize} fontSize={buttonFontSize}>
                        <Icon name="twitter" />
                    </Button>
                </ButtonLink>
                <ButtonLink href="https://www.facebook.com/agentsh/" target="_blank">
                    <Button size={buttonSize} fontSize={buttonFontSize}>
                        <Icon name="fb" />
                    </Button>
                </ButtonLink>
            </FooterContainer>
        );
    }
}
