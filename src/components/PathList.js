import React from 'react';
import {connect} from 'react-redux';
import PathItem from "./PathItem";

const PathList = (props) => {
    return (
        <div className='col'>
            {console.log(props)}
            {props.path.paths.map((item) => {
                return (
                  <PathItem key={item.id} item={item}/>
                )
            })
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        path: state.path
    }
};

// const mapDispatchToProps = () => {
//     return bindActionCreators({selectCar: selectCar}, dispatch);
// };


export default connect(mapStateToProps)(PathList);
