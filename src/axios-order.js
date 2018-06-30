import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-builder-r1.firebaseio.com/'
})

export default instance
