import React from 'react';
import {Animated, StatusBar, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DATA from '../headerAnimation/data';
import {AnimatedHeader} from './animatedHeader';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 50;
const SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const HeaderTow = () => {
  const insets = useSafeAreaInsets();

  let ANIM_HEADER_SLIDE = new Animated.Value(0);

  let handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: ANIM_HEADER_SLIDE}}}],
    {useNativeDriver: true},
  );

  // Render
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />

      <AnimatedHeader
        animatedValue={ANIM_HEADER_SLIDE}
        scrollDistance={SCROLL_DISTANCE}
        maxHeight={HEADER_MAX_HEIGHT}
      />

      <Animated.ScrollView
        style={{flex: 1, paddingTop: HEADER_MAX_HEIGHT}}
        contentContainerStyle={{
          marginTop: insets.top,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
        onScroll={handleScroll}>
        <Text style={{color: '#101010', fontSize: 28}}>{DATA}</Text>
        <View style={{marginTop: HEADER_MAX_HEIGHT + 20}} />
      </Animated.ScrollView>
    </View>
  );
};
