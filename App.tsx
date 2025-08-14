import React from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import LoyaltyStamp from './components/LoyaltyStamp';
import LoyaltyPoint from './components/LoyaltyPoint';
import LoyaltyPoint2 from './components/LoyaltyPoint2';

export default function App() {
  const mockData = {
    starbucksPoints: {
      brandName: 'STARBUCKS',
      logo: require('./components/assets/StarbucksLogo.png'),
      cardHolderName: 'Asad Ali Kazi',
      pointsAvailable: 2450,
      pointsToNextReward: 550,
      progressPercent: 80,
    },
    mcdPoints: {
      conversionRate: '100 Points ~ 1 AED',
      logo: require('./components/assets/McDLogo.png'),
      cardHolderName: 'Asad Ali Kazi',
      points: 2450,
    },
    starbucksStamps: {
      brandName: 'STARBUCKS',
      logo: require('./components/assets/StarbucksLogo.png'),
      cardHolderName: 'Asad Ali Kazi',
      stampsCollected: 3,
      totalStamps: 10,
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" />
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <LoyaltyStamp {...mockData.starbucksStamps} />
          <LoyaltyPoint {...mockData.starbucksPoints} />
          <LoyaltyPoint2 {...mockData.mcdPoints} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  container: {
    padding: 16,
  },
});
