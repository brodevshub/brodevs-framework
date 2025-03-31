import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useClickOutside } from "../../hooks/useClickOutside";
import { BrodevsIcon } from "../icons/brodevsIcons/BrodevsIcon";
import "./brodevsSelect.css";

type OptionType<T = any> = {
    label: string;
    value: T;
};

type SpecialOptionType = {
    label: string;
    onClick: () => void;
    position: "first" | "last";
};

type BrodevsSelectProps<T = any> = {
    className?: string;
    disabled?: boolean;
    error?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: string | null;
    id?: string;
    name: string;
    label?: string;
    options: OptionType<T>[];
    placeholder?: string;
    searchable?: boolean;
    specialOptions?: SpecialOptionType[];
    value: T;
};

export default function BrodevsSelect<T = any>({
    className = "",
    disabled = false,
    error = '',
    handleChange,
    icon,
    id = '',
    name,
    label,
    options,
    placeholder = "Selecciona una opción",
    searchable = false,
    specialOptions = [],
    value,
}: BrodevsSelectProps<T>) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => {
        if (isOpen) {
            setIsAnimating(true);
            setIsOpen(false);
        }
    });

    const handleFocus = () => {
        setIsFocused(true);
        setIsOpen(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setIsAnimating(true);
        setIsOpen(false);
    };

    useEffect(() => {
        if (!isOpen && isAnimating) {
            const timer = setTimeout(() => {
                setIsAnimating(false);
                setSearchTerm("");
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isOpen, isAnimating]);

    console.log(icon);


    const handleSelection = (option: OptionType<T>) => {
        const syntheticEvent = {
            target: {
                name: name,
                value: option.value,
                type: "select-one"
            }
        } as unknown as React.ChangeEvent<HTMLInputElement>;

        handleChange(syntheticEvent);
        setSearchTerm(option.label);
        setIsAnimating(true);
        setIsOpen(false);
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentOption = options.find(
        (option) => JSON.stringify(option.value) === JSON.stringify(value)
    );

    const renderSpecialOptions = (position: "first" | "last") =>
        specialOptions
            .filter((opt) => opt.position === position)
            .map((specialOption, index) => (
                <li
                    key={`special-${position}-${index}`}
                    className="brodevs-select__option brodevs-select__option--special"
                    onClick={() => {
                        specialOption.onClick();
                        setIsAnimating(true);
                        setIsOpen(false);
                        setSearchTerm("");
                    }}
                >
                    {specialOption.label}
                </li>
            ));


    return (
        <div
            id={`brodevs-select--${id}`}
            className={clsx(
                "brodevs-select",
                {
                    "brodevs-select--focused": isFocused,
                    "brodevs-select--disabled": disabled,
                    "brodevs-select--error": error !== '',
                },
                className
            )}
            ref={dropdownRef}
        >
            {label && <label className='brodevs-select-label'>{label}</label>}

            <div className='brodevs-select__current-option'>
                <input
                    name={name}
                    className={clsx(
                        "brodevs-select__current-option-label",
                        { "brodevs-select__current-option-label--searchable": searchable },
                        "brodevs-text",
                    )}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    type="text"
                    value={(searchable && isOpen || searchable && isAnimating) ? searchTerm : currentOption?.label || placeholder}
                    placeholder={placeholder}
                    onChange={searchable ? (e) => setSearchTerm(e.target.value) : undefined}
                    autoComplete="off"
                    readOnly={!searchable}
                />

                <BrodevsIcon
                    name={icon ?? (isOpen ? 'chevronUp' : 'chevronDown')}
                    className="brodevs-input__icon"
                    onClick={handleFocus}
                />
            </div>

            {(isOpen || isAnimating) && (
                <ul
                    className={clsx(
                        "brodevs-select__menu",
                        isOpen
                            ? "brodevs-select__menu--open"
                            : "brodevs-select__menu--close"
                    )}
                >
                    {renderSpecialOptions("first")}

                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => (
                            <li
                                key={`option-${index}`}
                                className={clsx(
                                    "brodevs-select__option",
                                    {
                                        "brodevs-select__option--selected":
                                            JSON.stringify(option.value) === JSON.stringify(value),
                                    }
                                )}
                                onClick={() => handleSelection(option)}
                            >
                                {option.label}
                            </li>
                        ))
                    ) : (
                        <li className="brodevs-select__option brodevs-select__option--disabled">
                            Sin resultados
                        </li>
                    )}

                    {renderSpecialOptions("last")}
                </ul>
            )}

            {
                error !== '' &&
                <Tooltip
                    anchorSelect={`#brodevs-select--${id}`}
                    content={error}
                    className='brodevs-select__tooltip'
                />
            }
        </div>
    );
}
