import React from 'react';
import { connect } from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectDirectorySections} from "../../redux/directory/directory.selector";

import MenuItemComponent from "../menu-item/menu-item.component";

import './directory.styles.scss'

const DirectoryComponent = ({ sections }) => {
        return (
            <div className="directory-menu">
                { sections.map(
                    ({ id, ...otherSectionProps }) =>
                        <MenuItemComponent key={id} { ...otherSectionProps } />
                ) }
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryComponent);