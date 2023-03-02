import PropTypes from 'prop-types';
import { LiStatic } from './StatisticValue.styled';

export default function StatisticValue(props) {
  const { id, label, percentage } = props;
  return (
    <LiStatic id={id}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </LiStatic>
  );
}

StatisticValue.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
