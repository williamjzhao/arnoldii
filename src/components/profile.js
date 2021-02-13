import React, { useEffect, useState } from "react";
import { Container } from '@material-ui/core';
import './profile.css'

const Profile = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [plants, setPlants ] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await fetch(`/user/${props.match.params.id}/plants`)
                .then(res => {
                    return res.json();
                }).then(res => {
                    setPlants(res);
                    return;
                });

            await fetch(`/user/${props.match.params.id}`)
                .then(res => {
                    return res.json();
                }).then(res => {
                    setFirstName(res.first_name);
                    setLastName(res.last_name);
                    return;
                });
            return;
        }

        getData();
    }, []);

    return (
        <div id="background">
            <Container id="mainDiv" maxWidth="lg">
                <div class="mainRow">
                    <div class="label">
                        First Name:
                    </div>
                    <div class="data">
                        {firstName}
                    </div>
                </div>
                <div class="mainRow">
                    <div class="label">
                        Last Name:
                    </div>
                    <div class="data">
                        {lastName}
                    </div>
                </div>
                <div id="plantRow">
                    <div class="label">
                        Plants:
                    </div>
                    <div id="plants">
                        {plants.map(plant => 
                            <div class="plantRow">
                                <div>{plant.name}</div>
                                <div>{plant.s_name}</div>
                                <div>{plant.rarity}</div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Profile;