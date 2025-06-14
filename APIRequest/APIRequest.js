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


//====================== TEAM EMPLOYEE CRUD ======================

// Read All Employees
export const Employees = async () => {
    try {
        let res = await axios.get(`${BaseURL}/employee`);
        return res.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

// Create Employee
export const CreateEmployee = async (postBody) => {
    try {
        let res = await axios.post(`${BaseURL}/employee`, postBody);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};


// Update Employee
export const UpdateEmployee = async (id, postBody) => {
    try {
        let res = await axios.put(`${BaseURL}/employee/${id}`, postBody);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

// Delete Employee
export const DeleteEmployee = async (id) => {
    try {
        let res = await axios.delete(`${BaseURL}/employee/${id}`);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};



// Read All Services
export const Service = async () => {
    try {
        let res = await axios.get(`${BaseURL}/service`);
        return res.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

// Create Service
export const CreateService = async (postBody) => {
    try {
        let res = await axios.post(`${BaseURL}/service`, postBody);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

// Update Service
export const UpdateService = async (id, postBody) => {
    try {
        let res = await axios.put(`${BaseURL}/service/${id}`, postBody);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

// Delete Service
export const DeleteService = async (id) => {
    try {
        let res = await axios.delete(`${BaseURL}/service/${id}`);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};



export const BlogCount = async () => {
    try {
        let res = await axios.get(`${BaseURL}/postlist`);
        return res.data.length;
    } catch (err) {
        console.error(err);
        return 0;
    }
};


export const TeamCount = async () => {
    try {
        let res = await axios.get(`${BaseURL}/employee`);
        return res.data.length;
    } catch (err) {
        console.error(err);
        return 0;
    }
};


export const ServiceCount = async () => {
    try {
        let res = await axios.get(`${BaseURL}/service`);
        return res.data.length;
    } catch (err) {
        console.error(err);
        return 0;
    }
};
















