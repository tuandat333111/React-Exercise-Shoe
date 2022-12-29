import React, { Component } from 'react'
import ShoeList from './shoeList'
import data from './data.json'
import Modal from './modal'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      shoeList: data,
    }
  }
  render() {
    const {shoeList}=this.state;
    return (
      <>
        <ShoeList shoeList={shoeList}/>        
      </>
    )
  }
}
