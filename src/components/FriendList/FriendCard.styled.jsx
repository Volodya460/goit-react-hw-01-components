import styled from '@emotion/styled';

export const LiFriendsCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpanFriendCard = styled.span`
  border-radius: 50%;
  width: 15px;
  height: 15px;

  background-color: ${props => {
    if (props.children) {
      return '#008000';
    } else return '#FF0000';
  }};
`;

export const UserName = styled.span`
  margin-left: 15px;
`;
