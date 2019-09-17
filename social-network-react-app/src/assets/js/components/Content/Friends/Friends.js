import React from 'react';
import Styles from './Friends.module.sass'
import Friend from "./Friend/Friend";

const Friends= (props) => {
    if (props.friends.length === 0){
        props.setFriends([
            {id: 1, followed: true, fullname: 'User1', status: 'status1', location: {city: 'City1', country: 'Country1'}},
            {id: 2, followed: false, fullname: 'User2', status: 'status2', location: {city: 'City2', country: 'Country2'}},
            {id: 3, followed: true, fullname: 'User3', status: 'status3', location: {city: 'City3', country: 'Country3'}},
            {id: 4, followed: false, fullname: 'User4', status: 'status4', location: {city: 'City4', country: 'Country4'}},
            {id: 5, followed: true, fullname: 'User5', status: 'status5', location: {city: 'City5', country: 'Country5'}},
            {id: 6, followed: false, fullname: 'User6', status: 'status6', location: {city: 'City6', country: 'Country6'}},
            {id: 7, followed: true, fullname: 'User7', status: 'status7', location: {city: 'City7', country: 'Country7'}},
            {id: 8, followed: false, fullname: 'User8', status: 'status8', location: {city: 'City8', country: 'Country8'}},
            {id: 9, followed: true, fullname: 'User9', status: 'status9', location: {city: 'City9', country: 'Country9'}},
            {id: 10, followed: false, fullname: 'User10', status: 'status10', location: {city: 'City10', country: 'Country10'}}
        ]);
    }


    let friendsElement = props.friends.map((element) => {
        return(
            <Friend
                key={element.id}
                userId={element.id}
                followed={element.followed}
                fullname={element.fullname}
                status={element.status}
                location={element.location}
            ></Friend>
        );
    });

    return(
        <div className={Styles.friends}>
            {friendsElement}
        </div>
    );
}

export default Friends;