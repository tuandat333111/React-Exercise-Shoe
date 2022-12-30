import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    const {item,deleteShoe,changeQuantity}=this.props;
    return (
      <>
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
                <img src={item.image} width={50}/>
            </td>
            <td>{item.price}</td>
            <td>
                <button className='mx-2' onClick={()=>{changeQuantity(item,-1)}}>-</button>
                {item.quantity}
                <button className='mx-2' onClick={()=>{changeQuantity(item,1)}}>+</button>
            </td>
            <td>{item.price*item.quantity}</td>
            <td>
                <button className='btn btn-danger' onClick={()=>{deleteShoe(item)}}>Delete</button>
            </td>
        </tr>      
      </>
    )
  }
}
