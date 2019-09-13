import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

class KotaPopuler extends Component {
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
        <Text style={styles.kotaText}>Kota Populer</Text>
        <View style={styles.kotaContainer}>
          <FlatList
            horizontal={true}
            data={this.state.kotaPopuler}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.kotaItem}
                onPress={() =>
                  this.props.navigation.navigate("HomeList", {
                    namaKota: item.nama
                  })
                }
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.namaKota}>{item.nama}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  kotaText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000"
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  kotaItem: {
    marginTop: 20,
    marginRight: 10
  },
  namaKota: {
    color: "#2c3e50",
    textAlign: "center",
    position: "absolute",
    top: 125,
    left: 10,
    color: "#fff"
  },
  kotaContainer: {
    flexDirection: "row"
  }
});

export default KotaPopuler;
