import styled from 'styled-components';

import {Search} from "styles/Icons";

export const Container = styled.div`
    display: none;

    @media(min-width: 1000px) {
        display: flex;
        flex-direction: column;
        width: min(399px, 100%);
    }
`;

export const SearchWrapper = styled.div`
    z-index: var(--z-index-high);
    position: fixed;
    padding: 10px 24px;
    width: min(399px, 100%);
    max-height: 57px;
    background-color: var(--primary);
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 39px;
    padding: 0 10px 0 52px;
    border-radius: 19.5px;
    font-size: 14px;
    background-color: var(--search);
    outline: 0;

    &:focus{
        border: 1px solid var(--twitter);
        ~ svg {
            fill: var(--twitter);
        }
    }

    &::placeholder {
        color: var(--gray);
    }

    ~ svg {
        z-index: var(--z-index-mid);
        position: relative;
        top: -33px;
        left: 15px;
        transition: 180ms ease-in-out
    }
`;

export const SearchIcon = styled(Search)`
    width: 27px;
    height: 27px; 
    color: var(--gray);
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 57px 24px 200px;
    margin-top: 3px;

    > div {
        & + div {
            margin-top: 15px;
        }
    }
`;