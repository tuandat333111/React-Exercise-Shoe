import React, { Component } from 'react'
import ShoeList from './shoeList'
import data from './data.json'
import ShowDetail from './showDetail';
import Cart from './cart';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      cartList:[],
      detail:"",
    }
  }
  getDetail=(shoe)=>{
    this.setState({
      detail:shoe,
    })
  }
  getShoe=(shoe)=>{
    shoe={...shoe,quantity:1};
    let {cartList}=this.state;
    let product=cartList.find((pro)=>{
      return shoe.id===pro.id});
    if(product){
      product.quantity+=1;
    }
    else{
      cartList.push(shoe);
    }
      
    this.setState({
        cartList,      
    })
  }   
  deleteShoe=(shoe)=>{
    if(window.confirm("You want to remove this product?")){
      const {cartList}=this.state;
      let listcart=cartList.filter((pro)=>{
        return pro.id!==shoe.id;
      })
      this.setState({
        cartList:listcart,
      })
    }
    
  }
  changeQuantity=(shoe,qty)=>{   

    let p=this.state.cartList.find((pro)=>{
      return shoe.id===pro.id}); 
      if(qty===-1){
        if(p.quantity<=1){
          this.deleteShoe(p); 
        }
        else{
          p.quantity+=qty;
          this.setState({
            cartList:this.state.cartList,
          })
        }
      }
      else{
          p.quantity+=qty;
          this.setState({
            cartList:this.state.cartList,
          })
      }     
    }  
    render() {
    const {detail,cartList}=this.state;
    return (
      <>
        <ShoeList shoeList={data} getDetail={this.getDetail} getShoe={this.getShoe}/>  
        <ShowDetail detail={detail}/>   
        <Cart cartList={cartList} deleteShoe={this.deleteShoe} changeQuantity={this.changeQuantity}/>  
      </>
    )
  }
}
