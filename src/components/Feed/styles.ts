import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  padding: 11px 0 15px;
  margin-top: 10px;
  border-bottom: 2px solid var(--twitter);
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: var(--twitter);
  outline: 0;
  cursor: pointer;

    &:hover {
        background-color: var(--twitter-dark-hover);
    }
`;

export const Tweets = styled.div`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;

`;
