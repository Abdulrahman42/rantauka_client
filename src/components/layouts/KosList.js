import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";
import { connect } from "react-redux";

import KosItem from "../../components/Kos/KosItem";
import SearchInput from "../../components/Search/SearchInput";
import { primaryColor } from "../../api/constans";
import { getHouses } from "../../_actions/houses";

const ModalComponent = props => (
  <Modal
    style={{
      justifyContent: "flex-end",
      margin: 0
    }}
    isVisible={props.modalVisible}
    onBackdropPress={() => props.setModalVisible(false)}
  >
    <View
      style={{
        backgroundColor: "#fff",
        justifyContent: "flex-end"
      }}
    >
      <View
        style={{
          backgroundColor: primaryColor,
          flexDirection: "row",
          paddingVertical: 10,
          paddingHorizontal: 15
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: "#fff",
            flex: 1,
            fontWeight: "500"
          }}
        >
          Urutkan
        </Text>
        <Icon
          style={{ color: "#fff" }}
          name="close"
          size={25}
          onPress={() => props.setModalVisible(false)}
        />
      </View>
      <View style={{ paddingHorizontal: 15, paddingBottom: 5 }}>
        <Text
          style={{
            paddingVertical: 5,
            fontSize: 16,
            fontWeight: "500",
            color: "#2980b9"
          }}
        >
          Harga termurah
        </Text>
        <Text style={{ paddingVertical: 5, fontSize: 16 }}>Harga termahal</Text>
        <Text style={{ paddingVertical: 5, fontSize: 16 }}>
          Kosong ke penuh
        </Text>
        <Text style={{ paddingVertical: 5, fontSize: 16 }}>Update terbaru</Text>
      </View>
    </View>
  </Modal>
);

class KosList extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    };
  }

  async componentDidMount() {
    try {
      this.props.dispatch(getHouses());
    } catch (err) {
      console.log(err);
    }
  }

  findIndex = params => {
    let count = 0;
    params.map(param => {
      count = +count + 1;
    });
    return count;
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  showActionSheet = () => {
    this.ActionSheet.show();
  };

  handleGoBack = () => {
    this.props.navigation.navigate("Index");
  };

  render() {
    const { height } = Dimensions.get("window");
    const autoFocus = this.props.navigation.getParam("autoFocus", false);
    if (this.props.houses.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={primaryColor} size={50} />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <SearchInput
            handleGoBack={this.handleGoBack}
            icon="ios-arrow-round-back"
            size={35}
            margin={17}
            autoFocus={autoFocus}
          />
          {this.props.houses.data.length > 0 ? (
            <FlatList
              style={{ height: height - 100 }}
              data={this.props.houses.data}
              extraData={this.props}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("HomeDetail", {
                      kostList: item.id
                    })
                  }
                >
                  <KosItem
                    data={item}
                    id={index + 1}
                    max={this.findIndex(this.props.houses.data)}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <View
              style={{
                height: height - 100
              }}
            >
              <View style={styles.houseEmpty}>
                <Icon
                  name="home-alert"
                  size={100}
                  style={{ color: primaryColor }}
                />
                <Text style={styles.info}>Kos masih kosong</Text>
              </View>
            </View>
          )}
          <View style={styles.filterUrutkan}>
            <Icon
              style={[styles.iconFilter, { color: primaryColor }]}
              name="filter-variant"
              size={15}
            />
            <Text
              style={styles.buttonTextFilter}
              onPress={() => this.props.navigation.navigate("Filter")}
            >
              Filter
            </Text>
            <ModalComponent
              setModalVisible={this.setModalVisible}
              modalVisible={this.state.modalVisible}
            />

            <Icon
              style={[styles.iconUrutkan, { color: primaryColor }]}
              name="sort-variant"
              size={15}
            />
            <Text
              style={styles.buttonTextUrutkan}
              onPress={() => this.setModalVisible(true)}
            >
              Urutkan
            </Text>
          </View>
        </View>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    houses: state.houses
  };
};

export default connect(mapStateToProps)(KosList);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1"
  },
  inputContainer: {
    margin: 15,
    borderRadius: 5,
    padding: 0,
    flex: 1
  },
  icon: {
    color: "#2c3e50",
    marginLeft: 15
  },
  header: {
    margin: 17,
    marginBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d9dcde",
    height: 50,
    borderRadius: 5
  },
  filterUrutkan: {
    position: "absolute",
    bottom: 15,
    alignSelf: "center",
    backgroundColor: "#ecf0f1",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#bdc3c7",
    flexDirection: "row",
    borderRadius: 3,
    alignItems: "center"
  },
  buttonTextFilter: {
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: "#bdc3c7"
  },
  buttonTextUrutkan: {
    marginLeft: 3
  },
  iconFilter: {
    marginRight: 3
  },
  iconUrutkan: { marginLeft: 3 },
  houseEmpty: {
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
