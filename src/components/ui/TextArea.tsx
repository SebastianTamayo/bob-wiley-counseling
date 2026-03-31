import React, { forwardRef } from 'react';
import './Input.css'; // Share input styles

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || props.name;
    return (
      <div className={`input-wrapper ${className}`}>
        {label && <label htmlFor={inputId} className="input-label">{label}</label>}
        <textarea ref={ref} id={inputId} className={`input-field textarea-field ${error ? 'input-error' : ''}`} {...props} />
        {error && <span className="error-text">{error}</span>}
      </div>
    );
  }
);
TextArea.displayName = 'TextArea';
