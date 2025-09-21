import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const themes = {
  light: {
    bg: '#fff',
    grid: '#ececec',
    axisLabel: '#999',
    current: '#000', // current week (bold, solid line)
    previous: '#B8C2D9', // previous week (thin, gradient fill)
    currentDashed: '#000', // forecast/dotted segment
    legend: '#222',
  },
  dark: {
    bg: '#162036',
    grid: '#273456',
    axisLabel: '#B8C2D9',
    current: '#fff',
    previous: '#3058A4',
    currentDashed: '#fff',
    legend: '#eee',
  },
};

export function RevenueLineChart() {
  // React state for theme sync
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

  // Sync with attribute changes on <html>
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute('data-theme') || 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const colors = themes[theme] || themes.light;

  // Example datasets
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      // Previous week
      {
        label: 'Previous Week',
        data: [13, 19, 13, 17, 17, 25],
        borderColor: colors.previous,
        backgroundColor: colors.previous,
        fill: {
          target: 'origin',
          above: 'rgba(183, 194, 217, 0.10)',
        },
        borderWidth: 3,
        pointRadius: 0,
        tension: 0.5,
      },
      // Current week - solid then dashed (simulate forecast)
      {
        label: 'Current Week',
        data: [18, 12, 14, 20, 23, 20],
        borderColor: colors.current,
        borderDash: [0, 0, 0, 0, 6, 6], // Simulate partly dotted/dashed
        borderWidth: 4,
        pointRadius: 0,
        fill: false,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // custom legend below
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: colors.bg,
        titleColor: colors.legend,
        bodyColor: colors.legend,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: colors.axisLabel, font: { size: 15 } },
      },
      y: {
        min: 0,
        max: 30,
        ticks: {
          color: colors.axisLabel,
          callback: (v) => (v ? `${v}M` : '0'),
          font: { size: 15 },
          stepSize: 10,
        },
        grid: { color: colors.grid }
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{
      width: 600,
      height: 350,
      background: colors.bg,
      borderRadius: 24,
      padding: 24,
      boxSizing: 'border-box',
    }}>
      {/* Custom Legend */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontWeight: 700, fontSize: 22, marginRight: 18, color: colors.legend }}>Revenue</span>
        <span style={{
          width: 9, height: 9, borderRadius: '50%', background: colors.current, display: 'inline-block', marginRight: 6
        }} />
        <span style={{ color: colors.legend, fontSize: 17, marginRight: 16 }}>Current Week&nbsp;<b>$58,211</b></span>
        <span style={{
          width: 9, height: 9, borderRadius: '50%', background: colors.previous, display: 'inline-block', marginRight: 6
        }} />
        <span style={{ color: colors.legend, fontSize: 17 }}>Previous Week&nbsp;<b>$68,768</b></span>
      </div>
      {/* Chart */}
      <Line data={data} options={options} height={220} />
      {/* (Optional) Avatars or elements - place in absolute/flex for positioning */}
    </div>
  );
}
