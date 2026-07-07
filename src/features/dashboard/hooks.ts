import { useEffect, useState } from 'react';
import { getDashboardSnapshot } from './api';
import type { DashboardSnapshot } from './types';

const fallback: DashboardSnapshot = {
  title: 'personalized fit recommendations',
  primaryMetric: '88.9%',
  secondaryMetric: '5 retrain jobs',
  alerts: ['personalized fit recommendations', '5 retrain jobs']
};

export const useDashboardSnapshot = () => {
  const [data, setData] = useState<DashboardSnapshot>(fallback);

  useEffect(() => {
    void getDashboardSnapshot().then(setData).catch(() => setData(fallback));
  }, []);

  return data;
};
