import React, { useEffect } from 'react'
import AuthHook from './AuthHook'
import { privateInterceptor, ProtectedAxiosConfig } from '../config/AxiosConfig'
import { useNavigate } from 'react-router-dom'
import ResponseStruct from '../util/responsestructure/ResponseStruct'
import { useCookies } from 'react-cookie'


const ProtectedInterceptors = (isFormdata) => {
  const { jwtToken, error, userName, userRoles } = AuthHook()
  const [cookies, setCookie, removeCookie] = useCookies(['FINO_LOGIN_COOKIE']);

  const navigate = useNavigate()

  useEffect(() => {
    const requestInterceptor = privateInterceptor.interceptors.request.use(
      (config) => {
        if (jwtToken) {
          config.headers['Authorization'] = 'Bearer ' + jwtToken;
          config.headers['Content-Type'] = isFormdata ? "multipart/form-data" : 'application/json';
        }
        return config
      },
      (error) => { navigate("/"); return Promise.reject(error) })

    const responseInterceptor = privateInterceptor.interceptors.response.use(
      async (response) => {

        return new ResponseStruct(response?.status, response?.statusText, response?.data, "");
      },
      async (error) => {
        if (error?.code === 401) {
          removeCookie("FINO_LOGIN_COOKIE");
          navigate("/");
        }
        return new ResponseStruct(error?.code, error?.message, "", error);
      }
    )
    return () => {
      privateInterceptor.interceptors.request.eject(requestInterceptor)
      privateInterceptor.interceptors.response.eject(responseInterceptor)
    }
  }, [jwtToken])

  return privateInterceptor
}

export default ProtectedInterceptors;