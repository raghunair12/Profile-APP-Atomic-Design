import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

export const withDebouncedOnChangeHOC = (WrappedComponent) => {
    class DebouncedOnChangeHOC extends React.Component {
      constructor(props) {
        super();
        this.state = {
          value: props.value,
        };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        // This will dispatch debounce an event after given time (DebounceTime)
        this.debouncedOnChange = debounce(props.onChange, props.debounceTime);
      }
  
      /**
       * Function will handle to call debouncedOnChange function and
       * set the local value on changing of the value
       *
       * @param {Object} event - on change event object
       */
      onChange = (event) => {
       const targetValue = event.target.value;
       this.debouncedOnChange(targetValue);
        this.setState({
          value: targetValue,
        });
      };
  
      render() {
        const {
          onChange, value, ...rest
        } = this.props;
  
        return (
          <WrappedComponent
            {...rest}
            value={this.state.value}
            onChange={this.onChange}
          />
        );
      }
    }
  
    DebouncedOnChangeHOC.propTypes = {
      debounceTime: PropTypes.number,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      onChange: PropTypes.func,
    };
  
    DebouncedOnChangeHOC.defaultProps = {
      debounceTime: 500,
      value: '',
      onChange: () => {
      },
    };
  
    return DebouncedOnChangeHOC;
  };