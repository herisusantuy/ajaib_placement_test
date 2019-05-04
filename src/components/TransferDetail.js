import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Button } from "react-native";
import formatCurrency from "../helper/formatCurrency";

export default class TransferDetail extends Component {
  render() {
    let data = {
      bankName: "BCA",
      name: "HPAM Ultima Ekuitas 1",
      account_number: "458 259 8227",
      total: 20000000
    };
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Please transfer to custodian bank </Text>
        <Text style={styles.textLabel}>Bank name</Text>
        <Text style={styles.textValue}>{data.bankName}</Text>
        <Text style={styles.textLabel}>Account Holder Name</Text>
        <Text style={styles.textValue}>{data.name}</Text>
        <Text style={styles.textLabel}>Account Number</Text>
        <Text style={styles.textValue}>{data.account_number}</Text>
        <Text style={styles.textLabel}>Investing amount</Text>
        <Text style={[styles.textValue, { marginBottom: 50 }]}>
          {formatCurrency(data.total)}
        </Text>
        <Button title="SEND PAYMENT VERIFICATION" color="#0E70CD" />
      </View>
    );
  }
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingVertical: 20,
    paddingHorizontal: 25
  },
  header: {
    color: "black",
    fontSize: 18,
    marginBottom: 20
  },
  textLabel: {
    fontSize: 14,
    marginBottom: 5
  },
  textValue: {
    color: "#0E70CD",
    marginBottom: 20,
    fontSize: 16
  },
  button: {
    marginTop: 200,
    backgroundColor: "#0E70CD"
  }
});
