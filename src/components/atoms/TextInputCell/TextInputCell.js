import * as React from 'react';
import PropTypes from 'prop-types';
import { withDebouncedOnChangeHOC } from '../../../hoc/withDebouncedOnChangeHOC';

class TextInputCell extends React.PureComponent {
  render() {
    const {
      value,
      type,
      placeholder,
      onChange,
      className,
    } = this.props;

    return (
          <input 
          type={type} 
          placeholder={placeholder}  
          value={value}
          onChange={onChange}
          className={className}
          />

    );
  }
}

TextInputCell.propTypes = {
  value: PropTypes.string,
};

TextInputCell.defaultProps = {
  value: '', 
};

export default withDebouncedOnChangeHOC(TextInputCell);