import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.TouchableOpacity`
background: #2B2B2B;
  border-radius: 50px;
  width: 334px;
  height: 58px;
  justify-content: center;
  align-items: center;
  border: 1px solid #2B2B2B;

  // SHADOW

  shadowColor: "#000";
shadowOffset: {
	width: 0,
	height: 7,
};
shadowOpacity: 0.41;
shadowRadius: 9.11;

elevation: 14;
`;

const Title = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 26px;
  color: white;
`;

export const Button = ({
  title = 'Button',
  action = () => alert('WORK'),
  disable = false,
}) => {
  return (
    <StyledButton onPress={action} dark disabled={disable}>
      <Title>{title}</Title>
    </StyledButton>
  );
};
