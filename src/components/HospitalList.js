import React, {Fragment} from 'react';
import Hospital from './Hospital';

const HospitalList = ({ data }) => {
  return (
    <Fragment>
      {
        data.map((hospital, i) => {
          return (
            <Hospital
              key={i}
              id={data[i].idHospital}
              name={data[i].name}
              address={data[i].address}
              phone={data[i].phone}
              image={data[i].image}
              registered={data[i].registered}
            />
          )
        })

      }
    </Fragment>
  );
}

export default HospitalList;
