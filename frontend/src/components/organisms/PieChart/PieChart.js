import React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

export const PieChartComponent = ({ title, series, height = 300 }) => {
  return (
    <Box sx={{ width: '100%', height }}>
      {title && (
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
      )}
      <PieChart series={series} slotProps={{ legend: { hidden: true } }} sx={{ height: '100%' }} />
    </Box>
  );
};
export default PieChartComponent;