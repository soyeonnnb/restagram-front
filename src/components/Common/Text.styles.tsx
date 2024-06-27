import styled from "styled-components";

export const Span = styled.span<{
  weight?: number;
  color?: string;
  size?: string;
  pointer?: string;
  marginr?: number;
  marginl?: number;
  zindex?: number;
}>`
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  margin-left: ${({ marginl }) => (marginl ? marginl : 0)}px;
  margin-right: ${({ marginr }) => (marginr ? marginr : 0)}px;
  z-index: ${({ zindex }) => (zindex ? zindex : 0)};
  &:hover {
    cursor: ${(props) => (props.pointer === "true" ? "pointer" : "default")};
  }
`;
