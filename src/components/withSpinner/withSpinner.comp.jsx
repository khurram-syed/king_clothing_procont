import React from 'react'
import {SpinnerContainer,SpinnerOverlay} from './withSpinner.style'


const WithSpinner = WrappedComponent => ({isLoading, ...otherProps})=>{
    console.log(`In- Spinner - otherProps :`,otherProps)
    console.log(`In- Spinner - WrappedComponent :`,WrappedComponent)
    console.log(`In- Spinner - isLoading :`,isLoading)
 return   isLoading?
            (<SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>)
          : (<WrappedComponent {...otherProps} />)
}
export default WithSpinner;