import styled, {css} from 'styled-components';
import {Twitter, Chat, Favorite} from "styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
`;
export const Retweeted = styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    color: var(--gray);
`;
export const Body= styled.div`
    position: relative;
    display: flex;
    margin: 3px;
`;
export const Avatar= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    flex-shrink: 0;
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background-color: var(--gray);
`;
export const Content= styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;
export const Header= styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    white-space: nowrap;

    > strong {
        margin-right: 5px;
    }

    > span, time {
        color: var(--gray);
    }

    > strong, span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
export const Dot = styled.div`
    background-color: var(--gray);
    width: 2px;
    height: 2px;
    border-radius: 50%;
    margin: 0 10px;
`;
export const Description = styled.p`
    font-size: 14px;
    margin-top: 4px;
`;
export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));
    border-radius: 14px;
    background-color: var(--outline);
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`;
export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin: 11px auto;
    @media(min-width: 330px) {
        width: 63%;
    }

    > div {
        cursor: pointer;
        &:hover{
            opacity: 0.7;
        }
    }
`;
export const Action = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--gray);

    > svg {
        margin-right: 5px;
    }

    &:nth-child(1) {
        &, > svg path {
            color: var(--gray);
        }
    }
    &:nth-child(2) {
        color: var(--twitter);
        &, > svg {
            fill: var(--twitter);
        }
    }
    &:nth-child(3) {
        color: var(--like);
        &, > svg {
            fill: var(--like);
        }
    }
`;

const iconsCSS = css`
    width: 19px;
    height: 19px;
`;


export const RetweetedIcon = styled(Twitter)`
    ${iconsCSS}
    width: 16px;
    height: 16px;
    margin-left: 35px;
    margin-right: 9px;
`;
export const CommentIcon= styled(Chat)`
    ${iconsCSS}
`;
export const RetweetIcon= styled(Twitter)`
    ${iconsCSS}
`;
export const LikeIcon= styled(Favorite)`
    ${iconsCSS}
`;