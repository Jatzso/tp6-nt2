import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colorCount: 6,
        isHard: true,
        colors: [],
        pickedColor: '',
        message: '',
        btnMessage: 'New Colors',
    },
    actions: {
        setColorsAction({commit}, colors){
            commit('setColorsMutation', colors)
        },
        setPickedColorAction({commit}, color){
            commit('setPickedColorMutation', color);
        },
        setMessageRestartAction({commit}, message){
            commit('setMessageRestartMutation', message)
        },
        setIsHardAction({commit}, value){
            commit('setIsHardMutation', value);
        },
        setColorCountAction({commit}, count){
            commit('setColorCountMutation', count);
        },
        setMessageWinAction({commit}, message){
            commit('setMessageWinMutation', message);
        },
        setMessageRestarButtontAction({commit}, message){
            commit('setMessageRestarButtontMutation', message);
        }
    }, 
    mutations: {
        setColorsMutation(state, colors){
            state.colors = colors
        },
        setPickedColorMutation(state, color){
            state.pickedColor = color
        },
        setMessageRestartMutation(state, message){
            state.message = message
        },
        setIsHardMutation(state, value){
            state.isHard = value
        },
        setColorCountMutation(state, count){
            state.colorCount = count;
        },
        setMessageWinMutation(state, message){
            state.message = message;
        },
        setMessageRestarButtontMutation(state, message){
            state.btnMessage = message;
        }
    }
})