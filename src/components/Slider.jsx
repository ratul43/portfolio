import React from 'react';

const Slider = () => {
    return (
        <div>
            <div>
  <div className="flex h-screen items-center justify-center bg-gray-900 p-5">
    <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
      <div>
        <h1 className="mb-2 text-3xl font-bold text-white">
          <span className="text-green-500">Hi,</span> I'm John Witson
        </h1>
        <h1 className="mb-2 text-3xl font-bold text-white">
           Software Engineer
        </h1>
        <p className="mb-6 text-white">
          Self-motivated and adaptable developer with applicable database 
          knowledge and coding skills. Organized programmer
           looking for an opportunity to grow as
            a developer and support an ambitious startup
             technology company. Collaborative communicator with relationship building skills.
        </p>
        <div className="flex justify-center space-x-5">
         
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
            Learn More
            
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="md:size-96 size-72 rounded-full "
        />
      </div>
    </div>
  </div>
</div>


            </div>
    );
};

export default Slider;