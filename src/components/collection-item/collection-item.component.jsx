import React from 'react';
import { connect } from "react-redux";

import { addItem } from '../../redux/cart/cart.actions'

import CustomButtonComponent from '../custom-buttom/custom-button.component'

import './collection-item.styles.scss'

const CollectionItemComponent = ({ item, addItem }) => {
    const { name, price, imageUrl } = item

    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButtonComponent inverted onClick={ () => addItem(item) }>
                ADD TO CART
            </CustomButtonComponent>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItemComponent);