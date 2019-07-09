import React form "react";

import Header from './Header';
import Error from './Error';
import Body from './Body';
import Footer from './Footer';

import KegList from './KegList/KegList';
import EditKeg from './KegList/EditKeg';
import SellPint from './Keglist/SellPint';
import NewKegControl from './AddKeg/NewKegControl';
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: 'Ginger Rogers Beer',
          brand: 'Tap Dance Brewing',
          price: '7',
          ABV: '5',
          image: duff,
          key: '1'
        },
        {
          name: 'Moe Betta Blues',
          brand: 'Duff Brewing',
          price: '5',
          ABV: '10',
          image: MoeB
          key: '2'
        }
      ],
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

export default App;
