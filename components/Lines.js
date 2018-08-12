import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const lineWidth = 240;

const Line = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: ${(props) => props.left}px;
    width: 1px;

    background: ${(props) => props.color};
`;

export default class Lines extends React.PureComponent {
    static propTypes = {
        color: PropTypes.string.isRequired,
    };

    state = {
        width: null,
    };

    componentDidMount() {
        this.updateWindowWidth();
        window.addEventListener('resize', this.updateWindowWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowWidth);
    }

    render() {
        const lineCount = (this.state.width / lineWidth) | 1;
        const center = this.state.width / 2;
        const initialCount = -Math.ceil(lineCount / 2);

        let lines = [];
        for (let i = 1; i <= lineCount; ++i) {
            lines.push(
                <Line key={i} color={this.props.color} left={center + (initialCount + i) * lineWidth} />
            );
        }

        return (
            <Line>
                {lines}
            </Line>
        );
    }

    updateWindowWidth = () => {
        this.setState({width: window.innerWidth});
    };
}
