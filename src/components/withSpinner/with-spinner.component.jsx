import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from "./with-spinner.styles";


const WithSpinnerComponent = WrappedComponent => ({ isLoading, ...otherProps }) => (
    isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : <WrappedComponent { ...otherProps} />
)

export default WithSpinnerComponent;