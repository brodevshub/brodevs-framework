import { useEffect, useState } from "react";
import './AnimatedInput.css';

export default function AnimatedInput({
    disabled = false,
    focusLabelBackgroundColor,
    focusLabelTextColor,
    handleChange,
    height,
    icon: IconComponent,
    id,
    isTextArea = false,
    labelBackgroundColor,
    labelText,
    labelTextColor,
    name,
    type = 'text',
    value,
    width,
    ...props
}) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(true);

    useEffect(() => {
        setHasValue(value !== "");
    }, [value]);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const labelStyles = {
        unfocused: {
            color: labelTextColor || 'gray',
            backgroundColor: labelBackgroundColor || 'white',
            padding: 0
        },
        focused: {
            color: focusLabelTextColor || 'blue',
            backgroundColor: focusLabelBackgroundColor || 'white',
        },
    };

    return (
        <div
            style={{
                width: width ? width : "100%",
                minHeight: height
            }}
            className={`animated-input ${hasValue ? "hasValue" : ""} ${isFocused ? "focused" : ""}`}>

            {labelText && (
                <label
                    htmlFor={id}
                    style={isFocused ? labelStyles.focused : labelStyles.unfocused}
                >
                    {labelText}
                </label>
            )}

            <div className="input-value">
                {isTextArea ?
                    <textarea
                        id={id}
                        name={name}
                        type={type}
                        value={value}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled}
                        {...props}
                    /> :
                    <input
                        id={id}
                        name={name}
                        type={type}
                        value={value}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={disabled}
                        {...props}
                    />}
                {IconComponent && <IconComponent />}
            </div>
        </div>
    );
}