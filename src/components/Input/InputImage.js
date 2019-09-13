//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ImagePicker from "react-native-image-crop-picker";

import ImageSlider from "../../components/Iklan/ImageSlider";
import { primaryColor } from "../../api/constans";

// create a component
class InputImage extends Component {
  chooseFile = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
      let img = [];
      this.props.addImage(images);
      images.map((image, id) => {
        img.push(image.path);
      });
      this.props.onChange(img);
    });
  };

  render() {
    const { h2, icon } = this.props;
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.h2}>{h2}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ImageSlider image={this.props.image} />
          <TouchableOpacity onPress={this.chooseFile}>
            <Icon
              name={icon}
              size={80}
              style={{ color: primaryColor, marginBottom: 10 }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  inputContainer: { paddingTop: 10 },
  h2: {
    color: "#2c3e50",
    fontWeight: "500",
    fontSize: 15
  }
});

//make this component available to the app
export default InputImage;
