import React from 'react';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectDirectorySections} from "../../redux/directory/directory.selector";

import MenuItemComponent from "../menu-item/menu-item.component";

import './directory.styles.scss'
import {DirectoryContainer} from "./directory.styles";


const DirectoryComponent = ({ sections }) => {
        return (
            <DirectoryContainer>
                { sections.map(
                    ({ id, ...otherSectionProps }) =>
                        <MenuItemComponent key={id} { ...otherSectionProps } />
                ) }
            </DirectoryContainer>
        )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryComponent);