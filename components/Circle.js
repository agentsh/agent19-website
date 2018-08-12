import styled from 'styled-components';

const size = 670;

const Circle = styled.div`
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${(props) => props.left}px;
    top: ${(props) => props.top}px;
    border-radius: ${size/2}px;
    background-color: #282828;
`;

export default Circle;
