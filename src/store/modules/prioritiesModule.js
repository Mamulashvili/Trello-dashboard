export default ({
    namespaced: true,
    state: {
        priorities: [
            {
                id: 0,
                name: "Low",
            },
            {
                id: 1,
                name: "Medium",
            },
            {
                id: 2,
                name: "Hight",
            },
            {
                id: 3,
                name: "Urgent",
            },
        ],
    },

    mutations: {},

    actions: {
        updateTaskPriority({ dispatch, rootGetters, }, payload) {
            const task = rootGetters.getTaskById(payload.id);

            dispatch("updateTask", {
                task,
                key: "priority",
                value: payload.priority
            },
                { root: true });
        }
    },

    getters: {
        getPriorities: state => state.priorities,
    },
})