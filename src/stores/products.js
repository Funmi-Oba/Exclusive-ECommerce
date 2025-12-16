export const productsStore = {
  namespaced: true,

  state() {
    return {
      products: [],
      loading: false,
      error: null,
    }
  },

  getters: {
    getProducts(state) {
      return state.products
    },
    getLoading(state) {
      return state.loading
    },
    getError(state) {
      return state.error
    },
  },

  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        commit('setLoading', true)
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) throw new Error('Products fetching failed')

        const data = await response.json()
        commit('setProducts', data)
        console.log(data)
      } catch (err) {
        commit('setError', err.message || 'Someting went wrong while fetching products')
        console.log(err.stack)
        console.log(err.name)
      } finally {
        commit('setLoading', false)
      }
    },
  },
}
