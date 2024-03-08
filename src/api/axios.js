import axios from 'axios'

export async function fetchTasksData() {
  const URL = '/db/tasks.json'
  const response = await axios.get(URL)
  return response.data
}
