export const state = () => ({
    isActive: false,
    notification: 'We need more coffe',
    notificationDuration: 6000,
})

export const getters = {

    isNotificationActive: state => state.isActive,

    notification: state => state.notification
}

export const mutations = {
    updateNotification: (state, { notification }) => {
        state.isActive = false;
        state.notification = notification;
        state.isActive = true;
    },

    clearNotification: (state) => {
        state.isActive = false;
        state.notification = ""
    }

}

export const actions = {
    fireNotification({ commit, state }, { notification }) {
        return new Promise((resolve, reject) => {
            commit('updateNotification', { notification })
            const TID = setTimeout(
                () => {
                    clearTimeout(TID)
                    commit('clearNotification', { notification })
                    resolve()
                },
                state.notificationDuration || 4e3
            )
        })
    }
}