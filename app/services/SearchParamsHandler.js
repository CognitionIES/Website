'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SearchParamsHandler({ onParamChange }) {
  const searchParams = useSearchParams();
  const sectionParam = searchParams.get('someParam') || 'None';

  useEffect(() => {
    if (sectionParam) {
      const sectionId = sectionParam.toLowerCase();
      const targetSection = document.getElementById(sectionId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.warn(`Section not found: ${sectionId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    onParamChange(sectionParam); // Pass the param back to parent if needed
  }, [sectionParam, onParamChange]);

  return null; // This component only handles side effects, no UI
}