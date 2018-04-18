import React, { Component } from 'react';
import './App.css';

import Util from './util'
import Head from './Component/Head'
import Row from './Component/Row'
import Price from './Component/Price'
import { PRODUCT_DATA as product_data , PRODUCT_DETAIL as product_detail } from './Data/data'

class Table extends Component {

  constructor(props) {
    super(props)
    this.state = {
			column: {},
      row: [],
      price: {}
    }
  }

  componentDidMount() {

    //Let's assume if you are getting the data from a remote server the api requests will be called here
    const price = Util.priceReduce(product_data)
    const column = Util.columnReduce(product_data)
    const row = Util.rowReduce(product_detail)

    this.setState({
      column,
      row,
      price
    })
  }

  render() {
    return (
      <table className="table">
      <thead>
        <Head column={this.state.column}/>
      </thead>
      <tbody>
        <Row column={this.state.column} row={this.state.row} />
        <Price price={this.state.price} />
      </tbody>
    </table>
    );
  }
}

export default Table;
