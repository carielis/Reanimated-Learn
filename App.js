import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import styled from 'styled-components';
import {Field} from './src/shared/components/field';
import {LogoSVG} from './src/shared/svg/logo-svg';
import {Button} from './src/shared/components/button';

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: ({translationX, translationY}, ctx) => {
      x.value = ctx.x + translationX;
      y.value = ctx.y + translationY;
    },
    onEnd: ({velocityX, velocityY}, ctx) => {
      x.value = withSpring(0, {velocity: velocityX});
      y.value = withSpring(0, {velocity: velocityY});
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  useEffect(() => {}, []);
  const styles = {
    backgroundColor: 'red',
    justifyContent: 'center',
    width: 100,
    height: 100,
    alignItems: 'center',
  };
  return (
    <Container>
      <LogoSVG />
      <Button />
    </Container>
  );
}
