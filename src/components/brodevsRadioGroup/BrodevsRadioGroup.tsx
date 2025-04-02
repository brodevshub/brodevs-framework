import clsx from 'clsx';
import { Tooltip } from 'react-tooltip';
import BrodevsRadio from './brodevsRadio/BrodevsRadio.tsx';
import './brodevsRadioGroup.css';

interface RadioOption {
    value: string;
    label: string;
}

interface BrodevsRadioGroupProps {
    className?: string;
    disabled?: boolean;
    error?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    label?: string;
    name: string;
    options: RadioOption[];
    value: string;
}

export default function BrodevsRadioGroup({
    className = '',
    disabled = false,
    error = '',
    handleChange,
    id = '',
    label,
    name,
    options,
    value,
}: BrodevsRadioGroupProps) {
    return (
        <div
            id={`brodevs-radio-group--${id}`}
            className={clsx(
                'brodevs-radio-group',
                { 'brodevs-radio-group--disabled': disabled },
                { 'brodevs-radio-group--error': error !== '' },
                className
            )}
        >
            {label && <span className="brodevs-radio-group__label">{label}</span>}
            {options.map((option) => (
                <BrodevsRadio
                    key={option.value}
                    id={`brodevs-radio-group__${name}-${option.value}`}
                    name={name}
                    value={option.value}
                    checked={value === option.value}
                    disabled={disabled}
                    handleChange={handleChange}
                    label={option.label}
                    error={error}
                />
            ))}
            {
                error &&
                <Tooltip
                    anchorSelect={`#brodevs-radio-group--${id}`}
                    content={error}
                    className="brodevs-radio__tooltip"
                />
            }
        </div>
    );
}
