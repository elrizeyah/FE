// Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});

  const submit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert(`Email: ${email}\nPassword: ${password}\nRemember: ${remember}`);
    setPassword('');
    setErrors({});
  };

  const inputStyle = {
    marginTop: '0.25rem',
    width: '22.5rem',
    borderRadius: '6px',
    border: '1px solid #D1D5DB',
    padding: '0.5rem',
    transition: 'all 0.2s',
    color: '#111827',
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#563d28';
    e.target.style.backgroundColor = '#fff4e5ff';
    e.target.placeholder = '';
  };

  const handleInputBlur = (e, value, placeholder) => {
    e.target.style.borderColor = value ? '#D1D5DB' : '#D1D5DB';
    e.target.style.backgroundColor = value ? '#fff4e5ff' : '#ffffff';
    e.target.placeholder = value ? '' : placeholder;
  };

  const handleInputHover = (e) => {
    e.target.style.borderColor = '#563d28';
    e.target.style.backgroundColor = '#fff4e5ff';
  };

  const handleInputHoverLeave = (e, value, hasError) => {
    e.target.style.borderColor = hasError ? 'red' : '#D1D5DB';
    e.target.style.backgroundColor = hasError ? '#ffe5e5' : value ? '#fff4e5ff' : '#ffffff';
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        flexDirection: 'column',
        padding: '2rem',
      }}
    >
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
        <img
          src="/images/2.png"
          alt="Logo"
          style={{
            width: '50rem',
            height: '15rem',
            objectFit: 'contain',
            zIndex: 2,
            marginBottom: '-90px',
            marginRight: '2rem',
          }}
        />

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            borderRadius: '12px',
            boxShadow: '4px 8px 20px rgba(0, 0, 0, 0.4)',
            padding: '3.5rem 2rem 1.5rem 2rem',
            width: '24rem',
            marginTop: '-2rem',
            zIndex: 1,
            textAlign: 'left',
            borderBottom: '2px solid rgba(0, 0, 0, .8)',
            height: 'auto',
          }}
        >
          <h2
            style={{
              fontWeight: '700',
              color: '#000',
              fontSize: '2rem',
              letterSpacing: '0.5px',
              marginBottom: '2rem',
              marginTop: '4rem',
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0,0,0,0.25)',
            }}
          >
            LOG IN
          </h2>

          <form onSubmit={submit}>
            {/* EMAIL FIELD */}
            <div>
              <label htmlFor="email" style={{ fontWeight: '550', color:'#3b3b3bff'}}>
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                autoComplete="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: '' }));
                }}
                style={{
                  ...inputStyle,
                  width: '22.5rem',
                  borderColor: errors.email ? 'red' : undefined,
                  backgroundColor: errors.email ? '#ffe5e5' : email ? '#fff4e5ff' : '#ffffff',
                  color: errors.email ? 'red' : '#111827',
                  '::placeholder': {
                    color: errors.email ? 'red' : '#9CA3AF',
                  },
                }}
                onFocus={handleInputFocus}
                onBlur={(e) => handleInputBlur(e, email, 'Email')}
                onMouseEnter={handleInputHover}
                onMouseLeave={(e) => handleInputHoverLeave(e, email, !!errors.email)}
              />
              {errors.email && (
  <span style={{ color: 'red', fontSize: '0.75rem', marginLeft: '.6rem' }}>
    {errors.email}
  </span>
)}

            </div>

            {/* PASSWORD FIELD */}
            <div style={{ marginTop: '1rem' }}>
              <label htmlFor="password" style={{ fontWeight: '550', color:'#3b3b3bff'} }>
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: '' }));
                }}
                style={{
                  ...inputStyle,
                  width: '22.5rem',
                  borderColor: errors.password ? 'red' : undefined,
                  backgroundColor: errors.password ? '#ffe5e5' : password ? '#fff4e5ff' : '#ffffff',
                  color: errors.password ? 'red' : '#111827',
                  '::placeholder': {
                    color: errors.password ? 'red' : '#9CA3AF',
                  },
                }}
                onFocus={handleInputFocus}
                onBlur={(e) => handleInputBlur(e, password, 'Password')}
                onMouseEnter={handleInputHover}
                onMouseLeave={(e) => handleInputHoverLeave(e, password, !!errors.password)}
              />
              {errors.password && (
                <span style={{ color: 'red', fontSize: '0.75rem', marginLeft: '.6rem' }}>
                  {errors.password}
                </span>
              )}
            </div>

            {/* REMEMBER ME */}
            <div
              style={{
                marginTop: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.6rem',
                color: '#4B5563',
                marginLeft: '1rem',
              }}
            >
              <label
                style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={{
                    accentColor: '#4d2603ff',
                  }}
                />
                Remember Me
              </label>

              <Link
                to="/forgotpassword"
                style={{
                  color: '#000000',
                  fontWeight: 700,
                  textDecoration: 'none',
                  marginRight: '2rem',
                  fontSize: '0.6rem',
                }}
              >
                Forgot Password?
              </Link>
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
                  padding: '0.6rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#fff',
                  background: 'linear-gradient(to bottom, #4a2f26, #2f1c14)',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.3s',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    'linear-gradient(to bottom, #3e2b1c, #2e1c0f)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    'linear-gradient(to bottom, #4a2f26, #2f1c14)';
                }}
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
