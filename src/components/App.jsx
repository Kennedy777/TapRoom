import React form "react";
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiTheme';

import Header from './Header';
import Error from './Error';
import Body from './Body';
import Footer from './Footer';

import KegList from './KegList/KegList';
import EditKeg from './KegList/EditKeg';
import SellPint from './Keglist/SellPint';
import NewKegControl from './AddKeg/NewKegControl';
import Admin from './Admin';
import RenderToLayer from 'material-ui/internal/RenderToLayer';

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
  
    handleChangingSelectedKeg(keg){
      this.ListeningStateChangedEvent({selectedKeg: keg});
      let newMasterKegList = this.state.masterKegList.slice();
      newMasterKegList.split(keg);
      this.ListeningStateChangedEvent({masterKegList: newMasterKegList});
    }

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <style jsx global>{`
          body{
            font-family: sans-serif; 
          }
          .subtitle {margin-left: 60px;
          }
          `}
          </style>
        <Header />
        <Switch>
          <Route exact path="/" component={Body} />>
          <Route exact path="/keglist" render{() => <KegList kegList={this.state.masterKegList}/>} />
          <Route exact path="editkeg" component={EditKeg} />>
          <Route path="newkeg" render={() => <NewKegControl onNewKegCreation={this.state.masterKegList}/>>} />
          <Route exact path="/admin" render={(props) => Admin kegList= {this.state.masterKeglist} currentRouterPath={props.location.pathname} onKegSelection={this.handleChangingSelectedKeg} selectedKeg={this.state.selectedKeg}/>} /> 
          <Route component ={Error} />>
          
        </Switch>
        <Footer />
        </div>
      </MuiThemeProvider>
    );
  }

 export default App;
