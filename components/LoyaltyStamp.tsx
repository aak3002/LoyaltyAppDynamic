import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

type LoyaltyStampProps = {
  brandName: string;
  logo: any;
  cardHolderName: string;
  stampsCollected: number;
  totalStamps: number;
};

export default function LoyaltyStamp({ brandName, logo, cardHolderName, stampsCollected, totalStamps }: LoyaltyStampProps) {
  const filledStamps = Array(stampsCollected).fill(true);
  const emptyStamps = Array(totalStamps - stampsCollected).fill(false);
  const stampsArray = [...filledStamps, ...emptyStamps];
  const progressPercent = (stampsCollected / totalStamps) * 100;

  return (
    <ImageBackground 
      source={require('./assets/MyBackgroundImage.jpg')} 
      style={styles.cardBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
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

        <View style={styles.cardHolderSection}>
          <Text style={styles.cardHolderLabel}>CARD HOLDER</Text>
          <Text style={styles.cardHolderName}>{cardHolderName}</Text>
        </View>

        <View style={styles.stampsCard}>
          <Text style={styles.stampsLabel}>STAMPS COLLECTED</Text>
          <View style={styles.stampsGrid}>
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <View style={styles.stampsRow} key={rowIndex}>
                {stampsArray.slice(rowIndex * 5, (rowIndex + 1) * 5).map((filled, i) =>
                  filled ? (
                    <View style={styles.stampFilled} key={i}><Text style={styles.checkmark}>✓</Text></View>
                  ) : (
                    <View style={styles.stampEmpty} key={i}>
                      <Image source={require('./assets/coffee-cup.png')} style={styles.cupIconSmall} resizeMode="contain" />
                    </View>
                  )
                )}
              </View>
            ))}
          </View>

          <View style={styles.progressSection}>
            <View style={styles.progressLeft}>
              <Text style={styles.progressNumber}>{stampsCollected}/{totalStamps}</Text>
              <Text style={styles.progressLabel}>Stamps Collected</Text>
            </View>
            <View style={styles.progressRight}>
              <Text style={styles.progressNumber}>{totalStamps - stampsCollected} more for</Text>
              <Text style={styles.progressLabel}>FREE Coffee!</Text>
            </View>
          </View>

          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
          </View>
        </View>

        <View style={styles.qrSection}>
          <Image source={require('./assets/qrcode.png')} style={styles.qr} resizeMode="contain" />
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
  stampsCard: {
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
  stampsSection: {},
  stampsLabel: {
    color: '#003F28',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  stampsGrid: {
    marginBottom: 16,
  },
  stampsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  stampFilled: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#003F28',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stampEmpty: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: '#003F28',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cupIconSmall: {
    width: 20,
    height: 20,
  },
  progressSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressLeft: {
    alignItems: 'flex-start',
  },
  progressRight: {
    alignItems: 'flex-end',
  },
  progressNumber: {
    color: '#003F28',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressLabel: {
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
  qrSection: {
    alignItems: 'center',
  },
  qr: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});
