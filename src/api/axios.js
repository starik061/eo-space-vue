import axios from 'axios'

export async function fetchTasksData() {
  const URL = '/eo-space-vue/tasks.json'
  const response = await axios.get(URL)
  return response.data
}
