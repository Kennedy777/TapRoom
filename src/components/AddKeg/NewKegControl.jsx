import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';

function NewKegControl(props){
  return (
    <div>
      <NewKegForm onNewKegCreation={props.onNewKegCreation}/>
    </div>
  );
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
