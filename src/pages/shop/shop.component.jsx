import React, {Component} from 'react';
import {SHOP_DATA} from "./shop.data";
import CollectionPreviewComponent from "../../components/collection-preview/collection-preview.component";

class ShopComponent extends Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) =>
                        <CollectionPreviewComponent key={id} {...otherCollectionProps} />)
                }

            </div>
        );
    }
}

export default ShopComponent;