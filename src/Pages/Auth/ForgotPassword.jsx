import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    setErrors({});
    setStatus('');

    // Simulate a front-end "password reset" delay
    setTimeout(() => {
      if (!email) {
        setErrors({ email: 'Email is required' });
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setErrors({ email: 'Enter a valid email address' });
      } else {
        setStatus('Password reset link sent successfully!');
      }
      setProcessing(false);
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        background: 'linear-gradient(to bottom, #f5e7d9, #cfa981)',
        padding: '2rem',
      }}
    >
      {/* Logo */}
      <div style={{ position: 'absolute', top: '1.5rem', left: '2rem' }}>
        <img
          src="/images/2.png"
          alt="888 Chocolates & More Logo"
          style={{ width: '150px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
        />
      </div>

      {/* Form Card */}
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '1.5rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          marginTop: '3rem',
        }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem', color: '#422912' }}>
          Forgot Password?
        </h2>
        <p style={{ fontSize: '0.875rem', color: '#555', marginBottom: '1.5rem' }}>
          Please enter your verified email address from your account.
        </p>

        {status && (
          <div style={{ marginBottom: '1rem', color: 'green', fontWeight: '500' }}>{status}</div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextInput
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            isFocused={true}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
          />
          <InputError message={errors.email} />

          <PrimaryButton
            disabled={processing}
            style={{
              width: '100%',
              padding: '0.5rem',
              backgroundColor: '#422912',
              color: '#fff',
              fontSize: '1rem',
              borderRadius: '0.5rem',
              cursor: processing ? 'not-allowed' : 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => { if (!processing) e.currentTarget.style.backgroundColor = '#2e1e0f'; }}
            onMouseLeave={(e) => { if (!processing) e.currentTarget.style.backgroundColor = '#422912'; }}
          >
            {processing ? 'Sending...' : 'Reset Password'}
          </PrimaryButton>
        </form>

        <a
          href="/login"
          style={{
            display: 'block',
            marginTop: '1rem',
            fontSize: '0.875rem',
            color: '#1d4ed8',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
