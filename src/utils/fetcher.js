import axios from 'axios'

const fetcher = (...args) => axios.get(...args).then(res => res.data).catch(e => e.message);

export default fetcher
