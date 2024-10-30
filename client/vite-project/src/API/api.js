import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5000/api' 
  : 'https://adventure.api.binarybears.net/api';

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchOption = async (optionId) => {
  try {
    const response = await apiClient.get(`/option/${optionId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch option:', error);
    throw new Error('Failed to fetch option');
  }
};

export const fetchText = async (textId) => {
  try {
    const response = await apiClient.get(`/text/${textId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch text:', error);
    throw new Error('Failed to fetch text');
  }
};

export const fetchImage = async (imageId) => {
  try {
    const response = await apiClient.get(`/image/${imageId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch image:', error);
    throw new Error('Failed to fetch image');
  }
};

export const postOption = async (data) => {
  try {
    const response = await apiClient.post('/option/0', data);
    return response.data;
  } catch (error) {
    console.error('Failed to post option:', error);
    throw new Error('Failed to post option');
  }
};