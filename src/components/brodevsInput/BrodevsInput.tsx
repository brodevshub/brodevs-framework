import { ComponentType, useEffect, useState } from 'react';
import { BrodevsIcon } from '../icons/brodevsIcons/BrodevsIcon';
import './brodevsInput.css';

interface BrodevsInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    id: string;
    name: string;
    type?: string;
    value: string;
    label: string;
    IconComponent?: ComponentType;
    isTextArea?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    disabled?: boolean;
    autoFocus?: boolean;
    icon?: string | null;
}

export default function BrodevsInput({
    id,
    name,
    type = 'text',
    value,
    label,
    IconComponent,
    handleChange,
    disabled = false,
    autoFocus = false,
    icon = null,
    ...props
}: BrodevsInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(true);

    useEffect(() => {
        setHasValue(value !== "");
    }, [value]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className={`brodevs-input-container ${hasValue && "brodevs-input-container--hasValue"} ${isFocused && "brodevs-input-container--focused"}`}>
            <label className='brodevs-input-label' htmlFor={id}>{label}</label>
            <div className="brodevs-input">
                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        className='brodevs-input__textarea'
                        name={name}
                        value={value}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled}
                        autoComplete="off"
                        autoFocus={autoFocus}
                        {...props}
                    />
                ) : (
                    <input
                        id={id}
                        className='brodevs-input__input'
                        name={name}
                        type={type}
                        value={value}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled}
                        autoComplete="off"
                        autoFocus={autoFocus}
                        {...props}
                    />
                )}
                {icon && <BrodevsIcon name={icon} className='brodevs-input__icon' />}
            </div>
        </div>
    );
}