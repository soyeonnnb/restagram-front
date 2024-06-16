import styled from "styled-components";
import colors from "../../components/Common/colors";
export const Layout = styled.div``;
export const Section = styled.div``;
export const Title = styled.div<{ set: boolean }>`
  background-color: ${({ set }) =>
    set ? colors.purple._300 : colors.black._100};
  display: flex;
  align-items: center;
  padding-left: 30px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
export const Middle = styled.div``;
export const ImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  padding: 5px;
  margin: 10px;
  box-sizing: border-box;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid ${colors.purple._100};
  box-sizing: border-box;
`;
export const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  overflow: hidden;
`;
export const Button = styled.div`
  width: 200px;
  border: 2px solid ${colors.purple._200};
  box-sizing: border-box;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.purple._200};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`;
