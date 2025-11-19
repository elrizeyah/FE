// Login.jsx
import React, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState({});

    const submit = (e) => {
        e.preventDefault();

        // Example frontend validation
        let newErrors = {};
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Simulate login
        alert(`Email: ${email}\nPassword: ${password}\nRemember: ${remember}`);
        setPassword('');
    };

    return (
        <div
            style={{
                backgroundImage: "url('/images/1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Poppins, sans-serif',
                flexDirection: 'column',
                padding: '2rem',
            }}
        >
            {/* Container */}
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                {/* Logo */}
                <img
                    src="/images/2.png"
                    alt="Logo"
                    style={{
                        width: '50rem',
                        height: '12rem',
                        objectFit: 'contain',
                        zIndex: 2,
                        marginBottom: '-90px',
                    }}
                />

                {/* Login Box */}
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                        padding: '3rem 2rem 2rem 2rem',
                        width: '100%',
                        zIndex: 1,
                        textAlign: 'left',
                    }}
                >
                    <h2
                        style={{
                            fontWeight: '700',
                            color: '#000',
                            fontSize: '1.4rem',
                            letterSpacing: '0.5px',
                            marginBottom: '2rem',
                            marginTop: '3rem',
                            textAlign: 'center',
                        }}
                    >
                        LOG IN
                    </h2>

                    <form onSubmit={submit}>
                        {/* EMAIL FIELD */}
                        <div>
                            <label htmlFor="email" style={{ fontWeight: '500' }}>
                                Username
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                autoComplete="username"
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    marginTop: '0.25rem',
                                    width: '100%',
                                    borderRadius: '6px',
                                    border: '1px solid #D1D5DB',
                                    padding: '0.5rem',
                                    backgroundColor: email ? '#fff4e5ff' : '#ffffff',
                                    transition: 'all 0.2s',
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#563d28';
                                    e.target.style.backgroundColor = '#fff4e5ff';
                                }}
                                onBlur={(e) => {
                                    e.target.style.backgroundColor = email ? '#fff4e5ff' : '#ffffff';
                                    e.target.style.borderColor = '#D1D5DB';
                                }}
                            />
                            {errors.email && (
                                <p style={{ color: 'red', marginTop: '0.25rem' }}>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* PASSWORD FIELD */}
                        <div style={{ marginTop: '1rem' }}>
                            <label htmlFor="password" style={{ fontWeight: '500' }}>
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    marginTop: '0.25rem',
                                    width: '100%',
                                    borderRadius: '6px',
                                    border: '1px solid #D1D5DB',
                                    padding: '0.5rem',
                                    backgroundColor: password ? '#fff4e5ff' : '#ffffff',
                                    transition: 'all 0.2s',
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#563d28';
                                    e.target.style.backgroundColor = '#fff4e5ff';
                                }}
                                onBlur={(e) => {
                                    e.target.style.backgroundColor = password ? '#fff4e5ff' : '#ffffff';
                                    e.target.style.borderColor = '#D1D5DB';
                                }}
                            />
                            {errors.password && (
                                <p style={{ color: 'red', marginTop: '0.25rem' }}>
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* REMEMBER ME */}
                        <div
                            style={{
                                marginTop: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                fontSize: '0.875rem',
                                color: '#4B5563',
                            }}
                        >
                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                    style={{ marginRight: '0.5rem' }}
                                />
                                Remember Me
                            </label>

                            <a
                                href="#"
                                style={{ color: '#2563EB', textDecoration: 'underline' }}
                            >
                                Forgot Password?
                            </a>
                        </div>

                        {/* LOGIN BUTTON */}
                        <div
                            style={{
                                marginTop: '1.5rem',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <button
                                type="submit"
                                style={{
                                    width: '120px',
                                    backgroundColor: '#563d28',
                                    color: '#fff',
                                    fontWeight: '600',
                                    fontSize: '1rem',
                                    borderRadius: '6px',
                                    padding: '0.6rem',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#3e2c1a';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#563d28';
                                }}
                            >
                                LOG IN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
