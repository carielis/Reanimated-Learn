import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled(TextInput)`
  width: 344px;
  height: 24px;
  border-bottom: 5px solid red;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin: 16px;
`;

export const Field = ({
  placeholder = 'placeholder',
  value,
  onChange,
  error,
  secure = false,
}) => {
  return (
    <View>
      <StyledInput
        value={value}
        onChangeText={onChange}
        secureTextEntry={secure}
        numberOfLines={1}
        style={{
          borderBottomColor: '#C4C4C4',
          color: '#C4C4C4',
          borderBottomWidth: 1.5,
        }}
        placeholder={placeholder}
      />
    </View>
  );
};
