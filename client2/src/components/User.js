import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div `
    border: 1px solid red;
    margin: 1em;
    padding-left: 1em;
`

function User(props) {
    return (
        <UserCard>
            <h1>{props.name}</h1>
            <h2>{props.country}</h2>
            <p>{props.searches}</p>
        </UserCard>
    )
}

export default User; 