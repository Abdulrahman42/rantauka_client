import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";
import axios from "axios";

class IklanProvinsi extends Component {
  constructor() {
    super();
    this.state = {
      alamatFetch: {
        provinsi: [],
        kabupaten: [],
        kecamatan: []
      },
      alamatInput: {
        provinsi: "",
        kabupaten: "",
        kecamatan: ""
      }
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `http://dev.farizdotid.com/api/daerahindonesia/provinsi`
    );
    const provinsi = res.data.semuaprovinsi;
    await this.setState(prevState => ({
      alamatFetch: { ...prevState.alamatFetch, provinsi }
    }));
  }

  changeProvinsi = async itemValue => {
    this.setState(prevState => ({
      alamatInput: {
        ...prevState.alamatInput,
        provinsi: itemValue
      }
    }));

    const res = await axios.get(
      `http://dev.farizdotid.com/api/daerahindonesia/provinsi/${itemValue}/kabupaten`
    );
    const kabupaten = res.data.kabupatens;
    this.setState(prevState => ({
      alamatFetch: { ...prevState.alamatFetch, kabupaten }
    }));
  };

  changeKabupaten = async itemValue => {
    this.setState(prevState => ({
      alamatInput: {
        ...prevState.alamatInput,
        kabupaten: itemValue
      }
    }));

    const res = await axios.get(
      `http://dev.farizdotid.com/api/daerahindonesia/provinsi/kabupaten/${itemValue}/kecamatan`
    );
    const kecamatan = res.data.kecamatans;

    await this.setState(prevState => ({
      alamatFetch: { ...prevState.alamatFetch, kecamatan }
    }));
  };

  changeKecamatan = async itemValue => {
    await this.setState(prevState => ({
      alamatInput: {
        ...prevState.alamatInput,
        kecamatan: itemValue
      }
    }));
    let alamatInput = {
      provinsi: "",
      kabupaten: "",
      kecamatan: ""
    };
    if (this.state.alamatFetch.provinsi !== "") {
      alamatInput.provinsi = this.state.alamatFetch.provinsi.filter(
        provinsi =>
          provinsi.id.toString() === this.state.alamatInput.provinsi.toString()
      )[0].nama;
    }
    if (this.state.alamatFetch.kabupaten !== "") {
      alamatInput.kabupaten = this.state.alamatFetch.kabupaten.filter(
        kabupaten =>
          kabupaten.id.toString() ===
          this.state.alamatInput.kabupaten.toString()
      )[0].nama;
    }
    if (this.state.alamatFetch.kecamatan !== "") {
      alamatInput.kecamatan = this.state.alamatFetch.kecamatan
        .filter(
          kecamatan =>
            kecamatan.id.toString() ===
            this.state.alamatInput.kecamatan.toString()
        )[0]
        .nama.substring(1);
    }
    if (
      alamatInput.provinsi &&
      alamatInput.kecamatan &&
      alamatInput.kabupaten
    ) {
      this.props.onChange(alamatInput);
    }
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.h2}>Masukkan nama provinsi</Text>
        <Picker
          selectedValue={this.state.alamatInput.provinsi}
          onValueChange={itemValue => {
            this.changeProvinsi(itemValue);
          }}
        >
          {this.state.alamatFetch.provinsi.map(provinsi => (
            <Picker.Item
              key={provinsi.id}
              label={`${provinsi.nama}`}
              value={`${provinsi.id}`}
            />
          ))}
        </Picker>
        <Text style={styles.h2}>Masukkan nama kabupaten</Text>
        <Picker
          selectedValue={this.state.alamatInput.kabupaten}
          onValueChange={itemValue => {
            this.changeKabupaten(itemValue);
          }}
        >
          {this.state.alamatFetch.kabupaten
            ? this.state.alamatFetch.kabupaten.map(kabupaten => (
                <Picker.Item
                  key={kabupaten.id}
                  label={`${kabupaten.nama}`}
                  value={`${kabupaten.id}`}
                />
              ))
            : null}
        </Picker>
        <Text style={styles.h2}>Masukkan nama kecamatan</Text>
        <Picker
          selectedValue={this.state.alamatInput.kecamatan}
          onValueChange={itemValue => {
            this.changeKecamatan(itemValue);
          }}
        >
          {this.state.alamatFetch.kecamatan
            ? this.state.alamatFetch.kecamatan.map(kecamatan => (
                <Picker.Item
                  key={kecamatan.id}
                  label={`${kecamatan.nama}`}
                  value={`${kecamatan.id}`}
                />
              ))
            : null}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h2: {
    color: "#2c3e50",
    fontWeight: "500",
    fontSize: 15
  },
  inputContainer: { paddingTop: 10 },
  inputText: {
    borderBottomColor: "#b6daf2",
    borderBottomWidth: 2,
    paddingHorizontal: 5
  }
});

export default IklanProvinsi;
