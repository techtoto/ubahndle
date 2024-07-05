import { FC } from 'react';
import { StatsBox } from './StatsBox';
import { StatsHistogram } from './StatsHistogram';

export const Stats: FC<{ stats: any, isDarkMode: boolean }> = ({ stats, isDarkMode }) => {
  return (
    <>
      <StatsBox isDarkMode={isDarkMode} stats={stats} />
      <StatsHistogram isDarkMode={isDarkMode} stats={stats} />
    </>
  );
}
