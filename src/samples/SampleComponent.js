/**
 * Component description goes here
 */

import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
// import { object from constants } from '../../resources/constants.js'
// import api from '../../api/api.js'

class SampleComponent extends Component {
    state = {
        // key: 'value'
        // data: []
    }

    /**
     * Create a constructor if you need to initialize state with some input props
     * @param {*} props 
     */
    constructor(props) {
        super(props);
    }

    /**
     *  If it's a container file, use this method to make api calls
     */
    componentDidMount() {
        /** //Sample request: 
         * api.getPosts(this.props.params.userId)
         * .then(res => {
         *     this.setState({data: res.data})
         * })
         * .catch(err => {
         *  
         * })
         */
    }

    /**
     * Write the handler function in this way to avoid using .bind(this)
     * Change a specific key only in the state doesn't have to be all of the state fields
     */
    handleEvent = (e) => {
        // this.setState({ key: 'new value' })
    }

    /**
     * render function is what returns the component view
     */
    render() {
        const {
            //  Select the needed props only
            prop1,
            prop2,
            // group the rest (may be passed to a nested component)
            ...rest } = this.props;

        return (
            <div
                style={[
                    styles.base,
                    // you can add here additional styles (e.g. style for each size passed as prop)
                ]}>
                {/* If it's a wrapper component..you will use this.props.children */}
                {/* You can import and use other components by importing and writing <TheComponentName propName={propValue}/> 
                    passing all the needed props for this component*/}
                {/*You can also pass a whole object like state or rest for example by typing <Component {...state} {...rest}/> */}
                {/* Also you can use .map or .filter here between {} to render a list for example*/}
            </div>
        );
    }
}

/**
 * Define here what does this component take as props
 */
SampleComponent.propTypes = {
    /*
  arrayProp: PropTypes.array,
  boolProp: PropTypes.bool,
  funcProp: PropTypes.func,
  numberProp: PropTypes.number,
  objectProp: PropTypes.object,
  stringProp: PropTypes.string,
  enumProp: PropTypes.oneOf(['type1', 'type2']),
  requiredProp: PropTypes.'add here any type'.isRequired,
  */
};

/**
 * Write here the CSS required for the component, instead of '-' it will be in camelCase
 * e.g. background-color will be backgroundColor
 */
const styles = {
    base: {

    },
}

// Wrap it with Radium
SampleComponent = Radium(SampleComponent);

export default SampleComponent;