import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const bookingUrl = 'https://www.eventbrite.de/e/agentconf-2018-tickets-31262914218?ref=elink';
const TicketWrapper = styled.div`
    position: relative;
    display: block;
    overflow: auto;
    z-index: 2;
    width: 1090px;
    max-width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-bottom: 50px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
`;

const Title = styled.h2`
    margin-bottom: 50px;
    margin-top: 80px;
    margin-left: 20px;
    margin-right: 20px;
    @media (min-width: 800px) {
        width: 150px;
        float: right;
        margin-right: 0;
    }
`;

const TicketBox = styled.div`
    height: 500px;
    text-align: center;
    padding: 30px 20px;
    box-sizing: border-box;
    background: #282828;
    color: white;
    width: 500px;
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 100px;
    display: block;

    @media (min-width: 900px) {
        float: left;
        width: 30%;
    }

    @media (min-width: 1090px) {
        float: left;
        width: 338px;
    }

    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #757575;
        margin: 1em 0;
        padding: 0;
    }
`;

const ActiveTicketbox = styled(TicketBox)`
    margin-top: -24px;
    padding-top: 54px;
    height: 548px;
    color: black;
    background: white;
    border: none;
    width: 550px;
    max-width: 95%;
    @media (min-width: 900px) {
        float: left;
        width: 40%;
    }
    @media (min-width: 1060px) {
        width: 380px;
    }
`;

const Line = styled.div`
    box-sizing: border-box;
    height: 0;
    border: 1px solid #bdbdbd;
    margin: 15px 10px;
`;

const Headline = styled.div`
    font-size: 28px;
    line-height: 40px;
    text-transform: uppercase;
    font-family: Teko;
`;

const Price = styled.div`
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
`;

const Description = styled.div`
    padding-top: 50px;
    padding-bottom: 70px;
    height: 250px;
    font-size: 16px;
    line-height: 40px;
    font-weight: 600;
`;

const buttonBackground = {
    past: '#757575',
    now: '#231F20',
    addon: '#FFFFFF',
};

const buttonColor = {
    past: '#231F20',
    now: '#FFFFFF',
    addon: '#231F20',
};

const ButtonLink = styled.a`
    display: block;
    height: 40px;
    border-radius: 100px;
    background-color: ${props => buttonBackground[props.type]};
    color: ${props => buttonColor[props.type]};
    text-align: center;
    width: 80%;
    font-family: Teko;
    padding-top: 4px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    text-decoration: none;
    @media (min-size: 1060px) {
        width: 280px;
    }
`;

export default class Tickets extends React.PureComponent {
    static propTypes = {
        ticket1Headline: PropTypes.string.isRequired,
        ticket1Price: PropTypes.string.isRequired,
        ticket1Description: PropTypes.string.isRequired,
        ticket1ButtonText: PropTypes.string.isRequired,
        ticket2Headline: PropTypes.string.isRequired,
        ticket2Price: PropTypes.string.isRequired,
        ticket2Description: PropTypes.string.isRequired,
        ticket2ButtonText: PropTypes.string.isRequired,
        ticket3Headline: PropTypes.string.isRequired,
        ticket3Price: PropTypes.string.isRequired,
        ticket3Description: PropTypes.string.isRequired,
        ticket3ButtonText: PropTypes.string.isRequired,
    };

    render() {
        return (
            <TicketWrapper>
                <Title>Tickets and Prices</Title>
                <div style={{clear: 'both'}}>
                    <TicketBox>
                        <Headline>{this.props.ticket1Headline}</Headline>
                        <Line />
                        <Price>{this.props.ticket1Price} €</Price>
                        <Line />
                        <Description dangerouslySetInnerHTML={{__html: this.props.ticket1Description}} />
                        <ButtonLink type="addon" href={bookingUrl} target="_blank">
                            {this.props.ticket1ButtonText}
                        </ButtonLink>
                    </TicketBox>
                    <ActiveTicketbox>
                        <Headline>{this.props.ticket2Headline}</Headline>
                        <Line />
                        <Price>{this.props.ticket2Price} €</Price>
                        <Line />
                        <Description dangerouslySetInnerHTML={{__html: this.props.ticket2Description}} />
                        <ButtonLink type="now" href={bookingUrl} target="_blank">
                            {this.props.ticket2ButtonText}
                        </ButtonLink>
                    </ActiveTicketbox>
                    <TicketBox>
                        <Headline>{this.props.ticket3Headline}</Headline>
                        <Line />
                        <Price>{this.props.ticket3Price} €</Price>
                        <Line />
                        <Description
                            dangerouslySetInnerHTML={{
                                __html: this.props.ticket3Description,
                            }} />

                        <ButtonLink type="addon" href={bookingUrl} target="_blank">
                            {this.props.ticket3ButtonText}
                        </ButtonLink>
                    </TicketBox>
                </div>
            </TicketWrapper>
        );
    }
}
