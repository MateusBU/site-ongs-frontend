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
                console.log(user);
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`;
            }
            else{
                console.log('no user');
                delete axios.defaults.headers.common['Authorization'];
            }
        },
        initUser(state){
            const stored = localStorage.getItem(userKey);
                console.log('stored');
                console.log(stored);
            if(stored){
                console.log('isLoggedIn');
                const user = JSON.parse(stored);
                console.log(user);
                state.user = user;
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`;
            }
        }
    }
})

export default store  // Export the store instance for use in the Vue app