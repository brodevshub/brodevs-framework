import { BrodevsIcon } from '@icons/brodevsIcons/BrodevsIcon.tsx';
import { useEffect, useId, useRef, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import './brodevsImage.css';

interface BrodevsImageProps {
    alt?: string;
    className?: string;
    isEditable?: boolean;
    handleFileChange?: (file: File) => void;
    loaderColor?: string;
    loaderSize?: number;
    onClick?: () => void;
    src?: string | null;
}

export default function BrodevsImage({
    alt = 'BrodevsImage',
    className = '',
    isEditable = false,
    handleFileChange = () => { },
    loaderColor = '#f8f8f8',
    loaderSize = 15,
    onClick = () => { },
    src = null,
}: BrodevsImageProps) {
    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);
    const uniqueId = useId();

    useEffect(() => {
        if (src) {
            setIsLoading(true);
            setImage(src);
        }
    }, [src]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            handleFileChange(file);
            setIsLoading(true);

            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
            if (inputRef.current) inputRef.current.value = '';
        }
    };

    const handleImageLoad = () => setIsLoading(false);

    return (
        <div
            className={`brodevs-image ${isEditable ? 'brodevs-image--editable' : ''} ${className}`}
            onClick={onClick}
        >
            <BeatLoader
                className='brodevs-image__loader'
                loading={isLoading}
                size={loaderSize}
                color={loaderColor}
            />

            {image && (
                <img
                    alt={alt}
                    className='brodevs-image__img'
                    src={image}
                    onLoad={handleImageLoad}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
            )}

            {isEditable && !isLoading && (
                <>
                    <label htmlFor={`brodevs-image__input-${uniqueId}`} className='brodevs-image__label'>
                        <input
                            id={`brodevs-image__input-${uniqueId}`}
                            className='brodevs-image__input'
                            ref={inputRef}
                            type='file'
                            accept='image/*'
                            onChange={handleChange}
                            autoComplete='off'
                            autoFocus={false}
                        />
                    </label>
                    <BrodevsIcon name='image' className='brodevs-image__icon' />
                </>
            )}
        </div>
    );
}
