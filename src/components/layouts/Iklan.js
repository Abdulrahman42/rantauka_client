import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-community/async-storage";

import Maps from "../../components/Maps/Maps";
import InputText from "../../components/Input/InputText";
import InputImage from "../../components/Input/InputImage";
import InputWithoutHeader from "../../components/Input/InputWithoutHeader";
import SubmitBottom from "../../components/Button/SubmitBottom";
import IklanProvinsi from "../../components/Iklan/IklanProvinsi";
import IklanJenisKost from "../../components/Iklan/IklanJenisKost";
import IklanDeskripsi from "../../components/Iklan/IklanDeskripsi";
import { postKost } from "../../api/explore";
import IklanFasilitas from "../../components/Iklan/IklanFasilitas";
import { primaryColor } from "../../api/constans";

const { width } = Dimensions.get("screen");
class Iklan extends Component {
  constructor() {
    super();
    this.state = {
      isMapReady: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324
      },
      filePath: [],
      kost: {
        namaKost: "",
        alamatKost: {
          provinsi: "",
          kabupaten: "",
          kecamatan: ""
        },
        fotoKost: [],
        latitudeKost: undefined,
        longitudeKost: undefined,
        jenisKost: "Putra",
        luasKamar: {
          panjang: null,
          lebar: null
        },
        fasilitasKost: [],
        deskripsiKost: "",
        hargaKost: undefined,
        booking: false
      },
      isLoading: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity>
          <Icon
            style={{ marginRight: 20, color: "#fff" }}
            name="share-variant"
            size={22}
          />
        </TouchableOpacity>
      ),
      title: "Pasang Iklan"
    };
  };

  changeKost = async (name, value) => {
    await this.setState(prevState => ({
      kost: {
        ...prevState.kost,
        [name]: value
      }
    }));
    console.log(this.state.kost);
  };

  changeLuasKamar = async (name, value) => {
    await this.setState(prevState => ({
      kost: {
        ...prevState.kost,
        luasKamar: {
          ...prevState.kost.luasKamar,
          [name]: value
        }
      }
    }));
  };

  changeRegion = nativeEvent => {
    this.setState(prevState => ({
      region: { ...prevState.region, ...nativeEvent.coordinate },
      newRegion: this.state.region
    }));
  };

  changeRegionScroll = region => {
    this.setState(prevState => ({
      region: {
        ...prevState.region,
        latitude: region.latitude,
        longitude: region.longitude
      },
      newRegion: this.state.region
    }));
  };

  changeLatitude = text => {
    let newLat = this.state.kost.latitudeKost;
    newLat = parseFloat(text);

    this.setState(prevState => ({
      kost: { ...prevState.kost, latitudeKost: newLat }
    }));
  };

  changeLongitude = text => {
    let newLat = this.state.longitudeKost;
    newLat = parseFloat(text);
    this.setState({
      kost: { ...prevState.kost, longitudeKost: newLat }
    });
  };

  handleSubmitMaps = () => {
    this.setState(prevState => ({
      region: {
        ...prevState.region,
        latitude: this.state.latitudeKost,
        longitude: this.state.longitudeKost
      }
    }));
  };

  handleIconLeft = () => {
    this.props.navigation.goBack();
  };

  addImage = image => {
    this.setState({ filePath: image });
  };

  onSubmit = async () => {
    this.setState({
      isLoading: true
    });
    try {
      const { goBack } = this.props.navigation;
      const token = await AsyncStorage.getItem("@token");
      await this.setState({
        kost: {
          ...this.state.kost,
          latitudeKost: this.state.region.latitude.toString(),
          longitudeKost: this.state.region.longitude.toString()
        }
      });
      const response = await postKost(this.state.kost, token);
      if (response) {
        goBack();
      }
    } catch (err) {
      this.setState({ isLoading: false });
      alert(err);
    }
  };

  render() {
    let { longitude, latitude } = this.state.region;
    longitude = longitude.toString().split(".");
    longitude[1] = longitude[1].slice(0, 6);
    longitude = longitude.join(".");
    latitude = latitude.toString().split(".");
    latitude[1] = latitude[1].slice(0, 6);
    latitude = latitude.join(".");

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
          scrollEnabled
        >
          <InputText
            h2="Nama Kos"
            placeholder="Masukkan nama kos disini"
            keyboard="search"
            onChange={text => this.changeKost("namaKost", text)}
          />
          <IklanProvinsi
            onChange={alamat => this.changeKost("alamatKost", alamat)}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.h2} />
            <View style={styles.searchContainer}>
              <Icon
                name="map-search-outline"
                size={20}
                style={{ paddingLeft: 10 }}
              />
              <TextInput
                style={styles.inputSearch}
                placeholder="Masukkan alamat kos"
              />
            </View>
            <View style={styles.map}>
              <Maps
                changeRegion={this.changeRegion}
                region={this.state.region}
                height={200}
                draggable={true}
                changeRegionScroll={this.changeRegionScroll}
              />
            </View>
            <View style={styles.inputLatLong}>
              <InputWithoutHeader
                placeholder="Masukkan latitude"
                value={latitude}
                onChange={this.changeLatitude}
                onSubmit={this.handleSubmitMaps}
                style={{ flex: 1, marginRight: 10 }}
              />
              <InputWithoutHeader
                style={{ flex: 1, marginLeft: 10 }}
                placeholder="Masukkan longitude"
                value={longitude}
                onChange={this.changeLongitude}
                onSubmit={this.handleSubmitMaps}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.h2}>Masukkan Luas Kamar</Text>
            <View style={styles.inputLatLong}>
              <InputWithoutHeader
                placeholder="Panjang kost (meter)"
                value={this.state.kost.luasKamar.panjang}
                onChange={text => this.changeLuasKamar("panjang", text)}
                style={{ flex: 1, marginRight: 10 }}
                keyboardType="number-pad"
              />
              <InputWithoutHeader
                style={{ flex: 1, marginLeft: 10 }}
                placeholder="Lebar kost (meter)"
                value={this.state.kost.luasKamar.lebar}
                onChange={text => this.changeLuasKamar("lebar", text)}
                keyboardType="number-pad"
              />
            </View>
          </View>
          <IklanJenisKost
            data={this.state.kost.jenisKost}
            onChange={this.changeKost}
          />
          <IklanDeskripsi
            data={this.state.kost.deskripsiKost}
            onChange={this.changeKost}
          />
          <InputText
            h2="Harga kost"
            value={this.state.kost.hargaKost}
            onChange={text => this.changeKost("hargaKost", text)}
            placeholder="Masukkan harga kost"
            keyboardType="number-pad"
          />
          <IklanFasilitas
            changeKost={fasilitas =>
              this.changeKost("fasilitasKost", fasilitas)
            }
          />
          <InputImage
            image={this.state.filePath}
            addImage={this.addImage}
            h2="Masukkan foto kos"
            icon="image-plus"
            onChange={foto => this.changeKost("fotoKost", foto)}
          />
        </ScrollView>
        {this.state.isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={primaryColor} size={30} />
          </View>
        ) : (
          <SubmitBottom
            title="Pasang Iklan"
            onPress={() => this.onSubmit(this.state.kost)}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginBottom: 0 },
  scrollContainer: {
    paddingHorizontal: 20,
    marginBottom: 45
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#b6daf2",
    borderRadius: 5
  },
  h1: {
    flexDirection: "row",
    backgroundColor: "#2980b9",
    paddingRight: 20,
    paddingVertical: 15,
    marginBottom: 10
  },
  h2: {
    color: "#2c3e50",
    fontWeight: "500",
    fontSize: 15
  },
  headerText: { flex: 1, color: "#fff", fontWeight: "500", fontSize: 16 },
  tanyaCs: { color: "#fff", fontWeight: "500", fontSize: 16 },
  inputLatLong: { flexDirection: "row" },
  inputContainer: { paddingTop: 10 },
  inputText: {
    borderBottomColor: "#b6daf2",
    borderBottomWidth: 2,
    paddingHorizontal: 5
  },
  inputSearch: {
    paddingHorizontal: 10,
    padding: 10,
    flex: 1
  },
  icon: {
    paddingHorizontal: 10,
    color: "#fff"
  },
  map: {
    marginTop: 15
  },
  submit: {
    flexDirection: "row",
    padding: 12,
    position: "absolute",
    bottom: 1
  },
  btnSubmit: {
    color: "#fff",
    flex: 1,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "500"
  },
  loading: {
    padding: 12,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    width: width
  }
});

export default Iklan;
