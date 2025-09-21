import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

const themes = {
  light: {
    bg: '#f9f9f9',
    border: '#bbbbbb',
    text: '#222',
    header: '#262626',
    percentBg: '#393939',
    percentText: '#fff',
    legendColors: ['#393939', '#b3e5c4', '#babefb', '#c7ebfc'],
    legendText: ['#222', '#222', '#222', '#222'],
  },
  dark: {
    bg: '#151a24',
    border: '#bbbbbb',
    text: '#e5e7eb',
    header: '#fff',
    percentBg: '#394050',
    percentText: '#fff',
    legendColors: ['#e5e7eb', '#63e6a3', '#7b7ef5', '#48c2e8'],
    legendText: ['#e5e7eb', '#e5e7eb', '#e5e7eb', '#e5e7eb'],
  },
};

const chartLabels = ['Direct', 'Affiliate', 'Sponsored', 'E-mail'];
const chartValues = [300.56, 135.18, 154.02, 48.96];

export function TotalSalesDonut() {
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

  useEffect(() => {
    const observer = new MutationObserver(() =>
      setTheme(document.documentElement.getAttribute('data-theme') || 'light')
    );
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const colors = themes[theme];

  // Chart data and options
  const donutData = {
    labels: chartLabels,
    datasets: [{
      data: chartValues,
      backgroundColor: colors.legendColors,
      borderWidth: 0,
    }],
  };

  const options = {
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    maintainAspectRatio: false,
  };

  // Find the index of max value for percentage display
  const maxIdx = chartValues.indexOf(Math.max(...chartValues));
  const percent = ((chartValues[maxIdx] / chartValues.reduce((a, b) => a + b, 0)) * 100).toFixed(1);

  return (
    <div style={{
      width: 250,
      height: 400,
      background: colors.bg,
      borderRadius: 18,
      border: `2.5px solid ${colors.border}`,
      boxSizing: 'border-box',
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    }}>
      <div style={{
        fontWeight: 700,
        fontSize: 26,
        marginBottom: 16,
        color: colors.header,
        width: '100%',
        textAlign: 'left',
      }}>
        Total Sales
      </div>
      <div style={{ width: 160, height: 160, position: 'relative', marginBottom: 30 }}>
        <Doughnut data={donutData} options={options} />
        {/* Percentage label */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '56%',
          transform: 'translate(-50%, -50%)',
          background: colors.percentBg,
          color: colors.percentText,
          padding: '8px 22px',
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 20,
          zIndex: 2,
        }}>
          {percent}%
        </div>
      </div>
      <div style={{ width: '100%', marginTop: 12 }}>
        {chartLabels.map((label, i) => (
          <div key={label} style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 18,
            marginBottom: 8,
            color: colors.legendText[i],
            fontWeight: i === 0 ? 700 : 500,
            letterSpacing: 0.2,
          }}>
            <span style={{
              display: 'inline-block',
              width: 14,
              height: 14,
              background: colors.legendColors[i],
              borderRadius: '50%',
              marginRight: 12,
            }} />
            <span style={{ flex: 1 }}>{label}</span>
            <span style={{
              fontWeight: 600,
              color: colors.text,
              minWidth: 80,
              textAlign: 'right',
            }}>
              ${chartValues[i].toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
