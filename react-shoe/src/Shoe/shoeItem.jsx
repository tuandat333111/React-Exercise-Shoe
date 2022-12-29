import React, { Component } from 'react'
import Modal from './modal';


export default class ShoeItem extends Component {
  
  render() {
    const {shoe}=this.props;
    return (
      <>
        <div className='col-md-4'>
          <div className="card">
            <img className="card-img-top" src={shoe.image}/>
            <div className="card-body">
                <h4 className="card-title">{shoe.name}</h4>
                <p className="card-text">{shoe.price}$</p>
                <button className='btn btn-info' data-toggle='modal' data-target='#modelId'>Detail</button>                    
            </div>            
          </div>
        </div>
        <Modal shoe={shoe}/>
      </>
    )
  }
}
