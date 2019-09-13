import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";
import { Card } from "react-native-paper";

class Promo extends Component {
  scrollX = new Animated.Value(0);

  render() {
    let position = Animated.divide(this.scrollX, 300);
    const { promoImage } = this.props;
    return (
      <View style={styles.parentContainer}>
        <Text style={styles.promoText}>Promo</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
          horizontal={true}
          pagingEnabled={true}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX } } }
          ])}
          scrollEventThrottle={16}
        >
          {promoImage.map((val, id) => (
            <TouchableOpacity key={id}>
              <Card style={styles.container}>
                <Card.Cover
                  style={styles.image}
                  source={{
                    uri: val
                  }}
                />
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{ flexDirection: "row" }}>
          {promoImage.map((val, id) => {
            let opacity = position.interpolate({
              inputRange: [id - 1, id, id + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={id}
                style={{
                  opacity,
                  height: 5,
                  width: 5,
                  backgroundColor: "#595959",
                  marginLeft: 10,
                  marginTop: 10,
                  borderRadius: 5
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    marginHorizontal: 20,
    marginTop: 10
  },
  container: {
    flexDirection: "row",
    height: 130,
    marginHorizontal: 10
  },
  scrollContainer: {},
  image: {
    resizeMode: "center",
    borderRadius: 5,
    height: 130,
    width: 300
  },
  promoText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
    marginBottom: 15
  }
});

export default Promo;
