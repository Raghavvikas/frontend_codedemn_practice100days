import React, { useState } from 'react'
import styled from 'styled-components'

const FormValidation = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = () => {
        const { firstName, lastName, email, password, confirmPassword } = state

        let isValid = true

        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

        let newErrors = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        if (!firstName.length) {
            newErrors.firstName = 'First name cannot be empty'
            isValid = false
        }
        if (!lastName.length) {
            newErrors.lastName = 'Last name cannot be empty'
            isValid = false
        }
        if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email address'
            isValid = false
        }
        if (password.length <= 7) {
            newErrors.password = 'Password must be greater than 7 characters'
            isValid = false
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match'
            isValid = false
        }
        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log('Form submitted successfully')
            localStorage.setItem('formData', JSON.stringify(state))
            setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input
                    data-testid="first-name-id"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={state.firstName}
                    onChange={handleChange}
                />
                <p data-testid="first-name-error-id" className="error">
                    {errors.firstName}
                </p>
                <input
                    data-testid="last-name-id"
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <p data-testid="last-name-error-id" className="error">
                    {errors.lastName}
                </p>
                <input
                    data-testid="email-id"
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                />
                <p data-testid="email-error-id" className="error">
                    {errors.email}
                </p>
                <input
                    data-testid="password-id"
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <p data-testid="password-error-id" className="error">
                    {errors.password}
                </p>
                <input
                    data-testid="confirm-password-id"
                    type="password"
                    name="confirmPassword"
                    value={state.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                />
                <p data-testid="confirm-password-error-id" className="error">
                    {errors.confirmPassword}
                </p>
                <button type="submit">Sign Up</button>
            </form>
        </Wrapper>
    )
}

export default FormValidation

const Wrapper = styled.div`
	margin-top: 24px;
	font-family: sans-serif;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		padding: 8px 12px;
		font-size: 18px;
		margin-bottom: 6px;
		width: clamp(200px, 40%, 400px);
        border-radius:10px;
	}

	button {
		padding: 10px 20px;
		font-size: 18px;
		border: none;
		border-radius: 4px;
		background-color: #333;
		color: #fff;
		cursor: pointer;
		margin-top: 24px;

		&:hover {
			opacity: 0.8;
		}
	}

	.error {
		margin: 0 0 24px 0;
		color: red;
	}
`
