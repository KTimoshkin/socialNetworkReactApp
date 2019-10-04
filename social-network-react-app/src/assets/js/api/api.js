import axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "1135537c-b21a-4e50-85ed-7fbd119a636b"}
});

export const friendsAPI = {
    getFriends(currentPage, pageSize) {
        return(
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        );
    },

    follow(id) {
        return(
            instance.post(`follow/${id}`, {})
        );
    },

    unfollow(id) {
        return(
            instance.delete(`follow/${id}`)
        );
    },
};

export const authAPI = {
    auth() {
        return(
            instance.get(`auth/me`)
        );
    },

    login(email, password, rememberme = false) {
        return(
            instance.post(`auth/login`, {email, password, rememberme})
        );
    },

    logout(email, password, rememberme = false) {
        return(
            instance.delete(`auth/login`)
        );
    },
};

export const profileAPI = {
    getUser(userId) {
        return(
            instance.get(`profile/${userId}`)
        );
    },
    getStatus(userId) {
        return(
            instance.get(`profile/status/${userId}`)
        );
    },
    updateStatus(status) {
        return(
            instance.put(`profile/status`, {status: status})
        );
    }
}