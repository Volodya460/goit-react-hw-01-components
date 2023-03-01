import PropTypes from "prop-types";

export default function StatisticValue(props) {
  const { id, label, percentage } = props;
  return (
    <li class="item" id={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
}

StatisticValue.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
