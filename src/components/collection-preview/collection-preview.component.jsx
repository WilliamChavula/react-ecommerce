import React from 'react';

import CollectionItemComponent from "../collection-item/collection-item.component";

import { CollectionPreviewContainer, CollectionTitle, CollectionPreview } from "./collectin-preview.styles";


const CollectionPreviewComponent = ({ title, items, routeName, history }) => {
    return (
        <CollectionPreviewContainer>
            <CollectionTitle onClick={() => history.push(`shop/${routeName}`)}>{title.toUpperCase()}</CollectionTitle>
            <CollectionPreview>
                {
                    items.filter((item, idx) => idx < 4).map(item => (
                        <CollectionItemComponent key={item.id} item={item}/>
                    ))
                }
            </CollectionPreview>
        </CollectionPreviewContainer>
    );
};

export default CollectionPreviewComponent;