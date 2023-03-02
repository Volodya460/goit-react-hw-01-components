import PropTypes from 'prop-types';
import {
  DivProfile,
  ImgProfile,
  Description,
  Stats,
  LiProfile,
} from './Profile.styled';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  return (
    <DivProfile>
      <Description>
        <ImgProfile src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <LiProfile>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </LiProfile>
        <LiProfile>
          <span>Views</span>
          <span>{stats.views}</span>
        </LiProfile>
        <LiProfile>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </LiProfile>
      </Stats>
    </DivProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
