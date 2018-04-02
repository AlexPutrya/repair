import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        dropdown: {
            isActive: false
        },
        filter: {
            type: "all"
        },
        modal: {
            isActive: false,
            content: ''
        }
    },
    mutations: {
        changeDropdownVision(state, payload){
            if(!payload){
                state.dropdown.isActive = !state.dropdown.isActive;
            }else{
                state.dropdown.isActive = payload;
            }
        },
        changeModalVision(state, payload){
            state.modal.isActive = payload;
        },
        setModalContent(state, payload){
            state.modal.content = payload;
        },
        changeFilter(state, payload){
            state.filter.type = payload;
        }
    },
    actions: {
        closeModal(context){
            context.commit('changeModalVision', false);
        }
    }
});

new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
});