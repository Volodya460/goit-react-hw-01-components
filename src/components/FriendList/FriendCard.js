import PropTypes from 'prop-types';
import { LiFriendsCard, SpanFriendCard, UserName } from './FriendCard.styled';

export default function FriendCard({ data }) {
  const { avatar, name, id, isOnline } = data;

  return (
    <LiFriendsCard id={id}>
      <SpanFriendCard>{isOnline}</SpanFriendCard>
      <img src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </LiFriendsCard>
  );
}

FriendCard.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
