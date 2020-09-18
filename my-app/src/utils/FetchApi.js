import axios from 'axios'

export function FetchApi() {
    return (
        axios
        .get('https://lambdabw-virtual-backend.herokuapp.com/projects')
        .then((res) => {
            console.log(res)
            return res
        })
        .catch ((err) => console.log("Fetch Api err", err))
    )
}