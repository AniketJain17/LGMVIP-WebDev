import React from 'react';

const Scroll = (props) => {
    return(
        //used to provide a scroll view
        <div style={{overflowY: 'scroll', border: '0px solid black', height: '1200px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;
