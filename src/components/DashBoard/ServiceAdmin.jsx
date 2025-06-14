import React, { useEffect, useState } from "react";
import { CreateService, DeleteService, Service, UpdateService } from "../../../APIRequest/APIRequest";

const ServiceAdmin = () => {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({ icon: "", title: "", description: "" });
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await Service();
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
      await UpdateService(editId, formData);
    } else {
      await CreateService(formData);
    }
    setFormData({ icon: "", title: "", description: "" });
    setEditId(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setFormData({ icon: item.icon, title: item.title, description: item.description });
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    await DeleteService(id);
    fetchData();
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Service Admin Panel</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          name="icon"
          placeholder="Icon URL"
          value={formData.icon}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        />
        <button type="submit" className="btn btn-primary">{editId ? "Update" : "Create"}</button>
      </form>

      {/* Service List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((item) => (
          <div key={item._id} className="card bg-base-200 shadow p-4">
            <img src={item.icon} alt={item.title} className="h-40 w-full object-cover rounded" />
            <h2 className="font-bold mt-3">{item.title}</h2>
            <p>{item.description}</p>
            <div className="flex justify-between mt-3">
              <button className="btn btn-sm btn-warning" onClick={() => handleEdit(item)}>Edit</button>
              <button className="btn btn-sm btn-error" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAdmin;
