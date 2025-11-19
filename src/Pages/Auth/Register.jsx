// Register.jsx
import React, { useState } from 'react';

export default function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const handleChange = (field) => (e) => {
    setData({ ...data, [field]: e.target.value });
  };

  const getBackgroundColor = (value) => (value ? '#fff4e5ff' : '#ffffff');

  const createInputHandlers = (field) => ({
    onFocus: (e) => {
      e.target.style.borderColor = '#563d28';
      e.target.style.backgroundColor = '#fff4e5ff';
    },
    onBlur: (e) => {
      e.target.style.borderColor = '#D1D5DB';
      e.target.style.backgroundColor = getBackgroundColor(data[field]);
    },
    onMouseEnter: (e) => {
      if (document.activeElement !== e.target) {
        e.target.style.borderColor = '#563d28';
        e.target.style.backgroundColor = '#fff4e5ff';
      }
    },
    onMouseLeave: (e) => {
      if (document.activeElement !== e.target) {
        e.target.style.borderColor = '#D1D5DB';
        e.target.style.backgroundColor = getBackgroundColor(data[field]);
      }
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    // Simple frontend validation
    let newErrors = {};
    if (!data.name) newErrors.name = 'Username is required';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.password) newErrors.password = 'Password is required';
    if (data.password !== data.password_confirmation)
      newErrors.password_confirmation = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setProcessing(false);
      return;
    }

    // Simulate success
    alert(`Registered successfully!\nUsername: ${data.name}\nEmail: ${data.email}`);
    setData({ name: '', email: '', password: '', password_confirmation: '' });
    setProcessing(false);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("/images/1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Logo */}
      <img
        src="/images/2.png"
        alt="Logo"
        style={{
          width: '200px',
          marginBottom: '2rem',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
        }}
      />

      {/* Form Card */}
      <div
        style={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          padding: '2rem',
          borderRadius: '1.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem' }}>
          SIGN UP
        </h2>

        {errors.general && (
          <div style={{ color: 'red', marginBottom: '1rem' }}>{errors.general}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ fontWeight: '500' }}>
              Username
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={handleChange('name')}
              required
              style={{
                marginTop: '0.25rem',
                width: '100%',
                borderRadius: '6px',
                border: '1px solid #D1D5DB',
                padding: '0.5rem',
                backgroundColor: getBackgroundColor(data.name),
                transition: 'all 0.2s',
              }}
              {...createInputHandlers('name')}
            />
            {errors.name && <p style={{ color: 'red', marginTop: '0.25rem' }}>{errors.name}</p>}
          </div>

          {/* Email */}
          <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ fontWeight: '500' }}>
              Email
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={handleChange('email')}
              required
              style={{
                marginTop: '0.25rem',
                width: '100%',
                borderRadius: '6px',
                border: '1px solid #D1D5DB',
                padding: '0.5rem',
                backgroundColor: getBackgroundColor(data.email),
                transition: 'all 0.2s',
              }}
              {...createInputHandlers('email')}
            />
            {errors.email && <p style={{ color: 'red', marginTop: '0.25rem' }}>{errors.email}</p>}
          </div>

          {/* Password */}
          <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ fontWeight: '500' }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={data.password}
              onChange={handleChange('password')}
              required
              style={{
                marginTop: '0.25rem',
                width: '100%',
                borderRadius: '6px',
                border: '1px solid #D1D5DB',
                padding: '0.5rem',
                backgroundColor: getBackgroundColor(data.password),
                transition: 'all 0.2s',
              }}
              {...createInputHandlers('password')}
            />
            {errors.password && (
              <p style={{ color: 'red', marginTop: '0.25rem' }}>{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
            <label htmlFor="password_confirmation" style={{ fontWeight: '500' }}>
              Confirm Password
            </label>
            <input
              id="password_confirmation"
              type="password"
              value={data.password_confirmation}
              onChange={handleChange('password_confirmation')}
              required
              style={{
                marginTop: '0.25rem',
                width: '100%',
                borderRadius: '6px',
                border: '1px solid #D1D5DB',
                padding: '0.5rem',
                backgroundColor: getBackgroundColor(data.password_confirmation),
                transition: 'all 0.2s',
              }}
              {...createInputHandlers('password_confirmation')}
            />
            {errors.password_confirmation && (
              <p style={{ color: 'red', marginTop: '0.25rem' }}>
                {errors.password_confirmation}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <button
              type="submit"
              disabled={processing}
              style={{
                width: '120px',
                backgroundColor: '#422912ff',
                color: '#fff',
                fontWeight: '600',
                fontSize: '1rem',
                borderRadius: '6px',
                padding: '0.6rem',
                cursor: processing ? 'not-allowed' : 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => {
                if (!processing) e.currentTarget.style.backgroundColor = '#2e1e0fff';
              }}
              onMouseLeave={(e) => {
                if (!processing) e.currentTarget.style.backgroundColor = '#422912ff';
              }}
            >
              SIGN UP
            </button>
          </div>

          {/* Sign In Link */}
          <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#4B5563' }}>
            Already have an account?{' '}
            <a
              href="/login"
              style={{ color: '#2563EB', fontWeight: '500', textDecoration: 'underline' }}
            >
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
