import React from 'react';
// import {connect} from 'react-redux';

const PathItem = (props) => {
    return (
        <div className="path-item">
            <div className='logo'/>
            <div className="content">
                <div className='title'>{props.item.name}</div>
                <p>{props.item.shortDescription}</p>
            </div>
            <div className="path-length">
                {props.item.pathLength}
            </div>
        </div>
    )
};

export default PathItem;