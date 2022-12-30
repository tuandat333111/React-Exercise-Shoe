import React, { Component } from 'react'
import Cart from './cart';
import ShowDetail from './showDetail'
export default class ShoeItem extends Component {    
  handleDetail=(shoe)=>{
    this.props.getDetail(shoe);
  }
  handleAddShoe=(shoe)=>{
    this.props.getShoe(shoe);
  }
  render() {    
    let {shoe}=this.props;
    return (
      <>
        <div className='col-md-4'>
          <div className="card">
            <img className="card-img-top" src={shoe.image}/>
            <div className="card-body">
                <h4 className="card-title">{shoe.name}</h4>
                <p className="card-text">{shoe.price}$</p>
                <div className='d-flex justify-content-center'>
                  <button className='btn btn-info mx-2' data-toggle='modal' data-target='#modelId' onClick={()=>{this.handleDetail(shoe)}}>Detail</button>    
                  <button className='btn btn-dark' data-toggle='modal' data-target='#cartId' onClick={()=>{this.handleAddShoe(shoe)}}>Add to Cart</button> 
                </div>
                               
            </div>            
          </div>
        </div>        
        {/* <Cart shoe={shoe}/> */}
      </>
    )
  }
}
