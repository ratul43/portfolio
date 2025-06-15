import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/login', formData);
       localStorage.setItem('token', res.data.token);
  
            setMessage(res.data.message);
            setFormData({ email: '', password: '' });

            // এখানে টোকেন থাকলে সেটা লোকাল স্টোরেজে রাখতে পারো (ভবিষ্যতে এটা ব্যবহার হবে)
            
            setTimeout(() => {
                navigate('/admin'); // লগইন সফল হলে ড্যাশবোর্ডে যাবে
            }, 1000);
        } catch (err) {
            if (err.response) {
                setMessage(err.response.data.message);
            } else {
                setMessage("Something went wrong");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {message && (
                    <div className="mb-4 text-center text-red-500">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
