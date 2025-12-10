import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  const hoverEnter = (box) => {
    box.style.borderColor = '#563d28';
    box.style.backgroundColor = '#fff4e5ff';
  };

  const hoverLeave = (box, value, hasError) => {
    box.style.borderColor = hasError ? 'red' : '#D1D5DB';
    box.style.backgroundColor = hasError
      ? '#ffe5e5'
      : value
      ? '#fff4e5ff'
      : '#ffffff';
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
        {/* LOGO */}
        <img
          src="/images/2.png"
          alt="Logo"
          style={{
            width: '70%',
            objectFit: 'contain',
            marginBottom: '-41rem',
            zIndex: 2,
          }}
        />

        {/* CARD */}
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: 'rgba(255,255,255,0.98)',
            borderRadius: '12px',
            boxShadow: '4px 8px 10px rgba(34, 34, 34, 0.6)',
            padding: '3rem 2rem 2rem 2rem',
            marginTop: '35rem',
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              color: '#000',
              fontSize: '1.8rem',
              textAlign: 'center',
              marginBottom: '2rem',
              marginTop:"4rem"
            }}
          >
            LOG IN
          </h2>

          <form onSubmit={submit}>
            {/* EMAIL FIELD */}
            <div style={{ marginBottom: '1rem', position: 'relative', width:"22.5rem" }}>
              <label
                htmlFor="email"
                style={{ fontWeight: 550, color: '#3b3b3b' }}
              >
                E-mail
              </label>

              <div style={{ position: 'relative' }}>
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
                    width: '90%',
                    padding: '0.5rem 2.5rem 0.5rem 2.5rem', // match Register spacing
                    borderRadius: '2px',
                    border: `1px solid ${errors.email ? 'red' : '#D1D5DB'}`,
                    backgroundColor: errors.email
                      ? '#ffe5e5'
                      : email
                      ? '#fff4e5ff'
                      : '#ffffff',
                    color: errors.email ? 'red' : '#111827',
                    transition: 'all 0.2s',
                    fontSize: '0.9rem',
                  }}
                  onMouseEnter={(e) => hoverEnter(e.target)}
                  onMouseLeave={(e) =>
                    hoverLeave(e.target, email, !!errors.email)
                  }
                />
                {errors.email && (
                  <span style={{ color: 'red', fontSize: '0.75rem', marginLeft: '.6rem' }}>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* PASSWORD FIELD */}
            <div style={{ marginBottom: '1rem', position: 'relative' }}>
              <label
                htmlFor="password"
                style={{ fontWeight: '550', color: '#3b3b3bff' }}
              >
                Password
              </label>

              <div
                style={{
                  position: 'relative',
                  width: '24.7rem',
                  marginTop: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  border: errors.password ? '1px solid red' : '1px solid #D1D5DB',
                  borderRadius: '2px',
                  backgroundColor: errors.password
                    ? '#ffe5e5'
                    : password
                    ? '#fff4e5ff'
                    : '#ffffff',
                  paddingRight: '0.6rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => hoverEnter(e.currentTarget)}
                onMouseLeave={(e) =>
                  hoverLeave(e.currentTarget, password, !!errors.password)
                }
              >
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: '' }));
                  }}
                  style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    padding: '0.5rem 2.5rem 0.5rem 2.5rem', // match Register spacing
                    background: 'transparent',
                    color: errors.password ? 'red' : '#111827',
                    fontSize: '0.9rem',
                  }}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    opacity: 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: errors.password ? 'red' : '#555',
                  }}
                >
                  {showPassword ? <IconEye size={18} /> : <IconEyeOff size={18} />}
                </div>
              </div>

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
