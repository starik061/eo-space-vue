import axios from 'axios'

export async function fetchTasksData() {
  const URL = '/tasks.json'
  const response = await axios.get(URL)
  return response.data
}
