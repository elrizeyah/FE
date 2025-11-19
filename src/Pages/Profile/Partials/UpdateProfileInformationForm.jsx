import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  userData,
  className = {},
}) {
  const [data, setData] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [recentlySuccessful, setRecentlySuccessful] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!data.name) newErrors.name = 'Name is required';
    if (!data.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Invalid email';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      console.log('Profile updated', data);
      setProcessing(false);
      setErrors({});
      setRecentlySuccessful(true);
      setTimeout(() => setRecentlySuccessful(false), 2000);
    }, 1000);
  };

  const resendVerification = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
    console.log('Verification email sent');
  };

  return (
    <AuthenticatedLayout user={{ name: 'Demo User' }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', ...className }}>
        {/* Header */}
        <header>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4b2e17', marginBottom: '0.5rem' }}>
            Profile Information
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.5 }}>
            Update your account's profile information and email address.
          </p>
        </header>

        {/* Form */}
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          {/* Name */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="name" style={{ fontWeight: 'bold', color: '#374151' }}>Name</label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              style={{
                padding: '0.5rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            {errors.name && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.name}</span>}
          </div>

          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold', color: '#374151' }}>Email</label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              style={{
                padding: '0.5rem',
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            {errors.email && <span style={{ color: 'red', fontSize: '0.875rem' }}>{errors.email}</span>}
          </div>

          {/* Email verification */}
          {mustVerifyEmail && userData?.email_verified_at === null && (
            <div style={{ marginTop: '0.5rem' }}>
              <p style={{ fontSize: '0.875rem', color: '#374151' }}>
                Your email address is unverified.
                <button
                  type="button"
                  onClick={resendVerification}
                  style={{
                    marginLeft: '0.25rem',
                    textDecoration: 'underline',
                    background: 'none',
                    border: 'none',
                    color: '#4b5563',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Click here to re-send the verification email.
                </button>
              </p>

              {emailSent && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: '#16a34a' }}>
                  A new verification link has been sent to your email address.
                </div>
              )}
            </div>
          )}

          {/* Submit */}
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
