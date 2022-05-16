import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

const useFormExample = () => {
    //Custom hook: useForm, must to use the prop 'name' on inputs to use the custom hook
    const [formValues, handleInput] = useForm({
        name: '',
        email: '',
        password: ''
    });
    
    const {name , email , password} = formValues;
    //Cheking if input's states change
    useEffect( () => {
        console.log('email changed')
    } , [email]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(formValues);
    }
    

    return ( 
        <form onSubmit={handleSubmit}>
            <h1>useFormExample</h1>
            <hr />

            <div className='form-group'>
                <input 
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Your name'
                    value={name}
                    onChange={handleInput}
                    autoComplete='off'
                />
                 <input 
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='email@email.com'
                    value={email}
                    onChange={handleInput}
                    autoComplete='off'
                />
                <input 
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='Your password'
                    value={password}
                    onChange={handleInput}
                    autoComplete='off'
                />
                <button type='submit' className='btn btn-success'>Save</button>

            </div>
        </form>
     );
}
 
export default useFormExample;