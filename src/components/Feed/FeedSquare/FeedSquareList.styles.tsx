import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  padding: 5px;
`;

export const Square = styled.div`
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border: 1px solid #ddd;
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
