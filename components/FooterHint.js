import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';

const radius = 84;
const diameter = radius * 2;
const height = 40;

const FooterContainer = styled.div`
    position: fixed;
    left: 50%;
    bottom: ${-diameter + height}px;
    transform: translate(-50%);
`;

const Circle = styled.div`
    position: relative;
    z-index: 2;
    background: #000;
    border-radius: ${radius}px;
    width: ${diameter}px;
    height: ${diameter}px;

    font-family: Teko;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
    line-height: 50px;

    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, .2);
`;

const Action = styled(Button)`
    position: relative;
    z-index: 1;
    left: 50%;
    top: 5px;
    transform: translate(-50%);

    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, .2);

    > span {
        font-size: 20px;
    }
`;

export default class FooterHint extends React.Component {
    static propTypes = {
        showScrollInfo: PropTypes.bool,
    };
    render() {
        const {showScrollInfo} = this.props;
        if (showScrollInfo) {
            return (
                <FooterContainer>
                    <Action>
                        <Icon name="scroll" />
                    </Action>
                    <Circle>Scroll</Circle>
                </FooterContainer>
            );
        } else {
            return (
                <FooterContainer>
                    <a href="https://www.eventbrite.de/e/agentconf-2018-tickets-31262914218">
                        <Action>
                            <Icon name="ticket" />
                        </Action>
                    </a>
                    <Circle>Tickets</Circle>
                </FooterContainer>
            );
        }
    }
}
