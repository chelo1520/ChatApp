import axios from "axios"

const axiosInstance = axios.create({
  withCredentials: true, // Habilita el envío de cookies entre dominios
});

export const registerUser = (user) => {
  try {
    return axiosInstance.post("http://localhost:4000/api/auth/register", user)

  } catch (error) {
    return error
  }
}

export const Loguear = (user) => {
  try {
    return axiosInstance.post("http://localhost:4000/api/auth/login", user)
  } catch (error) {
    return error
  }
}
