import NameIcon from "@components/icons/NameIcon";
import AnimatedInput from "@components/inputs/AnimatedInput/AnimatedInput";
import CustomSelect from "@components/selects/CustomSelect"; // Import the new CustomSelect
import { useEffect, useState } from "react";
import './BrodevsForm.css';
import municipiosData from './data/municipios.json'; // Ensure to import municipios data
import provinciasData from './data/provinciasSinTilde.json'; // Ensure to import provincias data

export default function BrodevsForm({ title }) {
    const defaultRegion = provinciasData.find(region => region.nm === "Madrid") || {};
    const defaultCity = municipiosData.find(city => city.nm === "Alcorcón") || {};

    const [cities, setCities] = useState([]);
    const [formValues, setFormValues] = useState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        region: defaultRegion, // Set default region to Madrid
        city: defaultCity // Set default city to Alcorcón
    });

    useEffect(() => {
        if (defaultRegion.id) {
            const filteredCities = municipiosData.filter(city =>
                city.id.startsWith(defaultRegion.id)
            );
            setCities(filteredCities);
        }
    }, [defaultRegion]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value
        }));
        console.log(`Valor de ${id}:`, value);
    };

    const handleRegionChange = (e) => {
        const regionId = e.target.value;
        const selectedRegion = provinciasData.find(region => region.id === regionId);

        if (selectedRegion) {
            const filteredCities = municipiosData.filter(city =>
                city.id.startsWith(regionId)
            );

            setFormValues((prevValues) => ({
                ...prevValues,
                region: selectedRegion,
                city: {} // Reset city when region changes
            }));

            setCities(filteredCities);
        }
    };

    const handleCityChange = (e) => {
        const selectedCity = cities.find(city => city.id === e.target.value);
        if (selectedCity) {
            setFormValues((prevValues) => ({
                ...prevValues,
                city: selectedCity
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, surname, region, city } = formValues;
        alert(`Valores enviados:\nNombre: ${name}\nApellido: ${surname}\nRegión: ${region.nm}\nCiudad: ${city.nm}`);
    };

    return (
        <form onSubmit={handleSubmit} id="form-container">
            {title && <h2>{title}</h2>}

            <AnimatedInput
                id="name"
                labelText="Nombre"
                value={formValues.name}
                handleChange={handleChange}
                icon={NameIcon}
            />

            <AnimatedInput
                id="surname"
                placeholder="Apellidos"
                value={formValues.surname}
                handleChange={handleChange}
                icon={NameIcon}
            />

            <div className='two-column'>
                <AnimatedInput
                    id="phone"
                    labelText="Teléfono"
                    value={formValues.phone}
                    handleChange={handleChange}
                    icon={NameIcon}
                />

                <AnimatedInput
                    id="email"
                    placeholder="Email"
                    value={formValues.email}
                    handleChange={handleChange}
                    icon={NameIcon}
                />
            </div>

            <CustomSelect
                id="region"
                options={provinciasData}
                value={formValues.region.id}
                onChange={handleRegionChange}
            />

            <CustomSelect
                id="city"
                options={cities}
                value={formValues.city.id}
                onChange={handleCityChange}
                disabled={!formValues.region.id}
            />

            <button type="submit" className="submit-button">Enviar</button>
        </form>
    );
}
