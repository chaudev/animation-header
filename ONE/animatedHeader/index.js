import React from 'react';
import {View, Text, Animated, StatusBar, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const MAX_HEIGHT = 100;
const MIN_HEIGHT = 50;

// 'light-content' or 'dark-content'
const barStyle = 'light-content';

export const AnimatedHeader = ({animatedValue}) => {
  // Statusbar height (insets.top)
  const insets = useSafeAreaInsets();

  // Animation
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, MAX_HEIGHT + insets.top],
    outputRange: [MAX_HEIGHT + insets.top, insets.top + MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  // Render
  return (
    <Animated.View
      style={{
        height: headerHeight,
        backgroundColor: '#46b96c',
        paddingTop: insets.top,
        paddingHorizontal: 15,
      }}>
      <StatusBar
        translucent={true}
        barStyle={barStyle}
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.header}>
        <Text style={[styles.text, styles.bold]}>This is header</Text>
      </View>
      <View style={styles.header}>
        <Text style={[styles.text]}>Will hide on scroll ScrollView</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
});
