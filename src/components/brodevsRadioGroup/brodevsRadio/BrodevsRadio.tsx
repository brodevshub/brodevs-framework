import clsx from 'clsx';
import { ReactNode } from 'react';
import './brodevsRadio.css';

interface BrodevsRadioProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    error?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label: ReactNode;
    name: string;
    value: string;
}

export default function BrodevsRadio({
    checked = false,
    className = '',
    disabled = false,
    error = '',
    handleChange,
    id = '',
    label = 'Opción',
    name = '',
    value
}: BrodevsRadioProps) {
    return (
        <div
            id={`brodevs-radio--${id}`}
            className={clsx(
                'brodevs-radio',
                { 'brodevs-radio--disabled': disabled },
                { 'brodevs-radio--error': error !== '' },
                className
            )}
        >
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                className="brodevs-radio__input"
            />
            <label htmlFor={id} className="brodevs-radio__label">
                {label}
            </label>
        </div>
    );
}
