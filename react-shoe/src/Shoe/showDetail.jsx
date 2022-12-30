import React, { Component } from 'react'

export default class ShowDetail extends Component {
  render() {
    const {detail}=this.props;      
    return (
        <>        
            <div className="modal fade" id="modelId" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
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
                                <td>{detail.name}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>{detail.price}$</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>{detail.description}</td>
                            </tr>
                            <tr>
                                <th>Image</th>
                                <td className='d-flex justify-content-center'>
                                    <img src={detail.image}/>
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
