import styled from "styled-components";

export const Span = styled.span<{
  weight?: number;
  color?: string;
  size?: string;
  pointer?: string;
}>`
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : "1rem")};

  &:hover {
    cursor: ${(props) => (props.pointer === "true" ? "pointer" : "default")};
  }
`;
