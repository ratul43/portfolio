import React, { useEffect, useState } from "react";
import { CreatePost, DeletePost, PostList, UpdatePost } from "../../../APIRequest/APIRequest";

const BlogAdmin = () => {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "", img: "" });
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await PostList();
    setList(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await UpdatePost(editId, formData);
    } else {
      await CreatePost(formData);
    }
    setFormData({ title: "", description: "", img: "" });
    setEditId(null);
    fetchData();
  };

  const handleEdit = (post) => {
    setFormData({ title: post.title, description: post.description, img: post.img });
    setEditId(post._id);
  };

  const handleDelete = async (id) => {
    await DeletePost(id);
    fetchData();
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Blog Admin Panel</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="input input-bordered w-full" />
        <input type="text" name="img" placeholder="Image URL" value={formData.img} onChange={handleChange} className="input input-bordered w-full" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="textarea textarea-bordered w-full"></textarea>
        <button type="submit" className="btn btn-primary">{editId ? "Update" : "Create"}</button>
      </form>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((post) => (
          <div key={post._id} className="card bg-base-200 shadow p-4">
            <img src={post.img} alt={post.title} className="h-40 w-full object-cover rounded" />
            <h2 className="font-bold mt-3">{post.title}</h2>
            <p>{post.description}</p>
            <div className="flex justify-between mt-3">
              <button className="btn btn-sm btn-warning" onClick={() => handleEdit(post)}>Edit</button>
              <button className="btn btn-sm btn-error" onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogAdmin;
