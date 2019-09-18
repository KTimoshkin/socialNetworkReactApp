import React from 'react';
import Styles from './Friends.module.sass';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let pagesCount = Math.ceil(props.totalFriendsCount/props.pageSize);

    let pages = [];
    for (let i=1; i<= pagesCount; i++){
        pages.push(i);
    }

    const friendsElement = props.friends.map((element) => {
        return(
            <Friend
                key={element.id}
                id={element.id}
                photos={element.photos.small}
                name={element.name}
                status={element.status}
                followed={element.followed}

                follow={props.follow}
                unfollow={props.unfollow}
            ></Friend>
        );
    });

    const navigationsElements = pages.map((page) => {
        return(
            <span
                className={props.currentPage === page && Styles.selectedPage}
                onClick={(e) => {props.onPageChange(page)}}
            >{page}</span>
        );
    })

    return(
        <div className={Styles.friends}>
            {friendsElement}
            <div className={Styles.pageNavigation}>
                {navigationsElements}
            </div>
        </div>
    );
}

export default Friends