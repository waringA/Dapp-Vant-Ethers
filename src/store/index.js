import { createStore } from "vuex";
import { ethers } from "ethers";

export default createStore({
    state: {
        address: '',
        balance: '',
    },
    getters: {},
    mutations: {
        ADDRESS(state, payload) {
            state.address = payload
        },
        BALANCE(state, payload) {
            state.balance = payload
        }
    },
    actions: {

    },
    modules: {}
})