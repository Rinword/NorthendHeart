import React from 'react';
import { withFormsy } from 'formsy-react';
import MaskedInput from 'react-text-mask';
import masks from './masks';

import './style.css';

class Field extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isBlured: false,
        };

        this.changeValue = this.changeValue.bind(this);

        this.onBlur = () => {
            this.setState({ isBlured: true });
        };
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        this.props.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
    }

    render() {
        const { name, type = 'text', mask, guide, placeholder, getValue } = this.props;
        const showError = this.state.isBlured && this.props.showError();
        const className = `ux-field ${this.props.className || ''} ${
            this.props.showRequired() ? 'ux-field_required' : ''
        } ${showError ? 'ux-field_invalid' : ''}`;

        // An error message is returned ONLY if the component is invalid
        // or the server has returned an error message
        const errorMessage = this.props.getErrorMessage();
        return (
            <div className={className}>
                <label htmlFor={this.props.name}>{this.props.title}</label>
                {this.props.mask ? (
                    <MaskedInput
                        onChange={this.changeValue}
                        name={name}
                        type={type}
                        value={getValue() || '+7'}
                        mask={masks[mask] || [/\d*/]}
                        guide={guide}
                        onBlur={this.onBlur}
                        placeholder={placeholder}
                    />
                ) : (
                    <input
                        onChange={this.changeValue}
                        name={name}
                        type={type}
                        value={getValue() || ''}
                        onBlur={this.onBlur}
                        placeholder={placeholder}
                    />
                )}
                <span className="ux-field__error">{showError && errorMessage}</span>
            </div>
        );
    }
}

// Field.propTypes = {
//     ...PropTypes,
// };

export default withFormsy(Field);
