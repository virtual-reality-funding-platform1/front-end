import axios from 'axios'
import { axiosWithAuth } from '../utils/AxiosWithAuth'


export function FetchApi() {
    return (
        axiosWithAuth()
        .get('https://lambdabw-virtual-backend.herokuapp.com/projects')
        .then((res) => {
            console.log(res)
            return res
        })
        .catch ((err) => console.log("Fetch Api err", err))
    )
}