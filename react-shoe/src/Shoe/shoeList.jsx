import React, { Component } from 'react'
import ShoeItem from './shoeItem'


export default class ShoeList extends Component {
  renderShoe=()=>{   
    const {getShoe,getDetail,shoeList}=this.props;  
    return (
      shoeList.map((shoe)=>{
        return <ShoeItem key={shoe.id} shoe={shoe} getDetail={getDetail} getShoe={getShoe}/>
      })
    );
  }
  render() {  
    return (
      <div className='Container-fluid mx-5 my-5'>
        <h1>Shoes List</h1>
        <div className='row'>
           {this.renderShoe()}                               
        </div>
      </div>
    )
  }
}
