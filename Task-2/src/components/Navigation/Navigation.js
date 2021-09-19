import React from 'react';
import Button from '@material-ui/core/Button';
import './Navbar.css';

const Navigation = ({onButtonSubmit}) => {

            return(
                <nav className='navbar'>
                    <h3 className="logo">UserBuzz</h3>
                    <div className='nav-links'>
                        <Button variant="contained" onClick={onButtonSubmit}>
                            GET USERS
                        </Button>
                    </div>
                </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;