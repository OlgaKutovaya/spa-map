import React from 'react';

const Header = () => {
    return (
        <header className="row">
            <div className='col'>
                <div className='d-flex justify-content-between'>
                    <div className="logo">
                        <div className="companyName">
                            COMPANY NAME
                        </div>
                    </div>
                    <button type="button"
                            className="btn btn-primary">
                        Add path
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;