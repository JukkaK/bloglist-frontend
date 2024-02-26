import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  console.log('setting token for user', newToken)
  token = `bearer ${newToken}`
  console.log('setting token for user', newToken)
}

const getAll = () => {
  console.log('sending getall')

  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (post) => {
  console.log('sending create')
  const user = JSON.parse(window.localStorage.getItem("loggedBlogappUser"));
  console.log('user', user)
  console.log('token', token)
  const response = await axios.post(baseUrl, post, {
    headers: {
      Authorization: `${token}`,
    },
  });
return response.data
}

const update = (id, newObject) => {
const request = axios.put(`${ baseUrl }/${id}`, newObject)
return request.then(response => response.data)
}

export default { getAll, create, update, setToken}