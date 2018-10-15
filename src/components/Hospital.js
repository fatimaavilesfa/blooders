import React, { Fragment } from 'react';

const Hospital = ({id, name, address, phone, image, registered }) => {
  return (
    <Fragment>
      <h2>{name}</h2>
      <img src={image} alt='hospital'/>
      <p>{address, phone }</p>
    </Fragment>
  );
}

export default Hospital;
