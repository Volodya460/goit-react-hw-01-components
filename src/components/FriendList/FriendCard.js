import PropTypes from "prop-types";

export default function FriendCard({ data }) {
  const { avatar, name, id, isOnline } = data;

  return (
    <li class="item" id={id}>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendCard.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
