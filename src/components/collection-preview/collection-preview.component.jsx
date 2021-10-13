import React from 'react';
import './collection-preview.styles.scss'
import CollectionItemComponent from "../collection-item/collection-item.component";

const CollectionPreviewComponent = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className="preview">
            {
                items.filter((item, idx) => idx < 4).map(item => (
                    <CollectionItemComponent key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreviewComponent;