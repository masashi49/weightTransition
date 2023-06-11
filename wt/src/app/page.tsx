'use client';
import React from 'react';
import reportAccessibility from '@/utils/reportAccessibility';
import { Home } from '@/components/pages/home';

export default function TopPage() {
  reportAccessibility(React);
  return <Home />;
}
