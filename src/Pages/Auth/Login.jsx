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

  // --- INPUT EVENTS (same as Register) ---
  const handleFocus = (e) => {
    e.target.style.borderColor = '#563d28';
    e.target.style.backgroundColor = '#fff4e5ff';
  };

  const handleBlur = (e, value, hasError) => {
    e.target.style.borderColor = hasError ? 'red' : '#D1D5DB';
    e.target.style.backgroundColor = hasError
      ? '#ffe5e5'
      : value
      ? '#fff4e5ff'
      : '#ffffff';
    e.target.style.color = hasError ? 'red' : '#111827';
  };

  const handleHover = (e) => {
    e.target.style.borderColor = '#563d28';
    e.target.style.backgroundColor = '#fff4e5ff';
  };

  const handleHoverLeave = (e, value, hasError) => {
    e.target.style.borderColor = hasError ? 'red' : '#D1D5DB';
    e.target.style.backgroundColor = hasError
      ? '#ffe5e5'
      : value
      ? '#fff4e5ff'
      : '#ffffff';
  };

  // --- Checkbox Custom Style ---
  const checkboxBox = {
    width: '13px',
    height: '13px',
    border: '1.4px solid #6b6b6b',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#3b3b3b',
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        padding: '1rem',
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
        {/* Logo */}
        <img
          src="/images/2.png"
          alt="Logo"
          style={{
            width: '70%',
            height: 'auto',
            objectFit: 'contain',
            marginBottom: '-41rem',
            zIndex: 2,
          }}
        />

        {/* Card */}
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
            maxHeight: '450px',
            marginTop: '35rem',
            backgroundColor: 'rgba(255,255,255,0.98)',
            borderRadius: '12px',
            boxShadow: '4px 8px 10px rgba(34, 34, 34, 0.6)',
            padding: '3rem 2rem 2rem 2rem',
            textAlign: 'left',
          }}
        >
          <h2
            style={{
              fontWeight: '700',
              color: '#000',
              fontSize: '1.8rem',
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
            {/* EMAIL */}
            <div>
              <label htmlFor="email" style={{ fontWeight: 550, color: '#3b3b3b' }}>
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="E-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: '' }));
                }}
                style={{
                  marginTop: '0.25rem',
                  width: '95%',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: `1px solid ${errors.email ? 'red' : '#D1D5DB'}`,
                  backgroundColor: errors.email
                    ? '#ffe5e5'
                    : email
                    ? '#fff4e5ff'
                    : '#ffffff',
                  color: errors.email ? 'red' : '#111827',
                  transition: '0.2s',
                }}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, email, !!errors.email)}
                onMouseEnter={handleHover}
                onMouseLeave={(e) => handleHoverLeave(e, email, !!errors.email)}
              />
              {errors.email && (
                <span style={{ color: 'red', fontSize: '0.75rem', marginLeft: '.6rem' }}>
                  {errors.email}
                </span>
              )}
            </div>

            {/* PASSWORD */}
            <div style={{ marginTop: '1rem' }}>
              <label htmlFor="password" style={{ fontWeight: 550, color: '#3b3b3b' }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((prev) => ({ ...prev, password: '' }));
                }}
                style={{
                  marginTop: '0.25rem',
                  width: '95%',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: `1px solid ${errors.password ? 'red' : '#D1D5DB'}`,
                  backgroundColor: errors.password
                    ? '#ffe5e5'
                    : password
                    ? '#fff4e5ff'
                    : '#ffffff',
                  color: errors.password ? 'red' : '#111827',
                  transition: '0.2s',
                }}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, password, !!errors.password)}
                onMouseEnter={handleHover}
                onMouseLeave={(e) =>
                  handleHoverLeave(e, password, !!errors.password)
                }
              />
              {errors.password && (
                <span style={{ color: 'red', fontSize: '0.75rem' }}>
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
                color: 'gray',
                marginLeft: '1rem',
                marginRight: '1rem',
              }}
            >
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={{ accentColor: '#fff', cursor: 'pointer' }}
                />
                Remember Me
              </label>

              <Link
                to="/forgotpassword"
                style={{
                  color: '#000000',
                  fontWeight: 750,
                  textDecoration: 'none',
                }}
              >
                Forgot Password?
              </Link>
            </div>

            {/* BUTTON */}
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                type="submit"
                style={{
                  width: '120px',
                  padding: '0.6rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#fff',
                  background: 'linear-gradient(to bottom, #4a2f26, #2f1c14)',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                  transition: '0.3s',
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
