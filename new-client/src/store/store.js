import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import Cookies from "js-cookie";

Vue.use(Vuex);

//You may notice how heavily I have commented this code.
//That is because, in case this all crashes and burns, 
//at least it was a learning experience for everyone :)

//Creates the persistance for Cookies
//This data is saved with cookies because it is most important to the server.
//This one is heavily commented, to serve as a guide.

const persistCookies = new VuexPersist({
  //If you are in strict, this MUST be true.
  //strictMode: true,

  //These are default values that could be changed (for example, storage as window.sessionStorage)
  //key: 'vuex'
  //storage: window.localStorage,

  //pulls from Cookies and then sets Cookies. 
  //expires could be arbitrary high, this is a random value for now.
  restoreState: (key, storage) => Cookies.getJSON(key),
  saveState: (key, state, storage) =>
    Cookies.set(key, state, {
      expires: 365
    }),

  //The list of objects to be saved. By default saves everything.
  //you could also use "modules: ['token']" instead. But they cannot be used together.
  reducer: state => ({
    token: state.token
  })
  
  //The method to filter out certain types of mutations.
  //It applies info about the mutation using mutation.type.
  //If the result is false, don't save with the reducer.
  //Not necessary unless there are mutations that call very rapidly and would hurt performance.
  //Generally good practice to filter out unrelated mutations.

  //filter: mutation => (true)
})

//Creates the persistance for Local Storage
//This uses local storage because it is most important to the client.
const persistLocal = new VuexPersist({
  storage: window.localStorage,
  reducer: state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn
  })
})

const store = new Vuex.Store({
  //The only change I make to the original code.
  //strict interferes with persist and shouldn't be used for production according to the docs.
  //strict: true,

  state: {
    token: null,
    user: null,
    isLoggedIn: false
  },
  mutations: {
    setUser(state, res) {
      state.token = res.token;
      state.user = res.user;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.user = null;
      state.isLoggedIn = false;
    }
    //If you want to use this in strict mode, you must add RESTORE_MUTATION = <name>.RESTORE_MUTATION
    //That means you can only have 1 persist without jumping through loopholes, so strict should be false.
  },
  actions: {
    setUser({ commit }, res) {
      commit("setUser", res);
    },
    logOut({ commit }) {
      commit("logOut");
    }
  },
  plugins: [persistCookies.plugin, persistLocal.plugin]
});

export default store;
