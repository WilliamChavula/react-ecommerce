import React from  'react';
import './homepage.styles.scss'
import DirectoryComponent from "../../components/directory/directory.component";

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <DirectoryComponent />
        </div>
    </div>
);

export default HomePage;