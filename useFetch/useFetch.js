import { useEffect, useState , useRef } from "react";


const useFetch = (url) => {

    const isMounted = useRef(true);
    useEffect( () => {
        return () => { 
            isMounted.current = false
        }
    },[]);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });
    useEffect( () => {

        setState({data: null , loading: true , error: null});

        fetch(url)
        .then( response => response.json())
        .then(data => {
            
            if(isMounted.current){
                setState({
                    loading: false,
                    error: null,
                    data: data
                })
            }
        })
    },[url]);

    return state;

}
 
export default useFetch;