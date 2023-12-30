import axios from "axios";
import { getAuthHeaderConfig, getHeaderWithProjectIDAndBody, getHeaderWithProjectId } from "./config";

const BASE_DOMAIN = 'https://academics.newtonschool.co/api/v1';
const configById = getHeaderWithProjectId();
const configByIdAndBody = getHeaderWithProjectIDAndBody();

{/* User */}
export const registerUser = async (userInfo, navigate) => {
    userInfo.appType = 'music';
    try {
        const res = await axios.post(
            `${BASE_DOMAIN}/user/signup`, userInfo, configByIdAndBody
        );
        const {name, email} = res.data.data.user
        console.log({Name: name, Email: email});

        if(res.data.token) {
            localStorage.setItem('authToken', res.data.token);
            localStorage.setItem('userInfo', JSON.stringify(res.data.data.user));

            navigate('/login');
        }
    } catch (error) {
        throw error.response.data.message;
    }
}

export const signInUser = async(userInfo) => {
    userInfo.appType = 'music';

    try {
        const res = await axios.post(
            `${BASE_DOMAIN}/user/login`, userInfo, configByIdAndBody
        )
        
        return res.data;
    }
    catch (error) {
        throw error.response.data.message;
    }
}

{/* music lists */}
export const getMusicLists= async(page, limit) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/music/song?page=${page}&limit=${limit}`, 
            configById
        );
        console.log(response.data);
        
        return response.data.data;
    } catch (error) {
        // console.error("Error fetching musics: ", error);
        throw error.response.data.message;
    }
}

{/* Search the product */}
export const getMusicsBySearch = async (searchTerm, title, limit) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/api/v1/music/song?search={"${title}":"${searchTerm}"}&limit=${limit}`, 
            configById
        );
        return response.data.data;
    } catch (error) {
        throw error.response.data.message;
    }
};

export const getSocialPosts = async(page, limit) => {
    try {
        const response = await axios.get(
            `${BASE_DOMAIN}/quora/post?page=${page}&limit=${limit}`, 
            configById
        );
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        // console.error("Error fetching products: ", error);
        throw error.response.data.message;
    }
};

// Function to like a post
export const PostLikeApi = async(postId, token) => {
    try {
        const res = await axios.post(
            `${BASE_DOMAIN}/quora/like/${postId}`, 
            getAuthHeaderConfig(token)
        )
      
        return res.data.data;
    }
    catch (error) {
        throw error.response.data.message;
    }
};

//function to get comments
export const fetchComments = async(postId, authToken) => {
    try {
        const res = await axios.get(
            `${BASE_DOMAIN}/quora/post/${postId}/comments`, 
            getAuthHeaderConfig(authToken)
        )
        
        return res.data.data;
    }
    catch (error) {
        throw error.response.data.message;
    }
};