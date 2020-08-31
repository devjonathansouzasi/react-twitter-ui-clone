import React from 'react';

import StickyBox from "react-sticky-box";

import List from "../List";
import FollowSugestion from "../FollowSugestion";
import News from "../News";

import { Container, SearchWrapper, SearchInput, SearchIcon, Body} from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Search in twitter"/>
              <SearchIcon/>
          </SearchWrapper>
          <StickyBox>
            <Body>
                <List title="Maybe you like" elements={[
                    <FollowSugestion name="Rockeseat" nickname="@rockeseat"/>,
                    <FollowSugestion name="React.js" nickname="@reactjs"/>,
                    <FollowSugestion name="CBYK" nickname="@cbyk"/>
                ]}/>
                <List title="Maybe you like" elements={[
                    <News/>,
                    <News/>,
                ]}/>
                <List title="Maybe you like" elements={[
                    <News/>,
                    <News/>,
                    <News/>,
                    <News/>,
                    <News/>,
                ]}/>
                <List title="Maybe you like" elements={[
                    <News/>,
                    <News/>,
                    <News/>,
                    <News/>,
                ]}/>
                <List title="Maybe you like" elements={[
                    <News/>,
                    <News/>,
                    <News/>,
                    <News/>,
                    <News/>,
                ]}/>
            </Body>
          </StickyBox>
      </Container>
  );
}

export default SideBar;