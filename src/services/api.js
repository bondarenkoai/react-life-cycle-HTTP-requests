import axios from 'axios';

const API_KEY = '39983641-8cceea4fb7f8edcc5cbde97e1';

axios.defaults.baseURL =
    'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
};

export const getImages = async searcValues => {
    const response = await axios
        .get('/?q={searcValues}&page=1')
        .then(response => {})
        .catch(error => {});
};