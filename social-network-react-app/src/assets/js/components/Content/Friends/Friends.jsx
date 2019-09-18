import React, {Component} from 'react';
import Styles from './Friends.module.sass'
import Friend from "./Friend/Friend";
import * as axios from 'axios';

export default class Friends extends Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setFriendsCount(response.data.totalCount);
            });
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalFriendsCount/this.props.pageSize);

        let pages = [];
        for (let i=1; i<= pagesCount; i++){
            pages.push(i);
        }
        return(
            <div className={Styles.friends}>
                {this.props.friends.map((element) => {
                    return(
                        <Friend
                            key={element.id}
                            id={element.id}
                            photos={element.photos.small}
                            name={element.name}
                            status={element.status}
                            followed={element.followed}

                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                        ></Friend>
                        );
                    })
                }
                <div className={Styles.pageNavigation}>
                    {pages.map((page) => {
                        return(
                            <span
                                className={this.props.currentPage === page && Styles.selectedPage}
                                onClick={(e) => {this.onPageChange(page)}}
                            >{page}</span>
                        );
                    })}
                </div>
            </div>
        );
    }
}