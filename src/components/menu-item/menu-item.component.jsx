import React from 'react';
import { withRouter } from "react-router-dom";

import { MenuItemImage, MenuItemContent, MenuItemContainer, MenuTitle, MenuSubtitle } from "./menu-item.styles";

const MenuItemComponent = ({ title, imageUrl, size, linkUrl, match, history }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <MenuItemImage menuImage={imageUrl} />
        <MenuItemContent>
            <MenuTitle>{title.toUpperCase()}</MenuTitle>
            <MenuSubtitle>SHOP NOW</MenuSubtitle>
        </MenuItemContent>
    </MenuItemContainer>
);

export default withRouter(MenuItemComponent);