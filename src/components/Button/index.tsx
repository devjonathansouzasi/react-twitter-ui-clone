import React from 'react';

import styled from 'styled-components';

interface Props {
    outlined?: boolean
};

const Button = styled.button<Props>`
    padding: 16px;
    border: ${props => props.outlined ? '1px solid var(--twitter)' : 'none'};
    border-radius: 25px;
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.outlined ? `var(--twitter)` : '#fff'};
    background-color: ${props => props.outlined ? 'transparent' : `var(--twitter)`};
    outline: 0;
    cursor: pointer;
    tr
    &:hover {
        background-color: ${props => props.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};
    }
`;

export default Button;