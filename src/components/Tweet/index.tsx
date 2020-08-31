import React from 'react';

import { 
    Container, 
    Retweeted, 
    RetweetedIcon, 
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Actions, 
    Action,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RetweetedIcon/>
            Retweeted by you
        </Retweeted>
        <Body>
            <Avatar/>
            <Content>
                <Header>
                    <strong>Rocketseat</strong>
                    <span>@rocketseat</span>
                    <Dot/>
                    <time>30 of aug</time>
                </Header>
                <Description>Rockets have no reverse!</Description>
                <ImageContent/>
                <Actions>
                    <Action>
                    <CommentIcon/>
                     182
                    </Action>
                    <Action>
                    <RetweetIcon/>
                     1
                    </Action>
                    <Action>
                    <LikeIcon/>
                     200
                    </Action>
                </Actions> 
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;