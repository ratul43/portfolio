import React, { useEffect, useState } from 'react';
import { Service } from '../../APIRequest/APIRequest';

const ServiceSection = (props) => {

    let [list, setList] = useState([])

    useEffect(()=>{

        (async()=>{
            let res = await Service()
            setList(res)
        })()

    },
[])

    return (
        <div>    
            

            <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {
                list.map((item, index)=>(

                <div>
                    <img src={item.icon} alt="" />

                <h1 key={index.id} class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
                ))
                
                
                
            }

        </div>
    </div>
</section>
            {props.children}
        </div>
    );
};

export default ServiceSection;