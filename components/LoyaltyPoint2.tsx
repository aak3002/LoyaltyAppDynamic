import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type LoyaltyPoint2Props = {
  conversionRate: string; // e.g., "100 Points ~ 1 AED"
  logo: any;
  cardHolderName: string;
  points: number;
};

export default function LoyaltyPoint2({ conversionRate, logo, cardHolderName, points }: LoyaltyPoint2Props) {
  return (
    <View style={styles.card}>
      <View style={styles.yellowCircle}>
        <Text style={styles.circleText}>{conversionRate}</Text>
      </View>
      <View style={styles.header}>
        <Image source={logo} style={styles.mcLogo} resizeMode="contain" />
      </View>
      <View style={styles.barcodeCard}>
        <Text style={styles.barcodeLabel}>LOYALTY POINTS</Text>
        <View style={styles.barcodeContainer}>
          <Image source={require('./assets/barcode.png')} style={styles.barcode} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.cardholderInfo}>
          <Text style={styles.cardholderLabel}>CARDHOLDER</Text>
          <Text style={styles.cardholderName}>{cardHolderName}</Text>
        </View>
        <View style={styles.pointsInfo}>
          <Text style={styles.pointsLabel}>POINTS</Text>
          <Text style={styles.pointsValue}>{points.toLocaleString()}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D52B1E', 
    borderRadius: 12,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  mcLogo: {
    width: 60,
    height: 60,
  },
  barcodeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  barcodeLabel: {
    color: '#333333',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  barcodeContainer: {
    alignItems: 'center',
  },
  barcode: {
    width: 250,
    height: 150,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardholderInfo: {
    alignItems: 'flex-start',
  },
  cardholderLabel: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
    opacity: 0.9,
  },
  cardholderName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pointsInfo: {
    alignItems: 'flex-end',
  },
  pointsLabel: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
    opacity: 0.9,
  },
  pointsValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  yellowCircle: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 170,
    height: 65,
    backgroundColor: '#FFD700',
    borderRadius: 50,
    borderWidth: 5,
    justifyContent: 'center', 
    alignItems: 'center',      
    paddingHorizontal: 10,     
  },
  circleText: {
    color: '#000',    
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 16,
  },
});
