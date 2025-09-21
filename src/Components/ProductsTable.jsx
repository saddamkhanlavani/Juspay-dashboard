import React, { useEffect, useState } from 'react';

// Theme color tokens
const themes = {
  light: {
    bg: '#f9f9f9',
    border: '#bbbbbb',
    header: '#171717',
    subheader: '#b8c2d9',
    rowBorder: '#e0e0e0',
    text: '#222',
    amount: '#222',
  },
  dark: {
    bg: '#151a24',
    border: '#bbbbbb',
    header: '#fff',
    subheader: '#5c7392',
    rowBorder: '#283046',
    text: '#e5e7eb',
    amount: '#e5e7eb',
  },
};

const data = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', qty: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', qty: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve  Shirt', price: '$39.99', qty: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', qty: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', qty: 64, amount: '$1,965.81' },
];

export function ProductsTable() {
  // Sync theme from <html data-theme="">
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

  useEffect(() => {
    const observer = new MutationObserver(() =>
      setTheme(document.documentElement.getAttribute('data-theme') || 'light')
    );
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const colors = themes[theme] || themes.light;

  return (
    <div style={{
      width: 600,
      margin: '0 auto',
      background: colors.bg,
      border: `2px solid ${colors.border}`,
      borderRadius: 18,
      padding: 30,
      boxSizing: 'border-box',
    }}>
      <div style={{
        fontWeight: 700,
        fontSize: 28,
        marginBottom: 18,
        color: colors.header,
      }}>
        Top Selling Products
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ color: colors.subheader, fontSize: 21, fontWeight: 500 }}>
            <th style={{ textAlign: 'left', padding: '0 0 12px 0', fontWeight: 600 }}>Name</th>
            <th style={{ textAlign: 'right', padding: '0 12px 12px 0', fontWeight: 600 }}>Price</th>
            <th style={{ textAlign: 'right', padding: '0 12px 12px 0', fontWeight: 600 }}>Quantity</th>
            <th style={{ textAlign: 'right', padding: '0 0 12px 0', fontWeight: 600 }}>Amount</th>
          </tr>
          <tr>
            <td colSpan={4} style={{
              borderBottom: `2px solid ${colors.rowBorder}`,
              height: 1,
              padding: 0,
            }} />
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ color: colors.text, fontSize: 19 }}>
              <td style={{ padding: '14px 0' }}>{row.name}</td>
              <td style={{ textAlign: 'right', padding: '14px 12px 14px 0', color: colors.text }}>{row.price}</td>
              <td style={{ textAlign: 'right', padding: '14px 12px 14px 0', color: colors.text }}>{row.qty}</td>
              <td style={{ textAlign: 'right', padding: '14px 0', fontWeight: 700, color: colors.amount }}>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
