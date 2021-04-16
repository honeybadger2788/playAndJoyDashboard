import React from 'react'
import './styles.css'


function LastProductBox(props) {
    return (
        <div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Último producto agregado</h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" onError={(e) => e.target.src='https://playandjoy.herokuapp.com/img/uploads/products/imagenDefault.png'} src={props.imgUrl} alt=" dummy"/>
									</div>
									<h3>{props.lastProduct}</h3>
									<h4>$ {props.precio}</h4>
									<p>{props.productDetail}</p>
								</div>
							</div>
						</div>
        )
    }
    
    export default LastProductBox;