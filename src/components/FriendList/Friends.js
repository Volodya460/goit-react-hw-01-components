import PropTypes from "prop-types";
import FriendCard from "./FriendCard";
export default function Friend({ data }) {
  return (
    <ul class="friend-list">
      {data.map((el) => {
        return <FriendCard key={el.id} data={el} />;
      })}
    </ul>
  );
}

Friend.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
