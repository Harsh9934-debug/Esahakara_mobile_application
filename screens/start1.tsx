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
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const Start1 = ({ navigation }: { navigation?: any }) => {
  const [searchFocused, setSearchFocused] = useState(false);

  // Data for the 'Your Services' section
  const serviceItems = [
    { name: 'Transfer', icon: 'send' },
    { name: 'Payments', icon: 'credit-card' },
    { name: 'Investments', icon: 'trending-up' },
    { name: 'Loans', icon: 'dollar-sign' },
    { name: 'Insurance', icon: 'shield' },
    { name: 'More', icon: 'grid' },
  ];

  // Dummy data for transactions
  const transactions = [
    { name: 'Netflix Subscription', amount: '-₹799', time: '2:30 PM', icon: 'tv' },
    { name: 'Salary Credit', amount: '+₹45,000', time: '9:00 AM', icon: 'trending-up' },
    { name: 'Grocery Shopping', amount: '-₹2,450', time: 'Yesterday', icon: 'shopping-bag' },
  ];

  return (
    <View style={styles.fullScreenContainer}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <LinearGradient
            colors={['#667eea', '#764ba2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerGradient}
          >
            <View style={styles.header}>
              <View>
                <Text style={styles.greeting}></Text>
                <Text style={styles.userName}>Harsh Kumar</Text>
              </View>
              <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.iconButton}>
                  <Icon name="search" size={22} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Icon name="bell" size={22} color="#FFF" />
                  <View style={styles.notificationDot} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Main Account Card */}
            <View style={styles.accountCard}>
              <View style={styles.accountHeader}>
                <View>
                  <Text style={styles.accountTitle}>Total Balance</Text>
                  <Text style={styles.accountBalance}>₹1,24,500.00</Text>
                </View>
                <TouchableOpacity style={styles.eyeButton}>
                  <Icon name="eye" size={20} color="#FFF" />
                </TouchableOpacity>
              </View>
              
              <View style={styles.accountDetails}>
                <View style={styles.accountInfo}>
                  <Text style={styles.accountLabel}>Account No.</Text>
                  <Text style={styles.accountNumber}>SB01100000003016</Text>
                </View>
                <View style={styles.quickActionsRow}>
                  <TouchableOpacity style={styles.quickActionBtn}>
                    <Icon name="arrow-up" size={16} color="#667eea" />
                    <Text style={styles.quickActionText}>Send</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.quickActionBtn}>
                    <Icon name="arrow-down" size={16} color="#667eea" />
                    <Text style={styles.quickActionText}>Request</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.quickActionBtn}>
                    <Icon name="credit-card" size={16} color="#667eea" />
                    <Text style={styles.quickActionText}>Pay Bills</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>

          {/* Your Actions Section */}
          <View style={styles.actionsContainer}>
            <View style={styles.actionsHeader}>
              <Text style={styles.actionsTitle}>Quick Actions</Text>
              <TouchableOpacity>
                <Text style={styles.viewAllText}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.gridContainer}>
              {serviceItems.map((item, index) => (
                <TouchableOpacity key={index} style={styles.actionButton}>
                  <Icon name={item.icon} size={32} color="#667eea" />
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
                  <View style={styles.transactionIconContainer}>
                    <Icon name={transaction.icon} size={20} color="#666" />
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
            <Icon name="credit-card" size={22} color="#888" />
            <Text style={styles.navText}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItemActive}>
            <Icon name="home" size={22} color="#667eea" />
            <Text style={styles.navTextActive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Icon name="more-horizontal" size={22} color="#888" />
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
    paddingTop: 10,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
  },
  accountCard: {
    marginHorizontal: 20,
    padding: 25,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  accountHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  eyeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountDetails: {
    marginTop: 10,
  },
  accountInfo: {
    marginBottom: 20,
  },
  accountLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 4,
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 4,
    justifyContent: 'center',
  },
  quickActionText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '600',
    color: '#667eea',
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
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  actionText: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '600',
    color: '#2D3748',
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
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
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
    color: '#667eea',
    marginTop: 5,
    fontWeight: '600',
  },
});

export default Start1;
