import styled, {css} from 'styled-components';
import {
    Twitter,
    Home,
    Notifications,
    Email,
    Favorite,
    Person,
    Pencil,
    ExitToApp
} from "styles/Icons";

export const Container = styled.div`
  display: none;

  @media(min-width: 500px) {
      position: sticky;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-height: 100vh;
      padding: 9px 19px 20px;
      overflow-y: auto;
  }
`;

export const Topside = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1280px) {
        align-items: flex-start;
    }
`;
export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    padding: 8.25px;
    border-radius: 25px;
    outline: 0;
    cursor: pointer;    

    & + button {
        margin-top: 16px;
        transition: background-color 0.2s ease-in-out;
        > span, svg {
            transition: color 0.2s ease-in-out, 
                        fill 0.2s ease-in-out;
        }
    }

    & + button:last-child{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 33px;
        width: 40px;
        height: 40px;

        &:hover {
            background-color: var(--twitter-light-hover);
        }   
        
        > span {
            display: none;
        }

        @media(min-width: 1280px) {
            width: 100%;
            height: unset;

            > span {
                display: inline;
                margin-left: 19px;
            }
        }
    }

    &:hover {
        background-color: var(--twitter-dark-hover);
    }

    &:hover, &.active {
        > span, svg {
            color: var(--twitter);
            fill: var(--twitter);
        }
    }

    
    > span {
        display: none;
    }

    @media(min-width: 1280px) {
        padding: 8.25px 15px; 
        > span {
            display: inline;
            margin-left: 19px;
            font-size: 19px;
            font-weight: bold;
        }
    }

`;

export const Botside = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

`;
export const Avatar = styled.div`
    flex-shrink: 0;
    width: 39px;
    height: 39px;
    border-radius: 50%;
    background-color: var(--gray);
`;
export const ProfileData = styled.div`
   display: none;
   
   @media(min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;

    > span {
        color: var(--gray);
    }
   } 
`;

const iconsCSS = css`
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    color: var(--white);
`;

export const Logo = styled(Twitter)`
    ${iconsCSS};
    width: 38px;
    height: 38px;
    margin: 0 auto;
    margin-bottom: 20px;
    fill: var(--twitter);
`;

export const HomeIcon = styled(Home)`
    ${iconsCSS};
`;
export const NotificationsIcon = styled(Notifications)`
    ${iconsCSS};
`;
export const MessagesIcon = styled(Email)`
    ${iconsCSS};
`;
export const FavoriteIcon = styled(Favorite)`
    ${iconsCSS};
`;
export const ProfileIcon = styled(Person)`
    ${iconsCSS};
`;
export const WriteIcon = styled(Pencil)`
    ${iconsCSS};
`;

export const ExitIcon = styled(ExitToApp)`
    display: none;

    @media(min-width: 1280px) {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin-left: 30px;
        color: var(--white);
        cursor: pointer;

        &:hover{
            fill: var(--like);
        }
    }
`;