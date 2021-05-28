import React from 'react';

import './form-imput.styels.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? 
            (<label 
                className={`${
                    otherProps.value.lenght ? 'shirnk' : ''
                } form-input-label`}
            >
            
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;