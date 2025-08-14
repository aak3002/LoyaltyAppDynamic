import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

type LoyaltyPointProps = {
  brandName: string;
  logo: any;
  cardHolderName: string;
  pointsAvailable: number;
  pointsToNextReward: number;
  progressPercent: number; // 0 to 100
};

export default function LoyaltyPoint({
  brandName,
  logo,
  cardHolderName,
  pointsAvailable,
  pointsToNextReward,
  progressPercent
}: LoyaltyPointProps) {
  return (
    <ImageBackground 
      source={require('./assets/MyBackgroundImage.jpg')} 
      style={styles.cardBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.leftHeader}>
              <Text style={styles.title}>{brandName}</Text>
            </View>
            <View style={styles.rightHeader}>
              <Image source={logo} style={styles.cupIcon} resizeMode="contain" />
            </View>
          </View>
        </View>

        {/* Card Holder */}
        <View style={styles.cardHolderSection}>
          <Text style={styles.cardHolderLabel}>CARD HOLDER</Text>
          <Text style={styles.cardHolderName}>{cardHolderName}</Text>
        </View>

        {/* Points Section */}
        <View style={styles.barcodeCard}>
          <View style={styles.barcodeSection}>
            <Text style={styles.barcodeLabel}>LOYALTY POINTS</Text>
            <View style={styles.barcodeContainer}>
              <Image source={require('./assets/barcode.png')} style={styles.barcode} resizeMode="contain" />
            </View>
            <View style={styles.pointsSection}>
              <View style={styles.pointsLeft}>
                <Text style={styles.pointsNumber}>{pointsAvailable.toLocaleString()}</Text>
                <Text style={styles.pointsLabel}>Points Available</Text>
              </View>
              <View style={styles.pointsRight}>
                <Text style={styles.pointsNumber}>{pointsToNextReward.toLocaleString()} more for</Text>
                <Text style={styles.pointsLabel}>Next Reward!</Text>
              </View>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    borderRadius: 12,
    marginVertical: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  overlay: {
    backgroundColor: 'rgba(0, 63, 40, 0.85)',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftHeader: {
    flex: 1,
  },
  rightHeader: {
    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cupIcon: {
    width: 50,
    height: 50,
    opacity: 0.75,
  },
  cardHolderSection: {
    marginBottom: 20,
  },
  cardHolderLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    opacity: 0.8,
    marginBottom: 4,
  },
  cardHolderName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  barcodeCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  barcodeSection: {},
  barcodeLabel: {
    color: '#003F28',
    fontSize: 16,
    fontWeight: 'bold',
  },
  barcodeContainer: {
    alignItems: 'center',
  },
  barcode: {
    width: 250,
    height: 170,
  },
  pointsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  pointsLeft: {
    alignItems: 'flex-start',
  },
  pointsRight: {
    alignItems: 'flex-end',
  },
  pointsNumber: {
    color: '#003F28',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pointsLabel: {
    color: '#003F28',
    fontSize: 12,
    opacity: 0.8,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(0, 63, 40, 0.2)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#003F28',
    borderRadius: 3,
  },
});
