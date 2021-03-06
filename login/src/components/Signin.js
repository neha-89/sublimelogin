import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';

export default function Signin() {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        localStorage.setItem("user", JSON.stringify({
            firstName : data.firstName,
            lastName : data.lastName,
            email : data.email,
            password : data.password,
            phone:data.phone

        }));
        navigate('/login')
        console.log(data);
        alert("Sigin Successfull");
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.firstName && <p className="text-error">Please check the First Name</p>}
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        type="text"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.lastName && <p className="text-error">Please check the Last Name</p>}
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
                <Form.Field>
                    <label>Phone</label>
                    <input
                        placeholder='Phone'
                        type="text"
                        {...register("phone", {
                            required: true,
                            pattern: /^[0-9]*$/
                        })}
                    />
                </Form.Field>
                {errors.phone && <p className="text-error">Please check the Phone number</p>}
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}