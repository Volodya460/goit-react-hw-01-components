import PropTypes from 'prop-types';
import FriendCard from './FriendCard';
import { FriendsList } from './Friends.styled';
export default function Friend({ data }) {
  return (
    <FriendsList>
      {data.map(el => {
        return <FriendCard key={el.id} data={el} />;
      })}
    </FriendsList>
  );
}

Friend.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
