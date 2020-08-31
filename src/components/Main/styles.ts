import styled, {css} from 'styled-components';
import { ArrowLeft, Home, Search, Notifications, Email } from "styles/Icons";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: min(601px, 100%);

    @media(min-width: 500px) {
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    }
`;

export const Header = styled.div`
    z-index: var(--z-index-high);
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    padding: 8px 0 9px 13px;
    border-bottom: 1px solid var(--outline);
    text-align: left;
    background-color: var(--primary);

    > button {
        padding: 8px;
        border-radius: 50%;
        outline: 0;
        cursor: pointer;
        &:hover{
            background-color: var(--twitter-dark-hover);
        }
    }
`;

export const BackIcon = styled(ArrowLeft)`
    width: 24px;
    height: 24px;
    fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 17px;

    > strong {
        font-size: 19px;
    }

    > span {
        font-size: 15px;
        color: var(--gray);
    }
`;

export const BottomMenu = styled.div`
    z-index: var(--z-index-high);
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px min(46px, max(10vw, 10px));
    border-top: 1px solid var(--outline);
    background-color: var(--primary);

    @media(min-width: 500px){
        display: none;
    }
`;

const bottomMenuIconCSS = css`
    width: 31px;
    height: 31px;
    color: var(--gray);
    cursor: pointer;

    &:hover,  &.active{
        fill: var(--twitter);
    }
`;

export const HomeIcon = styled(Home)`
    ${bottomMenuIconCSS}
`;
export const SearchIcon = styled(Search)`
    ${bottomMenuIconCSS}
`;
export const BellIcon = styled(Notifications)`
    ${bottomMenuIconCSS}
`;
export const EmailIcon = styled(Email)`
    ${bottomMenuIconCSS}
`;

