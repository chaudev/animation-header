import React, {useRef} from 'react';
import {
  Text,
  SafeAreaView,
  Animated,
  ScrollView,
  StyleSheet,
} from 'react-native';
import DATA from './data';
import {AnimatedHeader} from './animatedHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const offset = useRef(new Animated.Value(0)).current;

  const scroll = Animated.event([{nativeEvent: {contentOffset: {y: offset}}}], {
    useNativeDriver: false,
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <AnimatedHeader animatedValue={offset} />
        <ScrollView
          style={{flex: 1, backgroundColor: 'white'}}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={scroll}>
          <Text style={{color: '#101010', fontSize: 28}}>{DATA}</Text>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
