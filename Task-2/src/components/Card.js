import React from 'react';
import '../containers/styles.css';

const Card = ({ name, email, id, lname}) => {
    return (
        <div className='tc grow bg-lightest col pa5 ma3 dib shadow-10'>
          <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
          <div>
        <br />
            <h2>{name} {lname}</h2>
        <br />
            <h3>{email}</h3>
          </div>
        </div>
        );
      }

export default Card;
