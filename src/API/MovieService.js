import axios from "axios";

export default class MovieService{
    static async getMovies(size = 10, page = 1, sortBy = "name", sortDir = "asc", category = 0, country = 0) {
        const response = await axios.get("http://localhost:8000/api/films", {
            params: {
                size: size,
                page: page,
                sortBy: sortBy,
                sortDir: sortDir,
                category: category,
                country: country,
            }
        });
        return response
    }

    static async getMovieById(id) {
        const response = await axios.get(`http://localhost:8000/api/films/${id}`);
        return response.data;
    }

    static async getReviewsByMovieId(id){
        const response = await axios.get(`http://localhost:8000/api/films/${id}/reviews`)
        return response.data.reviews
    }

    static async getCategories() {
        const response = await axios.get("http://localhost:8000/api/categories");
        return response.data.categories;
    }

    static async getCountries() {
        const response = await axios.get("http://localhost:8000/api/countries");
        return response.data.countries
    }
}