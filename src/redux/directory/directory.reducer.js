import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
    sections: [
        {
            id: uuidv4(),
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            linkUrl: 'shop/hats'
        },
        {
            id: uuidv4(),
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            linkUrl: 'shop/jackets'
        },
        {
            id: uuidv4(),
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            linkUrl: 'shop/sneakers'
        },
        {
            id: uuidv4(),
            title: 'women',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            linkUrl: 'shop/women'
        },
        {
            id: uuidv4(),
            title: 'men',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            linkUrl: 'shop/men'
        }
    ]
}

export const directoryReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}