import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SponsorContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    float: left;
    width: ${props => (props.type === 'partner' ? 20 : 25)}%;
    height: 120px;
    opacity: 0.6;

    img {
        max-width: ${props => (props.type === 'main_sponsor' ? 260 : props.type === 'partner' ? 100 : 130)}px;
        max-height: ${props => (props.type === 'main_sponsor' ? 120 : props.type === 'partner' ? 40 : 60)}px;
    }
    @media (max-width: 600px) {
        width: 50%;
    }
`;

export default class Sponsor extends React.Component {
    static propTypes = {
        main: PropTypes.boolean,
        logo: PropTypes.string,
        type: PropTypes.string,
        website: PropTypes.string,
    };

    render() {
        const {main, logo, type, website} = this.props;
        return (
            <SponsorContainer main={main} type={type}>
                <a href={website}>
                    <img src={logo} />
                </a>
            </SponsorContainer>
        );
    }
}
