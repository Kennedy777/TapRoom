import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid'; 

import Paper from '@material-ui/core/Paper';

function NewKegForm(props){
 let _name = null;
 let _brand = null;
 let _price = null; 
 let _aBV = null;
 let _img = null;

 function handleNewKegFormSubmission(event) {
   event.preventDefault(); 
   props.onNewKegCreation({name:_name.value, brand: _brand.vale, price: _price.value, aBV: _aBV.value; img = _image.value, id: v4()});
   _name.value = '';
   _brand.value = '';
   _price.value = '';
   _aBV.value = '';
   _img.value = ''; 
 }

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
