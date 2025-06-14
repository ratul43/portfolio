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

export const CreatePost = async (postData) => {
  const res = await axios.post(`${BaseURL}/createpost`, postData);
  return res.data;
};

export const UpdatePost = async (id, postData) => {
  const res = await axios.put(`${BaseURL}/updatepost/${id}`, postData);
  return res.data;
};

export const DeletePost = async (id) => {
  const res = await axios.delete(`${BaseURL}/deletepost/${id}`);
  return res.data;
};














export async function Employees() {
    let res = await axios.get(BaseURL + "/employee")
    return res.data
}

export async function Service(){
    let res = await axios.get(BaseURL + "/service")
    return res.data
}







