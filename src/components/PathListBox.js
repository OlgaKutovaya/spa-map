import React from 'react';
import SearchInputForm from './SearchInputForm'
import PathList from "./PathList";

const PathListBox = () => {
    return (
        //wrapper for input + pathList
        <section className="row">
            {/*input*/}
            <div className='col'>
                <SearchInputForm/>
            </div>
            {/*pathList*/}
            <div className='col'>
                <PathList/>
            </div>
        </section>
    )
};

export default PathListBox;
