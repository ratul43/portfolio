import React, { useEffect, useState } from "react";
import { CreateEmployee, DeleteEmployee, Employees, UpdateEmployee } from "../../../APIRequest/APIRequest";

const TeamAdmin = () => {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({ name: "", designation: "", img: "" });
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await Employees();
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
      await UpdateEmployee(editId, formData);
    } else {
      await CreateEmployee(formData);
    }
    setFormData({ name: "", designation: "", img: "" });
    setEditId(null);
    fetchData();
  };

  const handleEdit = (employee) => {
    setFormData({ name: employee.name, designation: employee.designation, img: employee.img });
    setEditId(employee._id);
  };

  const handleDelete = async (id) => {
    await DeleteEmployee(id);
    fetchData();
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Team Admin Panel</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={formData.img}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary">
          {editId ? "Update" : "Create"}
        </button>
      </form>

      {/* Employee List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((employee) => (
          <div key={employee._id} className="card bg-base-200 shadow p-4">
            <img
              src={employee.img}
              alt={employee.name}
              className="h-40 w-full object-cover rounded"
            />
            <h2 className="font-bold mt-3">{employee.name}</h2>
            <p>{employee.designation}</p>
            <div className="flex justify-between mt-3">
              <button className="btn btn-sm btn-warning" onClick={() => handleEdit(employee)}>Edit</button>
              <button className="btn btn-sm btn-error" onClick={() => handleDelete(employee._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAdmin;
