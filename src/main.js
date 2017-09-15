import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from './components/menu';
import Footer from './components/footer';

import {connect} from 'react-redux';

class Main extends Component {
  render(){
    return(
      <div>
        <Menu cartItemsNumber={this.props.totalQty}/>
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
Main.propTypes = {
  children: React.PropTypes.element.isRequired
}
function mapStateToProps(state){
  return {
    totalQty: state.cart.totalQty
  }
}
export default connect(mapStateToProps)(Main);
