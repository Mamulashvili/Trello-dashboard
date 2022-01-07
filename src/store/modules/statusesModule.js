export default ({
    namespaced: true,
    state: {
        statuses: [
            {
                id: 0,
                name: "Grooming",
            },
            {
                id: 1,
                name: "Ready to start",
            },
            {
                id: 2,
                name: "In progress",
            },


        ],
    },

    mutations: {},

    actions: {},

    getters: {
        getStatuses: state => state.statuses,
    },
})