import axios from "axios";

const axiosService = axios.create();


export const QuizzesService = {
  getCategories: async () => {
    return await axiosService.get("https://opentdb.com/api_category.php");
  },
  getQuizzesByCategory: async (category) => {
    let random=Math.floor(Math.random() * 50)
    return await axiosService.get(`https://opentdb.com/api.php?amount=${random}&category=${category}`);
  },
  getPhotoByQuery:async(query)=>{
    return await axiosService.get(`https://api.unsplash.com/search/photos/?client_id=TipWlgNfTA6mJ8v9PgBKiHYN5fELVlyG3DViNQ_V8Ug&page=1&query=${query}-blue-color`);
  },
};
