import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';
import BlogCard from '../components/BlogCard';

const HomePage = () => { 


    return (
        <NavBar>
            <Slider>
                <div className="flex w-full flex-col">
  <div className="divider"></div>
    <div className="card bg-base-300 rounded-box grid h-20 place-items-center">Blog</div>

  <div className="divider"></div>
</div>
                <BlogCard>
                    
                </BlogCard>
            </Slider>
        </NavBar>
    );
};

export default HomePage;