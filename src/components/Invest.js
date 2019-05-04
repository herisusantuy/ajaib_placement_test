import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import formatCurrency from "../helper/formatCurrency";

export default class Invest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDeposit: true,
      isWithdraw: true
    };
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdraw = this.handleWithdraw.bind(this);
  }
  handleDeposit = () => {
    this.props.navigation.navigate("Deposit");
    this.setState({
      isDeposit: !this.state.isDeposit
    });
  };
  handleWithdraw = () => {
    this.setState({
      isWithdraw: !this.state.isWithdraw
    });
  };

  render() {
    let data = [
      {
        id: 1,
        status: "Pending Orders",
        type: "Deposit",
        to: "HPAM Ultima Ekuitas 1",
        from: "HPAM Ultima Ekuitas 1",
        total: 100000000000,
        date: "Aug 15, 2018"
      },
      {
        id: 2,
        status: "Pending Orders",
        type: "Withdraw",
        to: "HPAM Ultima Ekuitas 1",
        from: "HPAM Ultima Ekuitas 1",
        total: 100000000000,
        date: "Aug 15, 2018"
      },
      {
        id: 3,
        status: "Completed Orders",
        type: "Sell",
        to: "HPAM Ultima Ekuitas 1",
        from: "HPAM Ultima Ekuitas 1",
        total: 10000000,
        date: "Aug 15, 2018"
      },
      {
        id: 4,
        status: "Completed Orders",
        type: "Buy",
        to: "HPAM Ultima Ekuitas 1",
        from: "HPAM Ultima Ekuitas 1",
        total: 10000000,
        date: "Aug 15, 2018"
      }
    ];

    let dataPending = data
      .filter(trans => trans.status === "Pending Orders")
      .map((datum, i) => {
        return (
          <View style={styles.list}>
            <View style={styles.detail}>
              <Text style={styles.title}>
                {datum.type} {formatCurrency(datum.total)}
              </Text>
              <Text>To {datum.to}</Text>
              <Text style={styles.date}>{datum.date}</Text>
            </View>
            <View style={styles.function}>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: "right",
                  padding: 5,
                  color: datum.type === "Deposit" ? "orange" : "#0065ff"
                }}
              >
                {datum.type === "Deposit"
                  ? "Need Transfer Receipt"
                  : "In Progress"}
              </Text>
              <AntDesign name="right" size={18} />
            </View>
          </View>
        );
      });
    let dataComplete = data
      .filter(trans => trans.status === "Completed Orders")
      .map((datum, i) => {
        return (
          <View style={styles.list}>
            <View style={styles.detail}>
              <Text style={styles.title}>
                {datum.type} {datum.to}
              </Text>
              <Text> {formatCurrency(datum.total)}</Text>
              <Text style={styles.date}>{datum.date}</Text>
            </View>
            <View style={styles.function}>
              <Text
                style={{
                  fontSize: 14,
                  textAlign: "right",
                  padding: 5,
                  color: datum.status === "Completed Orders" ? "green" : "red"
                }}
              >
                {datum.status === "Completed Orders" ? "Completed" : "Pending"}
              </Text>
              <AntDesign name="right" size={18} />
            </View>
          </View>
        );
      });

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.handleDeposit()}>
          <View style={{ marginBottom: 15, flexDirection: "row" }}>
            <AntDesign
              name={this.state.isDeposit ? "pluscircleo" : "minuscircleo"}
              size={20}
              color="#0065ff"
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingHorizontal: 10,
                top: -3
              }}
            >
              Deposit
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.handleWithdraw()}>
          <View style={{ marginBottom: 15, flexDirection: "row" }}>
            <AntDesign
              name={this.state.isWithdraw ? "pluscircleo" : "minuscircleo"}
              size={20}
              color="#0065ff"
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                paddingHorizontal: 10,
                top: -3
              }}
            >
              Withdraw
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.line}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <MaterialIcons name="cached" size={30} color="black" />
            <Text style={styles.textIcon}>Pending Orders</Text>
          </View>
          {dataPending}
        </View>
        <View style={styles.line}>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <MaterialIcons name="playlist-add-check" size={30} color="black" />
            <Text style={styles.textIcon}>Completed Orders</Text>
          </View>
          <View>{dataComplete}</View>
        </View>
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
  list: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 80
  },
  detail: {
    flex: 2
  },
  function: {
    flex: 1,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  date: {
    fontSize: 10
  },
  textIcon: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
    padding: 3
  },
  line: {
    borderTopColor: "#bfbfbf",
    borderTopWidth: 3,
    paddingTop: 15
  }
});
