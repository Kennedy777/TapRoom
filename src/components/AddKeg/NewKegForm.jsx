import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid'; 

import Paper from 'material-ui/core/Paper';
import Divider from 'material-ui/Paper';

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

 return (
   <div>
     <h1 className = "subtitle">Add Keg</h1>
     <form onSubmit={handleNewKegFormSubmission}>
      <Paper zDepth={1}>
        <input type="text" id="name" placeholder="Name"
          ref={(input) => {_name = input;}}/>
      <Divider />
          <input type="text" id="brand" placeholder="Brand"
          ref={(input) => {_brand = input;}}/>
      <Divider />
          <input type="number" id="price" placeholder="Price per Pint"\
          ref={(input) => {_price = input;}}/>
      <Divider /> 
          <input type="number" id="aBV" placeholder="Alcohol by Volume" 
          ref={(input) => {_aBV = input}}/>
      <Divider />
          <input type="text" id="img" placeholder="ImageURL"
          ref={(input) => {_image = inout;}}/>
      </Paper>
      <button label = "Submit" type="submit" />>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
