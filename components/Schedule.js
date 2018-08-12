import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Spacer = styled.div`height: ${props => props.height}px;`;
const TimeInfo = styled.div`
    position: absolute;
    top: -15px;
    left: -30px;
    font-family: Teko;
    font-size: 22px;
    @media (min-width: 320px) and (max-width: 520px) {
        left: auto;
        right: 20px;
    }
`;

const Block = styled.div`
    position: relative;
    background-position: center;
    background-size: cover;
    display: flex;
    flex: 1;
    color: white;
    min-height: 70px;
    margin: 0 40px;
    background: ${props => (props.dark ? '#282828' : 'rgba(255,255,255,0.02)')};
    @media (min-width: 320px) and (max-width: 520px) {
        margin: 0;
    }
`;

const Title = styled.div`
    align-items: center;
    background: ${props => (props.image ? `url(${props.image})` : 'black')};
    background-size: cover;
    height: ${props => (props.image ? 120 : 70)}px;
    font-size: ${props => (props.image ? 28 : 16)}px;
    letter-spacing: 0.8px;
    justify-content: ${props => (props.image ? 'flex-start' : 'center')};
    font-family: Teko;
    display: flex;
    text-transform: uppercase;
    flex: 1;

    padding-left: ${props => (props.image ? '120px' : '0')};
    @media (min-width: 320px) and (max-width: 520px) {
        padding-left: ${props => (props.image ? '20px' : '0')};
    }
    @media (min-width: 1000px) and (max-width: 1200px) {
        padding-left: ${props => (props.image ? '80px' : '0')};
    }
`;

const Speaker = styled.div`
    padding: 40px 0;
    flex: 1;
    img {
        width: 140px;
        height: 140px;
    }
`;

const SpeakerInfo = styled.div`
    position: absolute;
    z-index: 100;
    color: #dfdfdf;

    text-transform: uppercase;
    font-size: 28px;
    line-height: 28px;
    font-family: Teko;
    letter-spacing: 0.8px;
    div {
        font-family: Open Sans;
        font-size: 16px;
        line-height: 20px;
        text-transform: none;
        width: 280px;
        font-weight: 300;
    }

    left: 120px;
    top: 74px;
    @media (min-width: 320px) and (max-width: 520px) {
        left: 20px;
        top: 100px;
        div {
            font-size: 14px;
            width: 270px;
        }
    }
    @media (min-width: 1000px) and (max-width: 1200px) {
        left: 80px;
    }
`;
const ImageOverlay = styled.div`
    position: absolute;
    left: 0px;
    width: 140px;
    top: 40px;
    height: 140px;
    background: linear-gradient(153.43deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
`;
const ImageOverlay2 = styled.div`
    position: absolute;
    right: 0px;
    width: 140px;
    bottom: 0px;
    z-index: 5;
    height: 140px;
    background: linear-gradient(153.43deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
    @media (min-width: 320px) and (max-width: 520px) {
        bottom: auto;
        top: 20px;
        right: 0;
        background: linear-gradient(153.43deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    }
`;

const SpeakerInfo2 = styled.div`
    height: 140px;
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0px;
    text-align: right;
    color: #dfdfdf;
    span {
        display: block;
        position: absolute;
        right: 120px;
        z-index: 50;
        top: 85px;
        font-size: 28px;
        line-height: 40px;
        font-family: Teko;
        text-transform: uppercase;
    }
    @media (min-width: 320px) and (max-width: 520px) {
        width: 100%;
        padding-top: 20px;
        position: relative;
        text-align: right;

        span {
            top: 100px;
            right: 60px;
        }
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    margin: 100px auto;
    @media (min-width: 1000px) {
        max-width: 980px;
        flex-direction: row;
    }
    @media (min-width: 1200px) {
        max-width: 1080px;
        flex-direction: row;
    }
`;

const Col = styled.div`
    flex 1;
`;

const Company  = styled.p`

  font-size: 14px!important;
  line-height: 14px;
  padding-bottom:10px;
`;

const Slot = ({title, image, speaker, startTime, endTime, dark}) => {
    let content;
    let timeString = '';
    if (startTime) {
        timeString += startTime;
    }
    if (endTime) {
        timeString += ` - ${endTime}`;
    }
    if (title) {
        content = <Title image={image}>{title}</Title>;
    } else if (speaker) {
        let speaker2;
        const {coSpeaker} = speaker;
        if (coSpeaker) {
            speaker2 = (
                <SpeakerInfo2>
                    <img src={coSpeaker.imageUrls.small} alt={coSpeaker.name} />
                    <span>{coSpeaker.name}</span>
                    <ImageOverlay2 />
                </SpeakerInfo2>
            );
        }
        content = (
            <Speaker>
                <img src={speaker.imageUrls.small} alt={speaker.name} />
                <ImageOverlay />
                <SpeakerInfo>
                    {speaker.name}
                    <Company>{speaker.title}</Company>
                    <div dangerouslySetInnerHTML={{__html: speaker.teaser}} />
                </SpeakerInfo>
                {speaker2}
            </Speaker>
        );
    }

    return (
        <Block dark={dark}>
            <TimeInfo>{timeString}</TimeInfo>
            {content}
        </Block>
    );
};

