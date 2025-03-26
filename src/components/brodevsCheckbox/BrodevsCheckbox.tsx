import clsx from 'clsx';
import { ReactNode } from 'react';
import { Tooltip } from 'react-tooltip';
import './brodevsCheckbox.css';

interface BrodevsCheckboxProps {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    error?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label: ReactNode;
    name: string;
}

export default function BrodevsCheckbox({
    checked = false,
    className = '',
    disabled = false,
    error = '',
    handleChange,
    id = '',
    label = 'Aceptar las condiciones',
    name = '',
}: BrodevsCheckboxProps) {
    return (
        <div
            id={`brodevs-checkbox--${id}`}
            className={clsx(
                "brodevs-checkbox",
                { "brodevs-checkbox--disabled": disabled },
                { "brodevs-checkbox--error": error !== '' },
                className
            )}
        >
            <input
                checked={checked}
                className='brodevs-checkbox__input'
                disabled={disabled}
                id={id}
                name={name}
                onChange={handleChange}
                type="checkbox"
            />
            <label className='brodevs-checkbox__label' htmlFor={id}>
                {label}
            </label>

            {
                error !== '' &&
                <Tooltip
                    anchorSelect={`#brodevs-checkbox--${id}`}
                    content={error}
                    className='brodevs-checkbox__tooltip'
                />
            }
        </div>
    );
}
