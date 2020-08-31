import styled, {css} from 'styled-components';
import  { LocationOn, Cake } from "../../styles/Icons";
import Button from "../Button";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100%;
    overflow: auto;
    scrollbar-width: none;
    ::-webkit-scrollbar{
        display: none;
    }
`;
export const Banner = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 100%;
    height: min(33vw, 199px);
    background-color: var(--twitter);
`;
export const Avatar = styled.img`
    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));
    border: 3.75px solid var(--primary);
    border-radius: 50%;
    background-color: var(--gray);
`;
export const ProfileData = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: min(calc(10vw + 7px), 67px) 16px 0;
    
    > h1 {
        font-weight: bold;
        font-size: 19px;
    }

    > h2 {
        font-weight: normal;
        font-size: 15px;
        color: var(--gray);
    }

    > p {
        margin-top: 11px;
        font-size: 15px;

        > a {
            text-decoration: none;
            color: var(--twitter);
        }
    }
    
    > ul {
        list-style: none;
        margin: 10px 0 8px;

        > li {
            margin-bottom: 2px;
            font-size: 15px;
            color: var(--gray);
            
            > svg {
                margin-right: 5px;
                fill: var(--gray);
            }
        }
    }
`;

export const EditButton = styled(Button)`
    position: absolute;
    top: 2vw;
    right: 7px;
    padding: 4px 16px;
    font-size: 13px;

    @media (min-width: 320px) {
        top: 10px;
        padding: 10px 19px;
        font-size: 15px;
    }
`;

const iconCSS = css`
    width: 20px;
    height: 20px;
    color: var(--gray);
`;

export const LocationIcon = styled(LocationOn)`
    ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
    ${iconCSS}
`;
export const Followage = styled.div`
    display: flex;

    > span {
        font-size: 15px;
        color: var(--gray);

        & + span {
            margin-left: 20px;
        }
    }
`;