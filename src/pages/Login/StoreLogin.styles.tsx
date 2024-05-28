import styled from "styled-components";
import colors from "../../components/Common/colors";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 70%;
  margin-bottom: 30px;
`;

export const Text = styled.span`
  margin-top: 10px;
  font-size: 0.8em;
  color: ${colors.black._300};
  &:hover {
    cursor: pointer;
    color: ${colors.black._900};
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  outline: none;
  border: 2px solid ${colors.purple._100};
  padding: 0 20px;
  font-size: 15px;
  border-radius: 10px;

  &:focus {
    border-color: ${colors.purple._500};
  }
`;
