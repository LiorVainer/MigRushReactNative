import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";

import { Text, View } from "../Themed";
import { RootTabScreenProps } from "../../types";
import { remToPixels } from "../../utils/styles/cssSizes";
import { ThemeColors } from "../../utils/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Participant } from "../../models/Participant";
import { Event } from "../../models/Event";
import { ParticipantsSection } from "../Participants/ParticipantsSection";
import dateFormat from "dateformat";

interface EventDetailsProps {
  event: Event;
}

export const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name}>{event.name}</Text>
        <Text style={styles.location}>{event.location}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.day}>{dateFormat(event.date, "DDDD, dd/mm")}</Text>
        </View>
        <Text style={styles.date}>{dateFormat(event.date, "HH:MM")}</Text>
      </View>
      <ParticipantsSection participants={event.participants} />
    </View>
  );
};

const device_width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    margin: "1rem",
    borderWidth: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: ThemeColors.grayScale(100),
    borderColor: ThemeColors.grayScale(50),
  },
  details: {
    margin: "1rem",
  },
  name: {
    fontSize: remToPixels(2),
    fontWeight: "700",
  },
  location: {
    fontSize: remToPixels(1.5),
    fontWeight: "600",
  },
  date: {
    fontSize: remToPixels(1.5),
    fontWeight: "400",
  },
  day: {
    fontSize: remToPixels(1.5),
    fontWeight: "600",
  },
});
