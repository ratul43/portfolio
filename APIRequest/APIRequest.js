import axios from 'axios'

const BaseURL = "http://localhost:5000/api"

export async function menuList() {
    let res = await axios.get(BaseURL + "/menulist")
return res.data
}

export async function PostList() {
    let res = await axios.get(BaseURL + "/postlist")
return res.data
}

export async function Employees() {
    let res = await axios.get(BaseURL + "/employee")
    return res.data
}

export async function Service(){
    let res = await axios.get(BaseURL + "/service")
    return res.data
}







