import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const {shoe}=this.props;
    return (
        <>        
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Detailed Shoes</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                </div>
                <div className="modal-body">               
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{shoe.name}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>{shoe.price}$</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>{shoe.description}</td>
                            </tr>
                            <tr>
                                <th>Image</th>
                                <td className='d-flex justify-content-center'>
                                    <img src={shoe.image}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>                
                </div>
            </div>
            </div>
        </div>

        </>      
    )
  }
}
