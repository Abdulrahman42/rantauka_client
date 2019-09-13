//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

import CardScroll from "../Card/CardScroll";

// create a component
class KosMenarik extends Component {
  constructor() {
    super();
    this.state = {
      kotaPopuler: [
        {
          id: "1",
          image:
            "https://idetrips.com/wp-content/uploads/2018/07/Monas-jakarta-tourism-go-id-640x427.jpg",
          nama: "Jakarta"
        },
        {
          id: "2",
          image:
            "https://www.dejogjaadventure.com/wp-content/uploads/2017/12/Wisata-Tugu-Jogja-12.jpg",
          nama: "Yogyakarta"
        },
        {
          id: "3",
          image:
            "http://www.jurnalbandung.com/wp-content/uploads/2014/11/gedung-sate.jpg",
          nama: "Bandung"
        },
        {
          id: "4",
          image:
            "https://cdn-u1-gnfi.imgix.net/post/large-surabaya-e5b46818b09a03a19c39137e32d22c1f.jpg",
          nama: "Surabaya"
        },
        {
          id: "5",
          image:
            "http://blog.airyrooms.com/wp-content/uploads/2018/02/Panduan-Tips-Pergi-Liburan-Ke-Semarang-via-@novemlawalata.jpg",
          nama: "Semarang"
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Kos Menarik Lainnya</Text>
        <CardScroll item={this.state.kotaPopuler} style={{ width: 200 }} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  title: {
    color: "#2c3e50",
    fontSize: 15,
    fontWeight: "500"
  }
});

//make this component available to the app
export default KosMenarik;
