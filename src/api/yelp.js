import axios from "axios";

export default axios.create({
    baseURL:" https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:"Bearer mHyu3mhJjtZ6_zPbUMBsRJBu8KF494yN6DnLJ2jFdCRwu0bosLJvx0nTz6wlHt4XOeznX6I99kgVx0zfjwLQ52wmfKR22V6a5SPGGdWc_swRNGUTsSnGhutgnQL3ZHYx"}
});