import React from 'react';

const MenuBar = (props) => {
    return (
        <div>
            This is MenuBar
            {props.children}
        </div>
    );
};

export default MenuBar;