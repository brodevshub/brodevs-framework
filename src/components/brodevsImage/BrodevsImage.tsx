import { BrodevsIcon } from '@icons/brodevsIcons/BrodevsIcon.tsx';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { Tooltip } from 'react-tooltip';
import './brodevsImage.css';

interface BrodevsImageProps {
    alt?: string;
    className?: string;
    disabled?: boolean;
    error?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    name?: string;
    loaderColor?: string;
    loaderSize?: number;
    onClick?: () => void;
    src?: string | null;
}

export default function BrodevsImage({
    alt = 'BrodevsImage',
    className = '',
    disabled = false,
    error = '',
    handleChange = () => { },
    id = '',
    name = '',
    loaderColor = '#f8f8f8',
    loaderSize = 15,
    onClick = () => { },
    src = null,
}: BrodevsImageProps) {
    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (src) {
            setIsLoading(true);
            setImage(src);
        }
    }, [src]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            handleChange(event);
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
        <>
            <div
                id={`brodevs-image--${id}`}
                className={clsx(
                    "brodevs-image",
                    { "brodevs-image--disabled": disabled },
                    { "brodevs-image--error": error },
                    className
                )}
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

                {!disabled && !isLoading && (
                    <>
                        <label htmlFor={id} className='brodevs-image__label'>
                            <input
                                accept='image/*'
                                className='brodevs-image__input'
                                id={id}
                                name={name}
                                ref={inputRef}
                                onChange={handleFileChange}
                                type='file'
                            />
                        </label>
                        <BrodevsIcon name='image' className='brodevs-image__icon' />
                    </>
                )}
            </div>

            {
                error !== '' &&
                <Tooltip
                    anchorSelect={`#brodevs-image--${id}`}
                    content={error}
                    className='brodevs-image__tooltip'
                />
            }
        </>
    );
}
