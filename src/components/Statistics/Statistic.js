import PropTypes from "prop-types";
import StatisticValue from "./StatisticValue/StatisticValue";

export default function Statistic({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2>Upload stats</h2>}
      <ul>
        {stats.map((el) => {
          return (
            <StatisticValue
              key={el.id}
              percentage={el.percentage}
              label={el.label}
            />
          );
        })}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
