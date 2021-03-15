export const state = () => ({
    uiState: {
        navOpen: false
    }
})

export const getters = {
    navOpen: state => {
        return state.uiState.navOpen
    }
}

export const mutations = {
    toogleNav: (state) => {
        state.uiState.navOpen = !state.uiState.navOpen
    },
    closeNav: (state)=>{
        state.uiState.navOpen = false
    }
}

// export const actions = {
//     updateActionValue({ commit }) {
//         commit('updateValue', payload)
//     }
// }