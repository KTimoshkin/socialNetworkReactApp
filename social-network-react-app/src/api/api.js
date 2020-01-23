import axios from 'axios';

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "1135537c-b21a-4e50-85ed-7fbd119a636b"}
});

export const friendsAPI = {

    /**
     * Получает список друзей на странице
     *
     * @param {number} currentPage - текущая страница
     * @param {number} pageSize - размер страницы
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    getFriends(currentPage, pageSize) {
        return(
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        );
    },


    /**
     * Подписаться на пользователя
     *
     * @param {number} id - пользователь
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    follow(id) {
        return(
            instance.post(`follow/${id}`, {})
        );
    },


    /**
     * Отписаться от пользователя
     *
     * @param {number} id - пользователь
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    unfollow(id) {
        return(
            instance.delete(`follow/${id}`)
        );
    },
};

export const authAPI = {

    /**
     * Аутентификация
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    auth() {
        return(
            instance.get(`auth/me`)
        );
    },


    /**
     * Авторизация
     *
     * @param {string} email - Пользователь
     * @param {string} password - Пароль
     * @param {boolean} rememberme - Запомнить
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    login(email, password, rememberme = false) {
        return(
            instance.post(`auth/login`, {email, password, rememberme})
        );
    },


    /**
     * Разлогин
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    logout() {
        return(
            instance.delete(`auth/login`)
        );
    },
};

export const profileAPI = {

    /**
     * Получить пользователя
     *
     * @param {number} userId - Пользователь
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    getUser(userId) {
        return(
            instance.get(`profile/${userId}`)
        );
    },


    /**
     * Получить статус пользователя
     *
     * @param {number} userId - Пользователь
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    getStatus(userId) {
        return(
            instance.get(`profile/status/${userId}`)
        );
    },


    /**
     * Обновить статус пользователя
     *
     * @param status - Новый статус
     *
     * @returns {Promise<AxiosResponse<T>>}
     */
    updateStatus(status) {
        return(
            instance.put(`profile/status`, {status: status})
        );
    }
}