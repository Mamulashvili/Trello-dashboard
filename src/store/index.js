import { createStore } from 'vuex'
import data from '@/data/board.js';
import { saveStatePlugin, uuid } from '@/helpers/utils';

import usersModule from '@/store/modules/usersModule';
import statusesModule from '@/store/modules/statusesModule';
import prioritiesModule from '@/store/modules/prioritiesModule';

const board = JSON.parse(localStorage.getItem('board')) || data;

export default createStore({
  plugins: [saveStatePlugin],
  state: {
    board
  },

  mutations: {
    CREATE_TASK(state, { taskName, columnName }) {
      for (const column of state.board.columns) {
        if (column.name === columnName) {
          column.tasks.push({
            name: taskName,
            id: uuid(),
            description: "",
            userAssigned: null,
          })
        }
      }
    },

    UPDATE_TASK(_state, { task, key, value }) {
      task[key] = value;
    },

    INSERT_TASK_VALUE(_state, { task, key, value, index = null }) {
      if (index)
        return task[key].splice(index, 0, value)
      else
        return task[key].push(value);
    },

    MOVE_TASK(state, { from, to, fromTaskIndex, toTaskIndex }) {
      const targetTask = from.splice(fromTaskIndex, 1)[0];
      to.splice(toTaskIndex, 0, targetTask);
    },

    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns;
      const targetColumn = columnList.splice(fromColumnIndex, 1)[0];

      columnList.splice(toColumnIndex, 0, targetColumn);
    },

    CREATE_COLUMN(state, columnName) {
      return state.board.columns.push({
        name: columnName,
        tasks: [],
      })
    },
  },

  actions: {
    createTask({ commit }, payload) {
      commit("CREATE_TASK", payload)
    },

    updateTask({ commit }, payload) {
      commit('UPDATE_TASK', payload)
    },

    insertTaskValue({ commit }, payload) {
      commit("INSERT_TASK_VALUE", payload)
    },

    moveTask({ commit }, payload) {
      commit('MOVE_TASK', payload);
    },

    moveColumn(context, payload) {
      context.commit('MOVE_COLUMN', payload)
    },

    createColumn({ commit }, { columnName }) {
      commit('CREATE_COLUMN', columnName)
    },
  },

  getters: {
    getBoardData: state => state.board,

    getTaskById: state => id => {
      for (const column of state.board.columns) {
        for (const task of column.tasks) {
          if (task.id === id)
            return task;
        }
      }
    },

    getComments: (state, getters) => id => {
      return id, getters.getTaskById(id)?.comments;
    }
  },

  modules: {
    users: usersModule,
    statuses: statusesModule,
    priorities: prioritiesModule,
  }
})