Slot.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    speaker: PropTypes.object,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    dark: PropTypes.bool,
};

export default class Schedule extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {slots: this.parseSlots()};
    }
    static propTypes = {
        speakers: PropTypes.array.isRequired,
    };

    parseSlots = () => {
        const slots = new Array(15);
        const {speakers} = this.props;

        speakers.forEach(speaker => {
            const slot = parseInt(speaker.slot);
            if (slot) {
                if (typeof slots[slot] === 'object') {
                    const entry = slots[slot];
                    entry.coSpeaker = speaker;
                    slots[slot] = entry;
                } else {
                    slots[slot] = speaker;
                }
            }
        });
        return slots;
    };

    render() {
        const {slots} = this.state;
        return (
            <div>
                <Row>
                    <Col>
                        <Slot title="DAY 1 - Thursday, 25.01.2018" />
                        <Slot dark={true} />
                        <Slot
                            title="Breakfast & Checkin"
                            image="static/schedule/checkin.jpg"
                            startTime="08:00"
                            endTime="09:00" />
                        <Slot speaker={slots[1]} dark={true} startTime="09:00" endTime="09:45" />
                        <Slot speaker={slots[2]} dark={false} startTime="09:45" endTime="10:45" />
                        <Slot
                            title="Coffee Break"
                            image="static/schedule/coffee1.jpg"
                            startTime="10:45"
                            endTime="11:15" />
                        <Slot speaker={slots[3]} dark={true} startTime="11:15" endTime="12:00" />
                        <Slot speaker={slots[4]} dark={false} startTime="12:00" endTime="12:45" />
                        <Slot
                            title="Lunch Break"
                            image="static/schedule/karren1.jpg"
                            startTime="12:45"
                            endTime="14:15" />
                        <Slot speaker={slots[5]} dark={true} startTime="14:15" endTime="15:00" />
                        <Slot speaker={slots[6]} dark={false} startTime="15:00" endTime="15:45" />
                        <Slot
                            title="Coffee Break"
                            image="static/schedule/coffee2.jpg"
                            startTime="15:45"
                            endTime="16:15" />
                        <Slot speaker={slots[7]} dark={true} startTime="16:15" endTime="17:00" />
                        <Slot
                            title="lightning Talks"
                            image="static/schedule/lightning.jpg"
                            startTime="17:00"
                            endTime="18:00" />
                        <Spacer height={40} />
                        <Slot
                            title="Dinner + Afterparty"
                            image="static/schedule/party.jpg"
                            startTime="18:00"
                            endTime="open end" />
                    </Col>
                    <Col>
                        <Spacer height={70} />
                        <Slot title="DAY 2 - Friday, 26.01.2017" />
                        <Slot title="Breakfast" image="static/schedule/coffee3.jpg" startTime="08:00" endTime="09:00" />
                        <Slot speaker={slots[8]} dark={true} startTime="09:00" endTime="09:45" />
                        <Slot speaker={slots[9]} dark={false} startTime="09:45" endTime="10:30" />
                        <Slot
                            title="Coffee Break"
                            image="static/schedule/coffee2.jpg"
                            startTime="10:30"
                            endTime="11:00" />
                        <Slot speaker={slots[10]} dark={true} startTime="11:00" endTime="10:45" />
                        <Slot speaker={slots[11]} dark={false} startTime="11:45" endTime="12:30" />
                        <Slot
                            title="Lunch Break"
                            image="static/schedule/karren2.jpg"
                            startTime="12:30"
                            endTime="14:00" />
                        <Slot speaker={slots[12]} dark={true} startTime="14:00" endTime="14:45" />
                        <Slot speaker={slots[13]} dark={false} startTime="14:45" endTime="15:30" />
                        <Slot
                            title="Coffee Break"
                            image="static/schedule/coffee1.jpg"
                            startTime="15:30"
                            endTime="16:00" />
                        <Slot speaker={slots[14]} dark={true} startTime="16:00" endTime="16:45" />
                        <Slot speaker={slots[15]} dark={false} startTime="16:45" endTime="17:30" />
                        <Slot title="Transport to Lech" image="static/schedule/transport.jpg" startTime="18:30" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Slot title="DAY 3 - Saturday, 27.01.2018" />
                        <Slot title="Skiing in Lech" image="static/schedule/lech2.jpg" />
                    </Col>
                    <Col>
                        <Spacer height={70} />
                        <Slot title="DAY 4 - Sunday, 28.01.2018" />
                        <Slot title="Skiing in Lech" image="static/schedule/lech1.jpg" />
                    </Col>
                </Row>
            </div>
        );
    }
}
