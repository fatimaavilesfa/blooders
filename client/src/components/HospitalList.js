import React, { Fragment } from 'react';

const Hospital = ({ name, address, phone, image, registered}) => {
  return (
    <Fragment>
      <h2>{name}</h2>
      <img src={image} alt='hospital'/>
      <p>{address}, {phone}</p>
      <ul>
            <li>key={i},{registered}, {registered[i]} </li>
    </ul>
    </Fragment>
  );
}

export default Hospital;