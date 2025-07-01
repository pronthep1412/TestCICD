import { View, SafeAreaView, Text } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'space-around', height: '100%' }}>
        <View
          style={{
            backgroundColor: 'blue',
            width: '100%',
            height: 100,
            alignItems: 'center',
          }}
        >
          <Text>123555ss</Text>
          <Text>123</Text>
        </View>
        <View
          style={{ backgroundColor: 'green', width: '100%', height: 100 }}
        />
        <View style={{ backgroundColor: 'blue', width: '100%', height: 100 }} />
      </View>
    </SafeAreaView>
  );
}
