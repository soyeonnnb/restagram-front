import styled from "styled-components";
import colors from "../Common/colors";

export const Layout = styled.div<{ width?: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  background-color: yellow;
  margin-bottom: 20px;
`;

export const Box = styled.div`
  background-color: ${colors.purple._50};
  &:focus {
    outline: none;
  }
`;
export const Image = styled.img<{ width?: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  object-fit: contain;
`;

export const NextArrow = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  &:before {
    display: none;
  }
`;

export const PrevArrow = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  z-index: 1;
  align-items: center;
  &:before {
    display: none;
  }
`;
