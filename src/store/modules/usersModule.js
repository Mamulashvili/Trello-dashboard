import { uuid } from '@/helpers/utils';

export default ({
    namespaced: true,
    state: {
        users: [
            {
                id: uuid(),
                name: "Shota Mamulashvili",
                role: "Developer",
                tasks: [],
            },
            {
                id: uuid(),
                name: "John Doe",
                role: "Developer",
                tasks: [],
            },
            {
                id: uuid(),
                name: "Sam Smith",
                role: "Developer",
                tasks: [],
            },
            {
                id: uuid(),
                name: "Gvantsa Kvlividze",
                role: "Project Manager",
                tasks: [],
            },
        ],
    },

    mutations: {},

    actions: {},

    getters: {
        getUsers: state => state.users,

        getUserById: state => id => state.users.find(user => user.id = id),
    },
})