import React, { useRef, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function UpdatePasswordForm({ className = '' }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();

  const [data, setData] = useState({
    current_password: '',
    password: '',
    password_confirmation: '',
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [recentlySuccessful, setRecentlySuccessful] = useState(false);

  const updatePassword = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!data.current_password) newErrors.current_password = 'Current password is required';
    if (!data.password) newErrors.password = 'New password is required';
    if (data.password !== data.password_confirmation)
      newErrors.password_confirmation = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      if (newErrors.current_password) currentPasswordInput.current.focus();
      else if (newErrors.password) passwordInput.current.focus();
      return;
    }

    setProcessing(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Password updated', data);
      setProcessing(false);
      setRecentlySuccessful(true);
      setData({
        current_password: '',
        password: '',
        password_confirmation: '',
      });
      setErrors({});
      setTimeout(() => setRecentlySuccessful(false), 2000);
    }, 1000);
  };

  return (
    <AuthenticatedLayout user={{ name: 'Demo User' }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', ...className }}>
        {/* Header */}
        <header>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4b2e17', marginBottom: '0.5rem' }}>
            Update Password
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.5 }}>
            Ensure your account is using a long, random password to stay secure.
          </p>
        </header>

        <form onSubmit={updatePassword} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          {/* Current Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="current_password" style={{ fontWeight: 'bold', color: '#374151' }}>Current Password</label>
            <input
              ref={currentPasswordInput}
              id="current_password"
              type="password"
              value={data.current_password}
              onChange={(e) => setData({ ...data, current_password: e.target.value })}
              style={{
                padding: '0.5rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            {errors.current_password && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.current_password}</span>}
          </div>

          {/* New Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="password" style={{ fontWeight: 'bold', color: '#374151' }}>New Password</label>
            <input
              ref={passwordInput}
              id="password"
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              style={{
                padding: '0.5rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            {errors.password && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.password}</span>}
          </div>

          {/* Confirm Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="password_confirmation" style={{ fontWeight: 'bold', color: '#374151' }}>Confirm Password</label>
            <input
              id="password_confirmation"
              type="password"
              value={data.password_confirmation}
              onChange={(e) => setData({ ...data, password_confirmation: e.target.value })}
              style={{
                padding: '0.5rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            {errors.password_confirmation && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.password_confirmation}</span>}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
            <button
              type="submit"
              disabled={processing}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                background: 'linear-gradient(to bottom, #22c55e, #15803d)',
                color: 'white',
                fontWeight: 'bold',
                border: 'none',
                cursor: processing ? 'not-allowed' : 'pointer',
                opacity: processing ? 0.5 : 1,
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                if (!processing) e.currentTarget.style.background = 'linear-gradient(to bottom, #16a34a, #166534)';
              }}
              onMouseOut={(e) => {
                if (!processing) e.currentTarget.style.background = 'linear-gradient(to bottom, #22c55e, #15803d)';
              }}
            >
              Save Changes
            </button>

            {recentlySuccessful && (
              <span style={{ fontSize: '0.875rem', color: '#6b7280', textAlign: 'center' }}>Saved.</span>
            )}
          </div>
        </form>
      </section>
    </AuthenticatedLayout>
  );
}
