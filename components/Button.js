import styled from 'styled-components';

const defaultSize = 40;

const Button = styled.div`
    width: ${props => props.size || defaultSize}px;
    height: ${props => props.size || defaultSize}px;

    background: white;
    border-radius: ${props => (props.size || defaultSize) / 2}px;

    cursor: pointer;

    > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        font-size: ${props => (props.fontSize ? props.fontSize : (props.size || defaultSize) / 3)}px;
        color: #000;
    }
`;

export default Button;
