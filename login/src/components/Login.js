import React ,{useState}from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';

export default function Login() {

    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        
        if(data.email === 'test@gmail.com' && data.password ==='Testing@123'){
            
            navigate('/profile')
            console.log(" You Are Successfully Logged In");
            alert("You Are Successfully Logged In");
        }
        else{
            console.log("Email or Password is not matching with our record");
            alert("Email or Password is not matching with our record");
        }
    }
    
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p className="text-error">Please check the Email</p>}
                <Form.Field>
                    <label>Password</label>
                    <input
                        placeholder='Password' 
                        type="password" 
                        {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                        })}
                    />
                </Form.Field>
                {errors.password && <p className="text-error">Please check the Password</p>}
                <Button type='submit'>Submit</Button>
            </Form>
            
        </div>
    )
}