import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { BrodevsIcon } from '../icons/brodevsIcons/BrodevsIcon';
import './brodevsInput.css';

interface BrodevsInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    autoFocus?: boolean;
    className?: string;
    disabled?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    icon?: string | null;
    id?: string;
    isTextArea?: boolean;
    label?: string;
    name: string;
    type?: string;
    value: string;
}

export default function BrodevsInput({
    autoFocus = false,
    className = '',
    disabled = false,
    handleChange,
    icon,
    id = '',
    label,
    name = '',
    type = 'text',
    value = '',
}: BrodevsInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        setHasValue(value !== "" && value !== undefined && value !== null);
    }, [value]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible)
    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => event.key === "Enter" && setIsFocused(false);

    return (
        <div
            className={clsx(
                "brodevs-input-container",
                {
                    "brodevs-input-container--hasValue": hasValue,
                    "brodevs-input-container--focused": isFocused,
                    "brodevs-input-container--disabled": disabled,
                },
                className
            )}
        >
            {label && <label className='brodevs-input-label' htmlFor={id}>{label}</label>}
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
                        onKeyDown={handleKeyDown}
                        disabled={disabled}
                        autoComplete="off"
                        autoFocus={autoFocus}
                    />
                ) : (
                    <input
                        id={id}
                        className='brodevs-input__input'
                        name={name}
                        type={type === 'password' && !isPasswordVisible ? type : "text"}
                        value={value}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        disabled={disabled}
                        autoComplete="off"
                        autoFocus={autoFocus}
                    />
                )}

                {icon ? (
                    <BrodevsIcon name={icon} className="brodevs-input__icon" />
                ) : type === "password" ? (
                    <BrodevsIcon name={isPasswordVisible ? 'eyeClosed' : 'eyeOpened'} className="brodevs-input__icon" style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility} />
                ) : null}
            </div>
        </div>
    );
}