import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const themes = {
  light: {
    bg: '#fff',
    text: '#222',
    title: '#38598b',
    actualBars: 'rgba(56, 89, 139, 0.5)',
    projectionBars: 'rgba(56, 89, 139, 0.2)',
  },
  dark: {
    bg: '#1b222c',
    text: '#eee',
    title: '#b3e5fc',
    actualBars: 'rgba(179, 229, 252, 0.7)',
    projectionBars: 'rgba(179, 229, 252, 0.3)',
  },
};

export function ProjectionsChart() {
  const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(newTheme);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const colors = themes[theme] || themes.light;

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actuals',
        data: [18, 22, 18, 25, 14, 21],
        backgroundColor: colors.actualBars,
      },
      {
        label: 'Projections',
        data: [21, 25, 21, 28, 17, 24],
        backgroundColor: colors.projectionBars,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: colors.text }, position: 'top' },
      title: { display: true, text: 'Projections vs Actuals', font: { size: 22 }, color: colors.title },
      tooltip: {
        enabled: true,
        backgroundColor: colors.bg,
        titleColor: colors.text,
        bodyColor: colors.text,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: colors.text, font: { size: 14 }, callback: (v) => `${v}M` },
      },
      x: {
        ticks: { color: colors.text, font: { size: 14 } },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: 452, height: 252, background: colors.bg, padding: 12, borderRadius: 8 }}>
      <Bar data={data} options={options} />
    </div>
  );
}
