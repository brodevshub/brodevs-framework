import './CustomSelect.css';

const CustomSelect = ({ options, value, onChange, disabled, id }) => {
    return (
        <select id={id} value={value} onChange={onChange} disabled={disabled}>
            <option value="">Seleccione una opción</option>
            {options.map(option => (
                <option key={option.id} value={option.id}>
                    {option.nm}
                </option>
            ))}
        </select>
    );
};

export default CustomSelect;
