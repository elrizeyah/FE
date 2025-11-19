import React, { useRef, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function DeleteUserForm({ className = '' }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const passwordInput = useRef();

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  const deleteUser = (e) => {
    e.preventDefault();
    if (!password) {
      setErrors({ password: 'Password is required' });
      passwordInput.current.focus();
      return;
    }

    setProcessing(true);

    setTimeout(() => {
      console.log('Account deleted'); // simulate deletion
      closeModal();
      setProcessing(false);
    }, 1000);
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);
    setPassword('');
    setErrors({});
  };

  return (
    <AuthenticatedLayout user={{ name: 'Demo User' }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', ...className }}>
        {/* Header */}
        <header>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              color: '#4b2e17',
              marginBottom: '0.5rem',
            }}
          >
            Delete Account
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.5 }}>
            This action is permanent and all your data will be permanently erased. 
            You will not be able to recover your account once it is deleted.
          </p>
        </header>

        {/* Delete Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
          <button
            onClick={confirmUserDeletion}
            style={{
              width: '10rem',
              padding: '0.75rem 1rem',
              backgroundColor: '#f87171',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ef4444')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f87171')}
          >
            Delete
          </button>
        </div>

        {/* Modal */}
        {confirmingUserDeletion && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                width: '90%',
                maxWidth: '28rem',
                boxSizing: 'border-box',
              }}
            >
              <form onSubmit={deleteUser} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>
                  Are you sure you want to delete your account?
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.4 }}>
                  Please enter your password to confirm you would like to permanently delete your account.
                </p>

                <input
                  ref={passwordInput}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #d1d5db',
                    boxSizing: 'border-box',
                  }}
                  autoFocus
                />
                {errors.password && (
                  <p style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {errors.password}
                  </p>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
                  <button
                    type="button"
                    onClick={closeModal}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      border: '1px solid #d1d5db',
                      backgroundColor: '#f3f4f6',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={processing}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      backgroundColor: '#f87171',
                      color: 'white',
                      fontWeight: 'bold',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ef4444')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f87171')}
                  >
                    Delete Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </AuthenticatedLayout>
  );
}
