import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Picker } from "react-native";

import InputCheckbox from "../../components/Input/InputCheckbox";
import SubmitBottom from "../../components/Button/SubmitBottom";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      fasilitas: [
        { id: 1, status: false, title: "AC" },
        { id: 2, status: false, title: "TV" },
        { id: 3, status: false, title: "Almari Pakaian" },
        { id: 4, status: false, title: "Kamar Md Dalam" },
        { id: 5, status: false, title: "Internet" },
        { id: 6, status: false, title: "Parkir Mobil" },
        { id: 7, status: false, title: "Tempat Tidur" },
        { id: 8, status: false, title: "Meja dan Kursi" },
        { id: 9, status: false, title: "Hewan Peliharaan" },
        { id: 10, status: false, title: "Sekamar Berdua" },
        { id: 11, status: false, title: "Kamar Kosongan" },
        { id: 12, status: false, title: "Security" },
        { id: 13, status: false, title: "Air Panas" }
      ],
      lainnya: [
        { id: 1, status: false, title: "Pasutri" },
        { id: 2, status: false, title: "Akses 24 Jam" },
        { id: 3, status: false, title: "Khusus Karyawan" }
      ],
      gender: "Putra",
      duration: 1
    };
  }

  handleFasilitas = id => {
    const fasilitasIndex = this.state.fasilitas.findIndex(val => val.id === id);
    const { fasilitas } = this.state;
    fasilitas[fasilitasIndex].status = !fasilitas[fasilitasIndex].status;

    this.setState({
      fasilitas
    });
  };

  handleLainnya = id => {
    const fasilitasIndex = this.state.lainnya.findIndex(val => val.id === id);
    const { lainnya } = this.state;
    lainnya[fasilitasIndex].status = !lainnya[fasilitasIndex].status;

    this.setState({
      lainnya
    });
  };

  changePicker = (state, value) => {
    this.setState({
      [state]: value
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <Text style={styles.h2}>Gender</Text>
          <Picker
            selectedValue={this.state.gender}
            onValueChange={itemValue => {
              this.changePicker("gender", itemValue);
            }}
          >
            <Picker.Item label={"Putra"} value={"Putra"} />
            <Picker.Item label={"Putri"} value={"Putri"} />
            <Picker.Item label={"Campur"} value={"Campur"} />
          </Picker>
          <Text style={styles.h2}>Jangka Waktu</Text>
          <Picker
            selectedValue={this.state.duration}
            onValueChange={itemValue => {
              this.changePicker("duration", itemValue);
            }}
          >
            <Picker.Item label={"1 bulan"} value={1} />
            <Picker.Item label={"2 bulan"} value={2} />
            <Picker.Item label={"3 bulan"} value={3} />
            <Picker.Item label={"4 bulan"} value={4} />
            <Picker.Item label={"5 bulan"} value={5} />
            <Picker.Item label={"6 bulan"} value={6} />
            <Picker.Item label={"7 bulan"} value={7} />
            <Picker.Item label={"8 bulan"} value={8} />
            <Picker.Item label={"9 bulan"} value={9} />
            <Picker.Item label={"10 bulan"} value={10} />
            <Picker.Item label={"11 bulan"} value={11} />
            <Picker.Item label={"12 bulan"} value={12} />
          </Picker>
          <View style={styles.inputContainer}>
            <Text style={styles.h2}>Fasilitas</Text>
            <View>
              {this.state.fasilitas.map(fasilitas => (
                <InputCheckbox
                  key={fasilitas.id}
                  status={fasilitas.status ? "checked" : "unchecked"}
                  handleFasilitas={this.handleFasilitas}
                  fasilitas={fasilitas}
                  title={fasilitas.title}
                />
              ))}
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.h2}>Lainnya</Text>
            <View>
              {this.state.lainnya.map(lainnya => (
                <InputCheckbox
                  key={lainnya.id}
                  status={lainnya.status ? "checked" : "unchecked"}
                  handleFasilitas={this.handleLainnya}
                  fasilitas={lainnya}
                  title={lainnya.title}
                />
              ))}
            </View>
          </View>
        </ScrollView>
        <SubmitBottom title="SIMPAN" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: { paddingHorizontal: 20, marginBottom: 45 },
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
  },
  fasilitasItem: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonSubmitContainer: {
    padding: 20,
    alignContent: "center",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    flex: 1,
    flexDirection: "row"
  },
  btnSubmit: { flex: 1 }
});

export default Filter;
