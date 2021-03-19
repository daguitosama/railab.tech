export const state = () => ({
    isActive: false,
    error: 'We need more coffe',
    errorDuration: 6000,
})

export const getters = {

    isErrorActive: state => state.isActive,

    error: state => state.error
}

export const mutations = {
    updateError: (state, { error }) => {
        state.isActive = false;
        state.error = error;
        state.isActive = true;
    },

    clearError: (state) => {
        state.isActive = false;
        state.error = ""
    }

}

export const actions = {
    fireError({ commit, state }, { error }) {
        return new Promise((resolve, reject) => {
            commit('updateError', { error })
            const TID = setTimeout(
                () => {
                    clearTimeout(TID)
                    commit('clearError', { error })
                    resolve()
                },
                state.errorDuration || 4e3
            )
        })
    }
}