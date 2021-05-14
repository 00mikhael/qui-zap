const fetcher = (...args) => fetch(...args).then(res => res.json()).then(data => data);

export default fetcher
