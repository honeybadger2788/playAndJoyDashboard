import React from 'react'
import './styles.css'

function CategoryBox(props) {
    return (
        <div className="col-lg-6 mb-4 category-box">
			<div className="card bg-info text-white shadow">
				<div className="card-body category">
					<div>{props.nombre}</div>
					<div>{props.dato}</div>
				</div>
			</div>
		</div>
        )
    }
    
    export default CategoryBox;