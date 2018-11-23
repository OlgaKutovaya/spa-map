import React from 'react';
import {selectActivePath} from "../actionCreators/pathActions";
import {connect} from 'react-redux';

const PathItem = (props) => {
    return (
        <div className="path-item pt-3 pb-3 d-flex justify-content-around"
             title='show full description'
             onClick={(event) => {
                 props.selectActivePath(props.item.id);
             }}
        >
            <div className='logo'/>
            <div className="content">
                <div className='title'>{props.item.name}</div>
                <p>{props.item.shortDescription}</p>
            </div>
            <div className="path-length">
                {props.item.pathLength}
            </div>
            {/*<div>*/}
                {/*{`${props.item.isActive}`}*/}
            {/*</div>*/}
        </div>
    )
};

export default connect(null, {selectActivePath: selectActivePath})(PathItem);