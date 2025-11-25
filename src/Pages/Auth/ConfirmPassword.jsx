import { useState } from 'react';

export default function ConfirmPassword({ onConfirm }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (!password) {
      setError('Password is required!');
      return;
    }

    setProcessing(true);
    setError('');

    setTimeout(() => {
      console.log('Password confirmed:', password);
      setProcessing(false);
      setPassword('');
      if (onConfirm) onConfirm(password);
      alert('Password confirmed!');
    }, 1000);
  };

  const inputStyle = {
    width: '22.5rem',
    padding: '0.7rem',
    borderRadius: '0.5rem',
    border: `1px solid ${error ? 'red' : '#D1D5DB'}`,
    transition: 'all 0.2s',
    color: '#111827',
    backgroundColor: password ? '#fff4e5ff' : '#ffffff',
  };

  return (
    <div
      style={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        background: 'linear-gradient(to bottom, #fae7d4ff 65%, #7e6346ff)',
        padding: '2rem',
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "1.5rem",
          boxShadow: "4px 8px 20px rgba(0, 0, 0, 0.4)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#000',
            textShadow: '0 2px 4px rgba(0,0,0,0.25)',
            letterSpacing: '1px',
          }}
        >
          Confirm Password
        </h2>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#8d98a5',
            marginBottom: '1.5rem',
            letterSpacing: '1px',
          }}
        >
          This is a secure area of the application.<br />Please confirm your password before continuing.
        </p>

        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <label htmlFor="password" style={{ fontWeight: '550', textAlign: 'left', color: '#3b3b3b',marginLeft: '.6rem' }}>
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff4e5';
              e.currentTarget.style.borderColor = '#4a2f26';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = password ? '#fff4e5ff' : '#ffffff';
              e.currentTarget.style.borderColor = error ? 'red' : '#D1D5DB';
            }}
          />

          {error && (
            <div style={{ color: 'red', fontSize: '0.75rem', textAlign: 'left', marginTop: '-0.5rem',marginLeft: '.6rem' }}>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem', }}>
            <button
              type="submit"
              disabled={processing}
              style={{
                width: '150px',
                padding: '0.6rem',
                fontSize: '1rem',
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
              {processing ? 'Confirming...' : 'Confirm'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
