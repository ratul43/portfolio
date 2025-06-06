import React, { useEffect, useState } from 'react';
import { Employees } from '../../APIRequest/APIRequest';

const TeamSection = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await Employees();
      setList(res);
    })();
  }, []);

  return (
    <section className="bg-base-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, index) => (
            <div key={index} className="card bg-white shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={item.img || "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=739&q=80"}
                  alt={item.name}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-lg">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.designation}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
