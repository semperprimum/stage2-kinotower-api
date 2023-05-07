import React, {useEffect, useState} from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import Select from "./UI/selects/Select";
import Button from "./UI/buttons/Button";
import MovieService from "../API/MovieService";

const Filters = ({filters, handleFilterChange}) => {
    const [categories, setCategories] = useState([]);
    const [countries, setCountries] = useState([]);

    const fetchCategories = async () => {
        const response = await MovieService.getCategories();
        setCategories(response);
    }

    const fetchCountries = async () => {
        const response = await MovieService.getCountries();
        setCountries(response);
    }

    useEffect(() => {
        fetchCategories();
        fetchCountries();
    }, [])

    const handleNameSort = () => handleFilterChange({...filters, sortBy: "name"});
    const handleYearSort = () => handleFilterChange({...filters, sortBy: "year"});
    const handleRatingSort = () => handleFilterChange({...filters, sortBy: "rating"})
    const handleCategorySort = (category) => handleFilterChange({...filters, category: category})
    const handleCountrySort = (country) => handleFilterChange({...filters, country: country})
    const handleDirectionSort = () => {
        if (filters.sortDir === "asc") {
            handleFilterChange({...filters, sortDir: "desc"});
        } else {
            handleFilterChange({...filters, sortDir: "asc"});
        }
    };
    const handleSortReset = () => handleFilterChange({sortBy: "name", sortDir: "asc", country: 0, category: 0, size: 6})


    return (
        <div className="flex max-w-5xl mx-auto mt-10 items-center justify-around">
            <div className="space-x-6">
                <Select onChange={(e) => handleCategorySort(e.target.value)}>
                    <option value="" selected={filters.category === 0} disabled>Genre</option>
                    {categories.map(category =>
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )}
                </Select>
                <Select onChange={(e) => handleCountrySort(e.target.value)}>
                    <option value="" selected={filters.country === 0} disabled>Country</option>
                    {countries.map(country =>
                        <option key={country.id} value={country.id}>{country.name}</option>
                    )}
                </Select>
            </div>
            <div className="flex space-x-3 items-center">
                <Button onClick={handleNameSort}>NAME</Button>
                <Button onClick={handleYearSort}>YEAR</Button>
                <Button onClick={handleRatingSort}>RATING</Button>
                <Button onClick={handleDirectionSort}>
                    {filters.sortDir === "asc"
                        ? <AiOutlineArrowUp />
                        : <AiOutlineArrowDown />
                    }
                </Button>
            </div>
            <div>
                <Button onClick={handleSortReset}>RESET</Button>
            </div>
        </div>
    );
};

export default Filters;