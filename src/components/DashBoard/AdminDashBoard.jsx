import React, { useEffect, useState } from 'react';
import { BlogCount, ServiceCount, TeamCount } from '../../../APIRequest/APIRequest';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [blog, setBlog] = useState(0);
  const [team, setTeam] = useState(0);
  const [service, setService] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setBlog(await BlogCount());
      setTeam(await TeamCount());
      setService(await ServiceCount());
    })();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-10">Admin Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl mb-2">Blogs</h2>
          <p className="text-3xl font-bold">{blog}</p>
          <button onClick={() => navigate('/admin/blog')} className="mt-4 btn btn-light">See All</button>
        </div>

        <div className="bg-green-500 text-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl mb-2">Teams</h2>
          <p className="text-3xl font-bold">{team}</p>
          <button onClick={() => navigate('/admin/team')} className="mt-4 btn btn-light">See All</button>
        </div>

        <div className="bg-purple-500 text-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl mb-2">Services</h2>
          <p className="text-3xl font-bold">{service}</p>
          <button onClick={() => navigate('/admin/service')} className="mt-4 btn btn-light">See All</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
