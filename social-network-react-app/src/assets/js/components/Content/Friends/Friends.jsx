import React, {Component} from 'react';
import Styles from './Friends.module.sass'
import Friend from "./Friend/Friend";
import * as axios from 'axios';
import img from '../../../../img/user-photo.png'

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

    friendsElement = this.props.friends.map((element) => {
        return(
            <div >
                <img src={ element.photos.small != null ? element.photos.small : img} alt=""/>
                <p>{element.name}</p>
                <p>{element.status}</p>
                {element.followed
                    ? <button onClick={() => this.props.unfollow(element.id)}>Отписаться</button>
                    : <button onClick={() => this.props.follow(element.id)}>Подписаться</button>
                }
            </div>
        );
    })

    render() {
        let pagesCount = Math.ceil(this.props.totalFriendsCount/this.props.pageSize);

        let pages = [];
        for (let i=1; i<= pagesCount; i++){
            pages.push(i);
        }
        return(
            <div className={Styles.friends}>
                {pages.map((page) => {
                    return(
                        <span
                            className={this.props.currentPage === page && Styles.selectedPage}
                            onClick={(e) => {this.onPageChange(page)}}
                        >{page}</span>
                    );
                })}
                {
                this.props.friends.map((element) => {
                    return(
                        <div >
                            <img src={ element.photos.small != null ? element.photos.small : img} alt=""/>
                            <p>{element.name}</p>
                            <p>{element.status}</p>
                            {element.followed
                                ? <button onClick={() => this.props.unfollow(element.id)}>Отписаться</button>
                                : <button onClick={() => this.props.follow(element.id)}>Подписаться</button>
                            }
                        </div>
                        );
                    })
                }
            </div>
        );
    }
}