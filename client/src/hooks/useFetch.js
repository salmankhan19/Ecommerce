import {useEffect, useState} from "react";
import { fetchDataFromApi} from "../utils/api";

//api call function so that we dont have to write it on every code
const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        makeApiCall();
    },[endpoint]);

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
    };

    return { data };
};
export default useFetch;