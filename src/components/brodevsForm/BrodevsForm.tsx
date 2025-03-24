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

export default function BrodevsForm() {
    const className = 'brodevs-form';
    const [hasChanges, setHasChanges] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        profilePicture: '/profile-picture.webp',
        name: '',
        age: '18',
        password: '',
        passwordConfirmation: ''
    });

    useEffect(() => {
        // Update form data on mount if necessary
        setFormData({
            profilePicture: '/profile-picture.webp',
            name: '',
            age: '18',
            password: '',
            passwordConfirmation: ''
        });
        setIsDisabled(false);
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (file: File, name: string) => {
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: file
        }));
        setHasChanges(true);
    };

    return (
        <form className={className}>
            <BrodevsImage
                src={formData?.profilePicture}
                className={`${className}__image`}
                disabled={isDisabled}
                handleFileChange={(file) => handleFileChange(file, 'brodevs-form__profilePicture')}
            />

            <BrodevsInput
                className={`${className}__input`}
                handleChange={handleChange}
                icon="profile"
                id="brodevs-form__name"
                disabled={isDisabled}
                label="Name"
                name="name"
                value={formData?.name}
                autoFocus={true}
            />

            <BrodevsInput
                className={`${className}__input`}
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
