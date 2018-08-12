import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon';

const EyeCatcherContainer = styled.div`
    position: fixed;
    z-index: 2;
    top: 50vh;
    right: 0;
    box-sizing: border-box;

    background-color: #000000;

    color: #ffffff;
    font-size: 16px;
    line-height: 30px;

    ${props => (!props.height ? 'opacity: 0;' : '')} @media(max-width: 800px) {
        display: none;
    }
`;

const OpenEyeCatcherContainer = styled(EyeCatcherContainer)`
    padding: 25px 40px;
    margin-top: -${props => props.height / 2}px;

    border-radius: 10px 0 0 10px;
`;

const closedHeight = 50;

const ClosedEyeCatcherContainer = styled(EyeCatcherContainer)`
    height: ${closedHeight}px;
    width: ${props => props.height}px;
    transform: rotate(-90deg) translateX(${props => props.height / 2}px);
    transform-origin: bottom right;

    margin-top: -${closedHeight}px;

    border-radius: 10px 10px 0 0;
`;

const TogglerIcon = styled(Icon)`
    font-size: 12px;
    float: ${props => (props.isOpen ? 'right' : 'left')};

    transform: rotate(${props => (props.isOpen ? 0 : -90)}deg) translate(${props =>
    props.isOpen ? 0 : '-18px, 12px'});
`;

export default class EyeCatcher extends React.PureComponent {
    static propTypes = {
        children: PropTypes.func.isRequired,
    };

    state = {
        containerHeight: 0,
        isOpen: true,
    };

    setContainerHeight = container => {
        if (!container) {
            return;
        }
        this.setState({containerHeight: container.offsetHeight});
    };

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    hide = () => {
        window.requestAnimationFrame(() => {
            this.setState({
                isOpen: false,
            });
        });
    };

    componentDidMount() {
        if (!window) {
            return;
        }
        window.addEventListener('scroll', this.hide);
    }

    componentWillUnmount() {
        if (!window) {
            return;
        }
        window.removeEventListener('scroll', this.hide);
    }

    render() {
        if (this.state.isOpen) {
            return (
                <OpenEyeCatcherContainer innerRef={this.setContainerHeight} height={this.state.containerHeight}>
                    <TogglerIcon isOpen={this.state.isOpen} name="forward" onClick={this.handleToggle} />
                    {this.props.children(this.state.isOpen)}
                </OpenEyeCatcherContainer>
            );
        }

        return (
            <ClosedEyeCatcherContainer height={this.state.containerHeight}>
                <TogglerIcon isOpen={this.state.isOpen} name="forward" onClick={this.handleToggle} />
                {this.props.children(this.state.isOpen)}
            </ClosedEyeCatcherContainer>
        );
    }
}
