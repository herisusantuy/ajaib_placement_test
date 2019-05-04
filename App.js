import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Advisor from "./src/components/Advisor";
import Chat from "./src/components/Chat";
import Invest from "./src/components/Invest";
import Portfolio from "./src/components/Portfolio";
import Settings from "./src/components/Settings";
import TransferDetail from "./src/components/TransferDetail";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;

const InvestStack = createStackNavigator({
  Invest: {
    screen: Invest,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Invest",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0E70CD"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  },
  Deposit: {
    screen: TransferDetail,
    navigationOptions: ({ navigation }) => {
      return {
        // header: null,
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0E70CD"
        },
        headerTitle: "Transfer Details",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center",
          left: -10
        }
      };
    }
  }
});
const PortfolioStack = createStackNavigator({
  Portfolio: {
    screen: Portfolio,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Portfolio",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0E70CD"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  }
});
const AdvisorStack = createStackNavigator({
  Advisor: {
    screen: Advisor,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Advisor",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0E70CD"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  }
});
const ChatStack = createStackNavigator({
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Chat",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0E70CD"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  }
});
const SettingStack = createStackNavigator({
  Setting: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Settings",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#0E70CD"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "center",
          textAlign: "center",
          justifyContent: "center",
          flex: 1,
          textAlignVertical: "center"
        }
      };
    }
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Portfolio: {
      screen: PortfolioStack,
      navigationOptions: {
        tabBarLabel: "Portfolio",
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <Feather name="bar-chart" size={30} color={tintColor} />
        )
      }
    },
    Invest: {
      screen: InvestStack,
      navigationOptions: {
        tabBarLabel: "Invest",
        // header: null,
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <Icon name="md-swap" size={30} color={tintColor} />
        )
      }
    },
    Advisor: {
      screen: AdvisorStack,
      navigationOptions: {
        tabBarLabel: "Advisor",
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <MaterialCommunityIcons name="account" size={30} color={tintColor} />
        )
      }
    },
    Chat: {
      screen: ChatStack,
      navigationOptions: {
        tabBarLabel: "Chat",
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <Entypo name="chat" size={25} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <Icon name="ios-settings" size={25} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "white",
        elevation: 30
      }
    }
  }
);
const StackNavigator = createStackNavigator(
  {
    TabNavigator: TabNavigator
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
