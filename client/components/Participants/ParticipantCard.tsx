import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";

import { Text, View } from "../Themed";
import { RootTabScreenProps } from "../../types";
import { remToPixels } from "../../utils/styles/cssSizes";
import { ThemeColors } from "../../utils/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Participant } from "../../models/Participant";

interface ParticipantCardProps {
  participant: Participant;
}

export const ParticipantCard: React.FC<ParticipantCardProps> = ({ participant }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: "2rem", borderRadius: 10 }}>
        <Text style={styles.name}>{participant.name}</Text>
        <View style={styles.statusSection}>
          <Text style={styles.statusName}>{participant.status}</Text>
        </View>
      </View>
      <View
        style={[styles.statusIndicator, { backgroundColor: ThemeColors[participant.status]() }]}
      ></View>
    </View>
  );
};

const device_width = Dimensions.get("window").width;
const isBigScreen = device_width > 720;

const SMALL_SCREEN_CARD_AMOUNT = 2;
const BIG_SCREEN_CARD_AMOUNT = 5;
const cardWidth = isBigScreen
  ? device_width / BIG_SCREEN_CARD_AMOUNT
  : device_width / SMALL_SCREEN_CARD_AMOUNT;

const cardHeight = 100;

const styles = StyleSheet.create({
  container: {
    margin: "1rem",
    paddingRight: "1rem",
    alignItems: "baseline",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: ThemeColors.grayScale(100),
    height: cardHeight,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  details: {
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: remToPixels(1.5),
    fontWeight: "700",
  },
  statusSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  statusName: {
    fontSize: remToPixels(1.2),
    fontWeight: "300",
  },
  statusIndicator: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 15,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
