import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Inventory2() {
  // Dummy data for front-end demonstration
  const transactions = [
    { id: 'TXN001', product_name: 'Product A', quantity: 10, created_at: '2025-11-19T10:00:00Z' },
    { id: 'TXN002', product_name: 'Product B', quantity: 5, created_at: '2025-11-18T15:30:00Z' },
    { id: 'TXN003', product_name: 'Product C', quantity: 8, created_at: '2025-11-17T09:20:00Z' },
  ];

  const styles = {
    container: { paddingTop: '3rem', paddingBottom: '3rem' },
    innerContainer: { maxWidth: '1120px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    card: { backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderRadius: '0.5rem', padding: '1.5rem' },
    title: { fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' },
    paragraph: { color: '#4b5563', marginBottom: '1.5rem' },
    table: { width: '100%', borderCollapse: 'collapse', border: '1px solid #e5e7eb', borderRadius: '0.5rem', overflow: 'hidden' },
    thead: { backgroundColor: '#e0f2fe', color: '#1e3a8a' },
    th: { padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' },
    td: { padding: '0.75rem 1.5rem', fontSize: '0.875rem', color: '#374151', whiteSpace: 'nowrap' },
    noData: { textAlign: 'center', color: '#6b7280', fontStyle: 'italic', padding: '1rem' },
  };

  return (
    <AuthenticatedLayout
      header={<h2 style={{ fontWeight: '600', fontSize: '1.25rem', color: '#1f2937', lineHeight: '1.75rem' }}>Inventory 2 Report</h2>}
    >
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <div style={styles.card}>
            <h1 style={styles.title}>Inventory 2 Overview</h1>
            <p style={styles.paragraph}>
              This section shows your latest product and stock activity in Inventory 2.
            </p>

            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  <th style={styles.th}>#</th>
                  <th style={styles.th}>Transaction ID</th>
                  <th style={styles.th}>Product Name</th>
                  <th style={styles.th}>Quantity</th>
                  <th style={styles.th}>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length > 0 ? (
                  transactions.map((t, index) => (
                    <tr key={t.id || index} style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={styles.td}>{index + 1}</td>
                      <td style={styles.td}>{t.id}</td>
                      <td style={styles.td}>{t.product_name}</td>
                      <td style={styles.td}>{t.quantity}</td>
                      <td style={styles.td}>{new Date(t.created_at).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={styles.noData}>No transactions found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
