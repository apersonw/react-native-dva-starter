import React, { Component } from "react";
import { StyleSheet, View, Image, FlatList, Text } from "react-native";
import { connect } from "react-redux";

import { Button } from "../components";

import { NavigationActions } from "../utils";

@connect()
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "好友",
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : "gray" }]}
        source={require("../images/house.png")}
      />
    )
  };

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: "Detail" }));
  };

  render() {
    return (
      <View style={styles.container} >
        <Button text="查看详情111" onPress={this.gotoDetail} />
        <FlatList
          onRefresh={() => {
            console.log("我要开始刷新了哈");
          }}
          refreshing={false}
          data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }, { key: "e" }, { key: "f" }, { key: "g" }, { key: "h" }, { key: "i" }]}
          renderItem={({ item }) => <Text >{item.key}</Text >}
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width: 32,
    height: 32
  }
});

export default Home;
