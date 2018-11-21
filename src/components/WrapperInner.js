 import React from 'react';
 import PathListBox from './PathListBox';

 const WrapperInner = () => {
     return (
         <main className="row">
             {/*leftside*/}
             <div className='col'>
                 <PathListBox />
             </div>
             {/*rightside*/}
             <div className='col'>

             </div>
         </main>
     )
 };

 export default WrapperInner;