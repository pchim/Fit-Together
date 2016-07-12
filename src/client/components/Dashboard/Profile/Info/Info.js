import React, { PropTypes } from 'react';

const person = {
  name: 'Jessica Jones',
  age: 36,
  weight: 130,
  height: '5.3',
  bmi: 20,
  bodyFat: 11,
  gender: 'Female',
  dob: '11/12/79',
  image: 'http://i988.photobucket.com/albums/af3/TheLightChasers/Portraits/portrait-sigma-50mm-f14-hsm-canon-eos-5d-mk2-face-Favimcom-473053_zpsd55e8d8e.jpg'
};
const image = 'http://khns.org/wp-content/uploads/2014/07/profile-icon-400x380.png';

const Info = ({ user }) => {
  return (
    <div className="top-info">
      <div>
        <img src={image} id="user-image" alt="test" />
      </div>
      <div>
        <div style={{ height: 20 + "px" }}>
          <h4>{user.name}</h4>
        </div>
        <div className="row" style={{ height: 180 + "px" }}>
          <div className="col-md-2">Age: {person.age}</div>
          <div className="col-md-3">Weight: {user.weight}</div>
          <div className="col-md-3">Height: {person.height}</div>
          <div className="col-md-2">BMI: {user.bmi}</div>
          <div className="col-md-2">{person.bodyFat} % Body Fat</div>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  user: PropTypes.object
};

export default Info;
