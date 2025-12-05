import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Navigation Ready!</Text>
      </View>
    </NavigationContainer>
  );
}