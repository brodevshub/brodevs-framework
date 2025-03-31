import { useEffect, useState } from 'react';
import BrodevsCheckbox from '../brodevsCheckbox/BrodevsCheckbox';
import BrodevsImage from '../brodevsImage/BrodevsImage';
import BrodevsInput from '../brodevsInput/BrodevsInput';
import BrodevsSelect from '../brodevsSelect/BrodevsSelect';
import { BrodevsIcon } from '../icons/brodevsIcons/BrodevsIcon';
import './brodevsForm.css';

interface FormData {
    profilePicture: string;
    name: string;
    age: string;
    password: string;
    passwordConfirmation: string;
    privacyPolicy: boolean;
    role: string;
}

interface BrodevsFormProps {
    element?: FormData
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
        passwordConfirmation: '',
        privacyPolicy: false,
        role: ''
    });
    const requiredFields = ["profilePicture", "name", "password", "passwordConfirmation", "privacyPolicy", "role"];

    useEffect(() => {
        setFormData({
            profilePicture: element?.profilePicture || DEFAULT_IMAGE,
            name: element?.name || '',
            age: element?.age || '18',
            password: element?.password || '',
            passwordConfirmation: element?.passwordConfirmation || '',
            privacyPolicy: element?.privacyPolicy || false,
            role: element?.role || ''
        });
        setIsDisabled(element ? true : false);
    }, [element]);

    const validateField = (name: string, value: any) => {
        let error = "";

        if (value instanceof File) {
            if (name === "profilePicture" && !value.type.startsWith('image/')) {
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

        setErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = event.target as HTMLInputElement;
        const { name, value, type } = target;
        const newValue = type === 'checkbox' ? target.checked : type === 'file' ? (target.files?.[0] || null) : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
        validateField(name, newValue);
        setHasChanges(true);
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (requiredFields.includes(key)) {
                if (key === "profilePicture" && (typeof value === "string")) {
                    newErrors[key] = "Por favor, elige una imagen.";
                } else if (typeof value === "string" && !value.trim()) {
                    newErrors[key] = "Este campo es obligatorio.";
                } else if (typeof value === "boolean") {
                    if (key === "privacyPolicy" && !formData?.privacyPolicy) {
                        newErrors[key] = "Debe aceptar la política de privacidad y las condiciones de uso.";
                    }
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

            <BrodevsSelect
                className={`${className}__select`}
                disabled={isDisabled}
                error={errors.role}
                handleChange={handleChange}
                id="brodevs-form__role"
                // icon="profile"
                label="Role"
                name="role"
                options={[
                    { label: 'User', value: '1' },
                    { label: 'Admin', value: '2' },
                    { label: 'SuperAdmin', value: '3' },
                ]}
                //searchable
                specialOptions={[
                    { label: '-- Crear rol --', onClick: () => { }, position: 'first' },
                ]}
                value={formData?.role}
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

            <BrodevsCheckbox
                checked={formData?.privacyPolicy}
                className={`${className}__checkbox`}
                disabled={isDisabled}
                error={errors.privacyPolicy}
                handleChange={handleChange}
                id="brodevs-form__privacy-policy"
                label={
                    <>
                        Acepta la{" "}
                        <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
                            política de privacidad
                        </a>{" "}
                        y las{" "}
                        <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">
                            condiciones de uso
                        </a>.
                    </>
                }
                name="privacyPolicy"
            />

            <button className="brodevs-form__submit-btn">
                <BrodevsIcon name="send" className="brodevs-form__submit-btn-icon" /> Send
            </button>
        </form>
    );
}
