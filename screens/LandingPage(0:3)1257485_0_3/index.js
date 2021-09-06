import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_0_4}>
        <View style={styles.View_0_5}>
          <Text style={styles.Text_0_5}>
            Search &amp; Watch Streaming Contents
          </Text>
        </View>
        <View style={styles.View_0_6}>
          <Text style={styles.Text_0_6}>Search &amp; Book Cinema Tickets</Text>
        </View>
      </View>
      <View style={styles.View_0_7}>
        <Text style={styles.Text_0_7}>The Ultimate Entertainment Guide</Text>
      </View>
      <View style={styles.View_0_8}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00da/bc23/a862fa3b3e0e3a5620ddceeadffe4067"
          }}
          style={styles.ImageBackground_0_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4aaa/1e38/89cb12eff8bdd3679b1881f52c12cdb7"
          }}
          style={styles.ImageBackground_0_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1289/ab45/befe12918b4e6948550e343115484e25"
          }}
          style={styles.ImageBackground_0_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9d2/6d36/3204e7b959bc6818042989a29bc36ed9"
          }}
          style={styles.ImageBackground_0_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/115d/a200/4a6ae05f96da2d2fa123f2b28768b7a7"
          }}
          style={styles.ImageBackground_0_19}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4bd/302c/9611dd31fa647ffde856dc6b522eae4e"
          }}
          style={styles.ImageBackground_0_20}
        />
      </View>
      <View style={styles.View_0_21}>
        <Text style={styles.Text_0_21}>nJOY.show</Text>
      </View>
      <View style={styles.View_0_22}>
        <View style={styles.View_0_23}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e4c/9ef7/e8693ec0c063121cc165ecb25a396655"
            }}
            style={styles.ImageBackground_0_24}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a40c/2d75/e4cac62f726c93ef1c35bc4a17d87cb8"
          }}
          style={styles.ImageBackground_0_26}
        />
        <View style={styles.View_0_28}>
          <Text style={styles.Text_0_28}>
            Search and watch your favourite content{" "}
          </Text>
        </View>
        <View style={styles.View_0_29} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de7d/fdea/4c01504365085c5db8b22be33881b32d"
        }}
        style={styles.ImageBackground_0_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6802/b00e/9a61e4e5117f1d4be1189821211b71f2"
        }}
        style={styles.ImageBackground_0_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f6a/bbef/4b2b8e1d6f556d46e29bed65352e179b"
        }}
        style={styles.ImageBackground_0_32}
      />
      <View style={styles.View_0_33}>
        <View style={styles.View_0_35}>
          <Text style={styles.Text_0_35}>Streaming · Cinema</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_0_4: {
    width: wp("55.31400966183575%"),
    minWidth: wp("55.31400966183575%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869565%"),
    top: hp("38.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_0_5: {
    width: wp("55.31400966183575%"),
    minWidth: wp("55.31400966183575%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_5: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_6: {
    width: wp("46.85990338164252%"),
    minWidth: wp("46.85990338164252%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322446%"),
    justifyContent: "flex-start"
  },
  Text_0_6: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_7: {
    width: wp("79.95169082125604%"),
    minWidth: wp("79.95169082125604%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.043478260869565%"),
    top: hp("18.579234972677597%"),
    justifyContent: "flex-start"
  },
  Text_0_7: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_0_8: {
    width: wp("94.92753623188406%"),
    minWidth: wp("94.92753623188406%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.657004830917874%"),
    top: hp("86.20218579234972%")
  },
  ImageBackground_0_13: {
    width: wp("13.655394402103147%"),
    minWidth: wp("13.655394402103147%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.88405797101449%"),
    top: hp("0%")
  },
  ImageBackground_0_16: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.1256038647343%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_17: {
    width: wp("12.172329483400796%"),
    minWidth: wp("12.172329483400796%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.550724637681164%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_0_18: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.97584541062803%"),
    top: hp("0%"),
    borderTopLeftRadius: 121,
    borderTopRightRadius: 121,
    borderBottomLeftRadius: 121,
    borderBottomRightRadius: 121
  },
  ImageBackground_0_19: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.14975845410628%"),
    top: hp("0%"),
    borderTopLeftRadius: 116.5,
    borderTopRightRadius: 116.5,
    borderBottomLeftRadius: 116.5,
    borderBottomRightRadius: 116.5
  },
  ImageBackground_0_20: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 86,
    borderTopRightRadius: 86,
    borderBottomLeftRadius: 86,
    borderBottomRightRadius: 86
  },
  View_0_21: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.82125603864734%"),
    top: hp("117.62295081967213%"),
    justifyContent: "flex-start"
  },
  Text_0_21: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_22: {
    width: wp("86.47342995169082%"),
    minWidth: wp("86.47342995169082%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.763285024154589%"),
    top: hp("58.333333333333336%")
  },
  View_0_23: {
    width: wp("6.485507338519257%"),
    minWidth: wp("6.485507338519257%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.053442028985506%"),
    top: hp("1.229508196721305%")
  },
  ImageBackground_0_24: {
    width: wp("6.485507338519257%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_26: {
    width: wp("6.485507338519257%"),
    height: hp("3.278688524590164%"),
    top: hp("1.229508196721305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.20470719636927%")
  },
  View_0_28: {
    width: wp("57.28864808013474%"),
    minWidth: wp("57.28864808013474%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.890098092636626%"),
    top: hp("1.9125683060109182%"),
    justifyContent: "flex-start"
  },
  Text_0_28: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_29: {
    width: wp("86.47342995169082%"),
    minWidth: wp("86.47342995169082%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0,
    borderColor: "rgba(96, 96, 96, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  ImageBackground_0_30: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019323%"),
    top: hp("96.31147540983606%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_0_31: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.7536231884058%"),
    top: hp("96.31147540983606%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_0_32: {
    width: wp("12.388966509685424%"),
    minWidth: wp("12.388966509685424%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.90338164251207%"),
    top: hp("96.31147540983606%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_0_33: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.40096618357488%"),
    top: hp("67.4863387978142%")
  },
  View_0_35: {
    width: wp("38.164251207729464%"),
    minWidth: wp("38.164251207729464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_35: {
    color: "rgba(96, 96, 96, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
