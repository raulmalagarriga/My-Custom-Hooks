import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';


const useFetchAndUseCounterExample = () => {

    //Custom hook: useCounter 
    const {state , increment , decrement } = useCounter(1);
    //Custom hook: useFecth 
    const {loading , data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const {author , quote} = !!data && data[0]; 
    
    return ( 
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {loading ? (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                )
                :
                (
                    <div>
                        <figure className="text-end">
                            <blockquote className="blockquote">
                                <p>{quote}</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                {author} 
                            </figcaption>
                        </figure>
                        {state <= 1 ? ('-None-') : (
                            <button type="button" className="btn btn-primary" onClick={() => decrement()}>
                                Previous quote
                            </button>    
                        )}
                        
                            <button type="button" className="btn btn-primary" onClick={() => increment()}>
                                Next quote
                            </button>
                        
                  </div>
                )
            }
            
        </div>
     );
}
 
export default useFetchAndUseCounterExample;