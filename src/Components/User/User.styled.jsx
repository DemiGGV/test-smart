import styled from '@emotion/styled';

export const UserItem = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* По умолчанию одна колонка */
  padding: 10px;
  background-color: #f0f0f0;
  
  &:nth-of-type(2n+1){
    background-color: #fff;
  }
`;

export const TextField = styled.p`
  text-align: left;
  padding: 10px;
  display: inline-block;
`;
