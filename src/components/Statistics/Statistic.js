import PropTypes from 'prop-types';
import StatisticValue from './StatisticValue/StatisticValue';
import { StatisticList, H2Static, UlStatic } from './Statistic.styled';

export default function Statistic({ title, stats }) {
  return (
    <StatisticList>
      {title ? <H2Static>{title}</H2Static> : <H2Static>Hello World</H2Static>}
      <UlStatic>
        {stats.map(el => {
          return (
            <StatisticValue
              key={el.id}
              percentage={el.percentage}
              label={el.label}
            />
          );
        })}
      </UlStatic>
    </StatisticList>
  );
}

Statistic.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
