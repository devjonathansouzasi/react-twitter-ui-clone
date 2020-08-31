import React, { useState, useEffect } from 'react';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

import Feed from "../Feed";

const ProfilePage: React.FC = () => {

    const [avatarUrl, setAvataUrl] = useState("");

    useEffect(() => {
        (async () => {
            const res = await fetch("https://api.github.com/users/devjonathansouzasi");
            const data = await res.json();
            setAvataUrl(data.avatar_url);
        })();
    }, []);

    return (
        <Container>
        <Banner>
            <Avatar src={avatarUrl}/>
        </Banner>
        <ProfileData>
                <EditButton outlined>Edit Profile</EditButton>
                <h1>Jonathan Souza</h1>
                <h2>@devjonathansouzasi</h2>
                <p>
                    Fullstack Developer 🚀 <a href="https://github.com/devjonathansouzasi">Github</a>
                </p>
                <ul>
                    <li>
                        <LocationIcon/>
                        Fortaleza, Brazil
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido(a) em 08 de outubro de 1999
                    </li>
                </ul>
                <Followage>
                    <span>
                        following <strong>61</strong>
                    </span>
                    <span>
                        <strong>1001 </strong> followers
                    </span>
                </Followage>
            </ProfileData>
            <Feed/>
    </Container>
  );
}

export default ProfilePage;