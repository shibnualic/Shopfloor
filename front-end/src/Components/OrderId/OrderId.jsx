import React from 'react'
import './OrderId.css'

const OrderId = (props) => {
    return (
        <div className="products-row">
            <button className="cell-more-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
            </button>
            <div className="product-cell image">
                <span>{props.order_id}</span>
            </div>
            <div className="product-cell category"><span className="cell-label">category:</span>{props.order_unit}</div>
            <div className="product-cell status-cell">
                <span className="cell-label">Status:</span>
                <span className="status active">{props.quantity}</span>
            </div>
            <div className="product-cell sales"><span className="cell-label">Sales:</span>{props.po_number}</div>
            <div className="product-cell stock"><span className="cell-label">Stock:</span>{props.customer_name}</div>
        </div>
    )
}

export default OrderId