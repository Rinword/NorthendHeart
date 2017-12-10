import React from 'react';
// import PropTypes from 'prop-types';
import { withFormsy } from 'formsy-react';
import MaskedInput from 'react-text-mask';
import masks from './masks';
import './style.css';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        this.props.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
    }

    render() {
        const className = `ux-field ${this.props.className || ''} ${
            this.props.showRequired() ? 'ux-field_required' : ''
        } ${this.props.showError() ? 'ux-field_invalid' : ''}`;

        // An error message is returned ONLY if the component is invalid
        // or the server has returned an error message
        const errorMessage = this.props.getErrorMessage();

        return (
            <div className={className}>
                <label htmlFor={this.props.name}>{this.props.title}</label>
                {this.props.mask ? (
                    <MaskedInput
                        onChange={this.changeValue}
                        name={this.props.name}
                        type={this.props.type || 'text'}
                        value={this.props.getValue() || ''}
                        mask={masks[this.props.mask] || [/\d*/]}
                        guide={this.props.guide}
                    />
                ) : (
                    <input
                        onChange={this.changeValue}
                        name={this.props.name}
                        type={this.props.type || 'text'}
                        value={this.props.getValue() || ''}
                    />
                )}
                <span className="ux-field__error">{errorMessage}</span>
            </div>
        );
    }
}

// Field.propTypes = {
//     ...PropTypes,
// };

export default withFormsy(Field);
