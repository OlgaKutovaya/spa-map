 import React from 'react';
 import PathListBox from './PathListBox';
 import {connect} from 'react-redux';

 const WrapperInner = (props) => {
     let activeItem = null;

     const activeItemIndex = props.path.paths.findIndex((item) => {
         return item.isActive
     });
     // console.log(activeItemIndex);
     if (activeItemIndex > -1) {
         activeItem = props.path.paths[activeItemIndex];
     }
     return (
         <main className="row main-content-wrapper">
             {/*leftside*/}
             <div className='col'>
                     <PathListBox />
             </div>
             {/*rightside*/}
             <div className='col map-api'>
                 {activeItem ? (<div className="map-api-item">
                    <div>
                        {activeItem.name}
                        {activeItem.fullDescription}
                    </div>
                 </div>) : (
                     <div className="map-no-active-item">

                     </div>
                 )}
             </div>
         </main>
     )
 };


 const mapStateToProps = (state) => {
     return {
         path: state.path
     }
 };

 export default connect(mapStateToProps, {}) (WrapperInner);