import { createStore } from 'vuex'  // Import the createStore function from Vuex
import axios from 'axios';
import {userKey} from '../global.js'

// Create a new Vuex store instance
const store = createStore({
    state:{
        user: null,
    },

    // Mutations are functions responsible for synchronously changing the state
    mutations:{
        setUser(state, user){
            state.user = user;
            if(user){
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`;
            }
            else{
                delete axios.defaults.headers.common['Authorization'];
            }
        },
        initUser(state){
            const stored = localStorage.getItem(userKey);
            if(stored){
                const user = JSON.parse(stored);
                state.user = user;
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`;
            }
        }
    }
})

export default store  // Export the store instance for use in the Vue app