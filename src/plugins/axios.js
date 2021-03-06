"use strict";

import Vue from 'vue';
import axios from "axios";



let config = {
    baseURL: process.env.VUE_APP_APIURL || process.env.apiUrl || ""
        // timeout: 60 * 1000, // Timeout
        // withCredentials: true, // Check cross-site Access-Control
};

export const httpClient = axios.create(config);

/*_axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);*/

Plugin.install = function(Vue, options) {
    Vue.axios = httpClient;
    window.axios = httpClient;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return httpClient;
            }
        },
        $axios: {
            get() {
                return httpClient;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;