import React from 'react';

import Button from "../Button";

import { 
    Container,
    Topside,
    Logo,
    MenuButton,
    Botside,
    Avatar, 
    ProfileData,
    HomeIcon,
    NotificationsIcon,
    MessagesIcon,
    FavoriteIcon,
    ProfileIcon,
    WriteIcon,
    ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
      <Container>
          <Topside>
              <Logo />
              <MenuButton>
                <HomeIcon />
                <span>Home</span>
              </MenuButton>
              <MenuButton>
                <NotificationsIcon />
                <span>Notifications</span>
              </MenuButton>
              <MenuButton>
                <MessagesIcon />
                <span>Messages</span>
              </MenuButton>
              <MenuButton>
                <FavoriteIcon />
                <span>Favorite</span>
              </MenuButton>
              <MenuButton className="active">
                <ProfileIcon/>
                <span>Profile</span>
              </MenuButton>
              <Button>
                <WriteIcon/>
                <span>Tweetar</span>
              </Button>
          </Topside>
          <Botside>
              <Avatar/>
              <ProfileData>
                  <strong>Jonathan Souza</strong>
                  <span>@devjonathanzasouzasi</span>
              </ProfileData>
              <ExitIcon/>
          </Botside>
      </Container>
  );
}

export default MenuBar;