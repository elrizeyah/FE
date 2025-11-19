import { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function ConfirmPassword({ onConfirm }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (!password) {
      setError('Password is required');
      return;
    }

    setProcessing(true);
    setError('');

    // Simulate password confirmation API call
    setTimeout(() => {
      console.log('Password confirmed:', password);
      setProcessing(false);
      setPassword('');
      if (onConfirm) onConfirm(password);
      alert('Password confirmed!');
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        background: 'linear-gradient(to bottom, #f5e7d9, #cfa981)',
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        }}
      >
        <div
          style={{
            marginBottom: '1rem',
            fontSize: '0.9rem',
            color: '#555',
          }}
        >
          This is a secure area of the application. Please confirm your password before continuing.
        </div>

        <form onSubmit={submit}>
          <div style={{ marginBottom: '1rem' }}>
            <InputLabel htmlFor="password" value="Password" />

            <TextInput
              id="password"
              type="password"
              name="password"
              value={password}
              isFocused={true}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full"
            />

            {error && <InputError message={error} className="mt-2" />}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <PrimaryButton disabled={processing}>
              {processing ? 'Confirming...' : 'Confirm'}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}
