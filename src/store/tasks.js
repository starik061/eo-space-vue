import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    results: []
  }),
  getters: {
    getTasks: (state) => state.tasks,
    getResults: (state) => state.results
  },
  actions: {
    changeTasks(taskData) {
      this.tasks = taskData
    },
    changeResults(res) {
      this.results.push(res)
    }
  }
})
