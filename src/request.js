import axios from 'axios';
import {baseurl} from './constants';

const userRegister = async (path, data) => {
  try {
    const response = await axios.post(baseurl + path, data);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (registerData) => {
    try {
      const data = await userRegister("/api/v1/users/", registerData);
      console.log(data);
      //return data;
    } catch (error) {
      throw error;
    }
  };