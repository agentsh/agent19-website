import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const SlideContent = styled.div`
    display: block;
    width: 280px;
    height: 280px;
    background: white;
    margin-left: 15px;
    margin-right: 15px;
    position: relative;
    overflow: visible;
    @media (min-width: 800px) {
        width: 360px;
        height: 360px;
    }
    img {
        max-width: 100%;
    }
`;
const SlideInfo = styled.div`
    position: absolute;
    left: 40px;
    top: 90px;
    z-index: 110;
    width: 200px;
    color: white;
    transition: opacity 0.5;

    @media (min-width: 500px) {
        width: 240px;
    }
    @media (min-width: 800px) {
        left: 270px;
    }
`;
const SlideFilter = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: ${props =>
        props.active ? 'linear-gradient(153.43deg, rgba(0,0,0,0) 0%, #000000 100%)' : 'rgba(0,0,0,0.8)'};
    a,
    a:hover {
        font-size: 35px;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

const SlideHeadline = styled.h3`
    font-family: Teko;
    font-size: 28px;
    line-height: 30px;
    font-weight: 100;
    text-transform: uppercase;
    @media (min-width: 800px) {
        line-height: 51px;
        font-size: 36px;
    }
`;

const SlideSubHeadline = styled.h4`
    font-family: Teko;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 14px;

    margin-bottom: 15px;
    @media (min-width: 800px) {
        margin-bottom: 30px;
    }
`;

const SlideTeaser = styled.div`
    p {
        font-family: 'Open Sans';
        margin-bottom: 15px;
        font-size: 13px;
        line-height: 22px;
        @media (min-width: 800px) {
            font-size: 16px;
            line-height: 30px;
        }
    }
`;

const Image = styled.img`max-width: 360px;`;

const A = styled.a`margin-right: 30px;`;

const SpeakerSlide = ({ speaker, active }) => {
    return (
        <SlideContent>
            <Image src={speaker.imageUrls.small} />
            <SlideFilter active={active}>
                <SlideInfo active={active} style={{ opacity: active ? 1 : 0 }}>
                    <SlideHeadline>
                        {speaker.name}
                    </SlideHeadline>
                    <SlideSubHeadline>
                        — {speaker.title}
                    </SlideSubHeadline>
                    <SlideTeaser dangerouslySetInnerHTML={{ __html: speaker.teaser }} />
                    {speaker.github &&
                        <A href={`https://github.com/${speaker.github}`} target="_blank">
                            <Icon name="github" />
                        </A>}
                    {speaker.twitter &&
                        <A href={`https://twitter.com/${speaker.twitter}`} target="_blank">
                            <Icon name="twitter" />
                        </A>}
                </SlideInfo>
            </SlideFilter>
        </SlideContent>
    );
};

SpeakerSlide.propTypes = {
    speaker: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
};

export default SpeakerSlide;
