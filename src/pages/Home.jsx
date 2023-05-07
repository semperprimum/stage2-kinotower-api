import React, {useEffect, useState} from 'react';
import Header from "../components/UI/Header";
import Filters from "../components/Filters";
import FilmList from "../components/FilmList";
import Pagination from "../components/Pagination";
import MovieService from "../API/MovieService";
import usePagination from "../hooks/usePagination";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({ sortBy: "name", sortDir: "asc", country: 0, category: 0, size: 6 })

    const pagesArray = usePagination(totalPages);
    useEffect(() => {
        fetchMovies();
    }, [filters, currentPage])

    async function fetchMovies(url) {
        const response = await MovieService.getMovies(filters.size, currentPage, filters.sortBy, filters.sortDir, filters.category, filters.country)
        setMovies(response.data.data)
        setTotalPages(response.data.meta.last_page);
    }

    const changePage = (page) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <Header/>
            <Filters filters={filters} handleFilterChange={setFilters}/>
            <FilmList movies={movies}/>
            <Pagination pagesArray={pagesArray} changePage={changePage} currentPage={currentPage}/>
        </div>
    );
};

export default Home;