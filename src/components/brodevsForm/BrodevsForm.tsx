import { useEffect, useState } from 'react';
import BrodevsImage from '../brodevsImage/BrodevsImage';
import BrodevsInput from '../brodevsInput/BrodevsInput';
import { BrodevsIcon } from '../icons/brodevsIcons/BrodevsIcon';
import './brodevsForm.css';

interface FormData {
    profilePicture: string;
    name: string;
    age: string;
    password: string;
    passwordConfirmation: string;
}

interface BrodevsFormProps {
    element: FormData
}

export default function BrodevsForm({ element }: BrodevsFormProps) {
    const DEFAULT_IMAGE = '/profile-picture.webp';
    const className = 'brodevs-form';
    const [hasChanges, setHasChanges] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState<FormData>({
        profilePicture: '',
        name: '',
        age: '',
        password: '',
        passwordConfirmation: ''
    });
    const requiredFields = ["profilePicture", "name", "password", "passwordConfirmation"];

    useEffect(() => {
        setFormData({
            profilePicture: element?.profilePicture || DEFAULT_IMAGE,
            name: element?.name || '',
            age: element?.age || '18',
            password: element?.password || '',
            passwordConfirmation: element?.passwordConfirmation || ''
        });
        setIsDisabled(element ? true : false);
    }, [element]);

    const validateField = (name: string, value: any) => {
        let error = "";

        if (name === "profilePicture" && value instanceof File) {
            if (!value.type.startsWith('image/')) {
                error = "La imagen debe ser una imagen válida.";
            }
        } else if (typeof value === 'string') {
            if (value.trim() === "") {
                error = "";
            } else if (name === "name" && value.trim().length < 3) {
                error = "El nombre debe tener al menos 3 caracteres.";
            } else if (name === "age" && (Number(value) < 18 || Number(value) > 200)) {
                error = "La edad debe estar entre 18 y 200 años.";
            } else if (name === "password" && value.length < 6) {
                error = "La contraseña debe tener al menos 6 caracteres.";
            } else if (name === "passwordConfirmation" && value !== formData.password) {
                error = "Las contraseñas no coinciden.";
            }
        }

        //add checkbox validation

        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, checked, files, type } = event.target;
        const newValue = type === 'checkbox' ? checked : type === 'file' ? files?.[0] : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
        validateField(name, newValue);
        setHasChanges(true);
    };


    console.log(formData?.profilePicture);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (requiredFields.includes(key)) {
                if (key === "profilePicture" && (typeof value === "string")) {
                    newErrors[key] = "Por favor, elige una imagen.";
                } else if (!value.trim()) {
                    newErrors[key] = "Este campo es obligatorio.";
                }
            } else {
                validateField(key, value);
                if (errors[key]) {
                    newErrors[key] = errors[key];
                }
            }
        });

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateForm() || !hasChanges) return;

        setIsDisabled(true);
        console.log("Form submitted successfully:", formData);

        setTimeout(() => {
            setIsDisabled(false);
            setHasChanges(false);
        }, 1000);
    };

    return (
        <form className={className} onSubmit={handleSubmit}>
            <BrodevsImage
                className={`${className}__image`}
                disabled={isDisabled}
                error={errors.profilePicture}
                handleChange={handleChange}
                id='brodevs-form__profilePicture'
                name='profilePicture'
                src={formData?.profilePicture}
            />

            <BrodevsInput
                className={`${className}__input`}
                error={errors.name}
                handleChange={handleChange}
                icon="profile"
                id="brodevs-form__name"
                disabled={isDisabled}
                label="Name"
                name="name"
                value={formData?.name}
            />

            <BrodevsInput
                className={`${className}__input`}
                error={errors.age}
                handleChange={handleChange}
                icon="time"
                id="brodevs-form__age"
                disabled={isDisabled}
                label="Age"
                name="age"
                type="number"
                value={formData?.age}
            />

            <BrodevsInput
                className={`${className}__input`}
                error={errors.password}
                handleChange={handleChange}
                id="brodevs-form__password"
                disabled={isDisabled}
                label="Password"
                name="password"
                type="password"
                value={formData?.password}
            />

            <BrodevsInput
                className={`${className}__input`}
                error={errors.passwordConfirmation}
                handleChange={handleChange}
                id="brodevs-form__password-confirmation"
                disabled={isDisabled}
                label="Password confirmation"
                name="passwordConfirmation"
                type="password"
                value={formData?.passwordConfirmation}
            />

            <button className="brodevs-form__submit-btn">
                <BrodevsIcon name="send" className="brodevs-form__submit-btn-icon" /> Send
            </button>
        </form>
    );
}
