import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

// UI
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

function NewKegForm(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _image = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, image: _image.value, id: v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _image.value = '';
  }


  return (
    <div>
      <h1 className="subtitle">Add keg</h1>
      <form onSubmit={handleNewKegFormSubmission}>
        <Paper zDepth={1}>
          <input
            type="text"
            id="name"
            placeholder="Name of beer"
            ref={(input) => {_name = input;}}/>
          <Divider />
          <input
            type="text"
            id="brand"
            placeholder="Brand"
            ref={(input) => {_brand = input;}}/>
          <Divider />
          <input
            type="number"
            id="price"
            placeholder="Price"
            ref={(input) => {_price = input;}}/>
          <Divider />
          <input
            type="number"
            id="alcoholContent"
            placeholder="ABV"
            ref={(input) => {_alcoholContent = input;}}/>
          <Divider />
          <input
            type="text"
            id="image"
            placeholder="Image URL"
            ref={(input) => {_image = input;}}/>
          <Divider />
        </Paper>
        <FlatButton label="Add!" type='submit' />
      </form>

    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
