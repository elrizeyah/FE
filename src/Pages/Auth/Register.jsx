import React, { useState } from 'react';

export default function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const handleChange = (field) => (e) => {
    setData({ ...data, [field]: e.target.value });
    setErrors((prev) => ({ ...prev, [field]: '' })); // clear error on change
  };

  const handleCheckbox = (e) => {
    setData({ ...data, remember: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});

    const newErrors = {};
    if (!data.name) newErrors.name = 'Username is required';
    if (!data.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Invalid email';
    if (!data.password) newErrors.password = 'Password is required';
    if (data.password !== data.password_confirmation)
      newErrors.password_confirmation = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setProcessing(false);
      return;
    }

    alert(
      `Registered successfully!\nUsername: ${data.name}\nEmail: ${data.email}\nRemember Me: ${
        data.remember ? 'Yes' : 'No'
      }`
    );

    setData({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      remember: false,
    });

    setProcessing(false);
  };

  const inputStyle = (field) => ({
    marginTop: '0.25rem',
    width: '22.5rem',
    borderRadius: '6px',
    border: `1px solid ${errors[field] ? 'red' : '#D1D5DB'}`,
    padding: '0.5rem',
    backgroundColor: errors[field]
      ? '#ffe5e5'
      : data[field]
      ? '#fff4e5ff'
      : '#ffffff',
    color: errors[field] ? 'red' : '#111827',
    transition: 'all 0.2s',
  });

  const handleFocus = (e) => {
    e.target.style.borderColor = '#563d28';
    e.target.style.backgroundColor = '#fff4e5ff';
    e.target.placeholder = '';
  };

  const handleBlur = (e, field, placeholder) => {
    e.target.style.borderColor = errors[field] ? 'red' : '#D1D5DB';
    e.target.style.backgroundColor = errors[field]
      ? '#ffe5e5'
      : data[field]
      ? '#fff4e5ff'
      : '#ffffff';
    e.target.placeholder = data[field] ? '' : placeholder;
    e.target.style.color = errors[field] ? 'red' : '#111827';
  };

  const handleHover = (e) => {
    e.target.style.borderColor = '#563d28';
    e.target.style.backgroundColor = '#fff4e5ff';
  };

  const handleHoverLeave = (e, field) => {
    e.target.style.borderColor = errors[field] ? 'red' : '#D1D5DB';
    e.target.style.backgroundColor = errors[field]
      ? '#ffe5e5'
      : data[field]
      ? '#fff4e5ff'
      : '#ffffff';
    e.target.style.color = errors[field] ? 'red' : '#111827';
  };

  return (
    <div
      style={{
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/images/1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div>
        {/* Logo */}
        <img
          src="/images/2.png"
          alt="Logo"
          style={{
            width: '160px',
            height: 'auto',
            marginTop: '-2rem',
            marginBottom: '-2rem',
            marginLeft: '-29rem',
          }}
        />

        {/* Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            maxWidth: '400px',
            marginTop: '-2rem',
          }}
        >
          {/* Form Card */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              borderRadius: '12px',
              boxShadow: '4px 8px 20px rgba(0, 0, 0, 0.4)',
              padding: '3.5rem 2rem 1rem 2rem',
              width: '24rem',
              marginTop: '1rem',
              zIndex: 1,
              textAlign: 'left',
              borderBottom: '2px solid rgba(0, 0, 0, .8)',
              height: 'auto',
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: '700',
                marginTop: '-1rem',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.25)',
              }}
            >
              SIGN UP
            </h2>

            <form onSubmit={handleSubmit}>
              {['name', 'email', 'password', 'password_confirmation'].map((field) => (
                <div key={field} style={{ textAlign: 'left', marginBottom: '1rem' }}>
                  <label htmlFor={field} style={{ fontWeight: '550', color: '#3b3b3bff' }}>
                    {field === 'name'
                      ? 'Username'
                      : field === 'password_confirmation'
                      ? 'Confirm Password'
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    type={field.includes('password') ? 'password' : 'text'}
                    value={data[field]}
                    onChange={handleChange(field)}
                    placeholder={
                      field === 'name'
                        ? 'Username'
                        : field === 'password_confirmation'
                        ? 'Confirm Password'
                        : field.charAt(0).toUpperCase() + field.slice(1)
                    }
                    style={inputStyle(field)}
                    onFocus={handleFocus}
                    onBlur={(e) =>
                      handleBlur(
                        e,
                        field,
                        field === 'name'
                          ? 'Username'
                          : field === 'password_confirmation'
                          ? 'Confirm Password'
                          : field.charAt(0).toUpperCase() + field.slice(1)
                      )
                    }
                    onMouseEnter={handleHover}
                    onMouseLeave={(e) => handleHoverLeave(e, field)}
                  />
                  {errors[field] && (
                    <span style={{ color: 'red', fontSize: '0.75rem', marginLeft: '.6rem' }}>{errors[field]}</span>
                  )}
                </div>
              ))}

              {/* Remember Me */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <input
                  id="remember"
                  type="checkbox"
                  checked={data.remember}
                  onChange={handleCheckbox}
                  style={{
                    accentColor: '#4d2603ff',
                    cursor: 'pointer',
                    transform: 'scale(1)',
                    transformOrigin: 'top left',
                  }}
                />
                <label
                  htmlFor="remember"
                  style={{
                    marginLeft: '0.1rem',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    color: '#4B5563',
                  }}
                >
                  Remember Me
                </label>
              </div>

              {/* Submit Button */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
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
                    e.currentTarget.style.background = 'linear-gradient(to bottom, #3e2b1c, #2e1c0f)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to bottom, #4a2f26, #2f1c14)';
                  }}
                >
                  SIGN UP
                </button>
              </div>

              {/* Sign In Link */}
              <p
                style={{
                  marginTop: '1rem',
                  fontSize: '0.7rem',
                  color: '#919cafff',
                  textAlign: 'center',
                }}
              >
                Already have an account?{' '}
                <a
                  href="/login"
                  style={{
                    color: '#2563EB',
                    fontWeight: '500',
                    textDecoration: 'underline',
                  }}
                >
                  Log In
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
