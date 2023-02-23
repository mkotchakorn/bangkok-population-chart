import { PopulationDataInterface } from 'assets/interface';
import { colors } from 'constants/colors';

interface ChartInterface {
  data: PopulationDataInterface;
}

export default function Chart(props: ChartInterface) {
  const height = 250;
  const x0 = 30;
  const y0 = 20;

  //   const barHeight = 10;
  //   const gap = 5;

  return (
    <svg width={`100%`} height={height}>
      <line x1={x0} y1={y0} x2={x0} y2={height} stroke={colors.white} />
      <line x1={`100%`} y1={y0} x2={`100%`} y2={`100%`} stroke={colors.white} />
      <text x={x0 - 10} y={y0 - 10} fill={colors.white} style={{ fontSize: '10px' }}>
        min
      </text>
      <text x={`97%`} y={y0 - 10} fill={colors.white} style={{ fontSize: '10px' }}>
        max
      </text>
    </svg>
  );
}
