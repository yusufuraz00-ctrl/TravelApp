import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to {place}</Text>
      <Text style={styles.subText}>Rating: {rating} Stars</Text>
      
      {rating === 5 && (
        <Text style={styles.bonus}>Highly Recommended!</Text>
      )}

      <Button 
        title="Go Back" 
        onPress={() => navigation.goBack()} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subText: { fontSize: 18, marginBottom: 10 },
  bonus: { fontSize: 16, color: 'green', marginBottom: 20, fontWeight: 'bold' }
});