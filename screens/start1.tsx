import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const Start1 = ({ }) => {
  const [searchFocused, setSearchFocused] = useState(false);

  const serviceItems = [
    { name: 'Share Account' },
    { name: 'Loan Account' },
    { name: 'RD Account' },
    { name: 'FD Account' },
    { name: 'Pigmy Account' },
    { name: 'Chit Funds' },
  ];

  const transactions = [
    { name: 'Subscription', amount: '-₹799', time: '2:30 PM', color: '#DC2626' },
    { name: 'Salary Credit', amount: '+₹45,000', time: '9:00 AM', color: '#059669' },
    { name: 'Grocery Shopping', amount: '-₹2,450', time: 'Yesterday', color: '#F97316' },
  ];

  return (
    <View style={styles.fullScreenContainer}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <LinearGradient
            colors={['#FF7E5F', '#FEB47B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.headerGradient}
          >
            <View style={styles.header}>
              <View>
                <Text style={styles.greeting}>Hello, Harsh Kumar</Text>
              </View>
              <TouchableOpacity>
              </TouchableOpacity>
            </View>

            {/* Main Account Card */}
            <View style={styles.accountCard}>
              <Text style={styles.accountTitle}>Account Number</Text>
              <Text style={styles.accountBalance}>SB01100000003016</Text>
              <View style={styles.balanceRow}>
                <Text style={styles.balanceText}>Balance</Text>
                <TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>

          {/* this is movenment section  */}
          

          {/* Your Actions Section */}
          <View style={styles.actionsContainer}>
            <View style={styles.actionsHeader}>
              <Text style={styles.actionsTitle}>CASA Accounts</Text>
              <TouchableOpacity>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
              {serviceItems.map((item, index) => (
                <TouchableOpacity key={index} style={styles.actionButton}>
                  <Text style={styles.actionText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          {/* Recent Transactions Section (Optional) */}
          <View style={styles.transactionsContainer}>
            <View style={styles.actionsHeader}>
              <Text style={styles.actionsTitle}>Recent Transactions</Text>
              <TouchableOpacity>
                <Text style={styles.viewAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.transactionsList}>
              {transactions.map((transaction, index) => (
                <TouchableOpacity key={index} style={styles.transactionItem}>
                  <View style={[styles.transactionIconContainer, { backgroundColor: transaction.color + '1A' }]}>
                    <View style={[styles.transactionIconDot, { backgroundColor: transaction.color }]} />
                  </View>
                  <View style={styles.transactionDetails}>
                    <Text style={styles.transactionName}>{transaction.name}</Text>
                    <Text style={styles.transactionTime}>{transaction.time}</Text>
                  </View>
                  <Text style={[styles.transactionAmount,
                    transaction.amount.startsWith('+') ? styles.creditAmount : styles.debitAmount]}>
                    {transaction.amount}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.bottomSpacing} />
        </ScrollView>
        
        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItemActive}>
            <Text style={styles.navTextActive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={{ fontSize: 22, color: '#888' }}>⋯</Text>
            <Text style={styles.navText}>More</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  headerGradient: {
    paddingBottom: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  accountCard: {
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  accountTitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 5,
  },
  accountBalance: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 15,
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
  },
  actionsContainer: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  actionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  actionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
  },
  viewAllText: {
    fontSize: 14,
    color: '#FF7E5F',
    fontWeight: '600',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: (width - 60) / 3,
    height: (width - 60) / 3,
    backgroundColor: '#FFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  actionText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
    color: '#555',
    textAlign: 'center',
  },
  transactionsContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  transactionsList: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionIconDot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 3,
  },
  transactionTime: {
    fontSize: 14,
    color: '#64748B',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creditAmount: {
    color: '#059669',
  },
  debitAmount: {
    color: '#DC2626',
  },
  bottomSpacing: {
    height: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 5,
  },
  navItemActive: {
    alignItems: 'center',
  },
  navActiveBackground: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 5,
    fontWeight: '500',
  },
  navTextActive: {
    fontSize: 12,
    color: '#FF7E5F',
    marginTop: 5,
    fontWeight: '600',
  },
});

export default Start1;
