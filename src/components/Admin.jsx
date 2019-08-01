import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList/KegList';

import RaisedButton from 'material-ui/RaisedButton';

function Admin(props){
  return (
    <div>
      <h2 className="subtitle">Admin Portal</h2>
      <RaisedButton className="subtitle" href="#/newkeg" label="Add keg" primary={true} />
      <KegList kegList={props.kegList} currentRouterPath={props.currentRouterPath} onKegSelection={props.onKegSelection}/>
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.object
};

export default Admin;
