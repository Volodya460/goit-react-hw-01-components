import styled from '@emotion/styled';
import { randomColor } from '../randomColor';
export const LiStatic = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => randomColor()};
  width: 100%;
`;
