import React from 'react';
import {images} from "../../constants"
const SubHeading = ({title}) => (
  <div style={{marginBottom:"2rem", color:"#fff"}} >
    <p className="p__cormorants">{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
