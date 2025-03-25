import './brodevsCheckbox.css';

interface BrodevsCheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    name: string;
}

export default function BrodevsCheckbox({
    id = '',
    checked = false,
    disabled = false,
    handleChange,
    name = '',
}: BrodevsCheckboxProps) {
    return (
        <div className={`checkbox-input ${disabled ? 'checkbox-input--disabled' : ''}`}>
            <input
                checked={checked}
                className='checkbox-input__input'
                disabled={disabled}
                id={id}
                name={name}
                onChange={handleChange}
                type="checkbox"
            />
            <label className='checkbox-input__label' htmlFor={id}>
                Permisos de administrador
            </label>
        </div>
    );
}
