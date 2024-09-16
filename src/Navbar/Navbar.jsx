import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [show, setshow] = useState(false)
    return (
        <div className="container">
            <div className="row">
                <div className='col-sm-12 col-md-12 col-lg-12 col-12'>
                    <div className="logo">
                        <div>
                            <h6>Snap<span className='text-primary'>Tik</span></h6>
                        </div>
                    </div>

                </div>
                
            </div>



        </div>
    )
}

export default Navbar;