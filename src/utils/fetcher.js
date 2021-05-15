import axios from 'axios'
const fetcher = (...args) => axios.get(...args).then(res => res.data)
export default fetcher
