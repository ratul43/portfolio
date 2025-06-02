import React from 'react';

const MenuBar = (props) => {
    return (
        <div>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>         
     {props.children}
        </div>
    );
};

export default MenuBar;