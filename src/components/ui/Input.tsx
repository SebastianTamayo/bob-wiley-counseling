import React, { forwardRef } from 'react';
import './Input.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className={`input-wrapper ${className}`}>
        {label && <label htmlFor={inputId} className="input-label">{label}</label>}
        <input ref={ref} id={inputId} className={`input-field ${error ? 'input-error' : ''}`} {...props} />
        {error && <span className="error-text">{error}</span>}
      </div>
    );
  }
);
Input.displayName = 'Input';
