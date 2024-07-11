import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
// import TransactionList from '../components/TransactionList';

interface Transaction {
  id: string;
  amount: number;
  description: string;
}

const transactionsData: Transaction[] = [
  { id: '1', amount: 100, description: 'Compra de libros' },
  { id: '2', amount: 50, description: 'Cena en restaurante' },
  { id: '3', amount: 600, description: 'Compra de electrodoméstico' },
];

const TransactionHistoryScreen: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(transactionsData);

  const handleSelectTransaction = (transaction: Transaction) => {
    Alert.alert('Comentario', `Comentario de la transacción: ${transaction.description}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Historial de transacciones:</Text>
      {/* <TransactionList transactions={transactions} onSelectTransaction={handleSelectTransaction} /> */}
    </View>
  );
};

export default TransactionHistoryScreen;
