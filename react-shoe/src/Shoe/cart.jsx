import React, { Component } from 'react'
import CartItem from './cartItem'

export default class Cart extends Component {    
    renderCart=()=>{        
        const {cartList,deleteShoe,changeQuantity}=this.props;        
        return(
            cartList.map((item)=>{
                return <CartItem key={item.id} item={item} deleteShoe={deleteShoe} changeQuantity={changeQuantity}/>
            })
        )
    }
  render() {
    return (             
        <div className="modal fade" id="cartId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cart</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Product name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.renderCart()}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>                        
                    </div>
                </div>
            </div>
        </div>        
      
    )
  }
}
