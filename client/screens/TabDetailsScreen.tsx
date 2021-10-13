import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { remToPixels } from "../utils/styles/cssSizes";
import { ParticipantsSection } from "../components/Participants/ParticipantsSection";
import { STATUS_OPTIONS } from "../models/Status";
import { useState } from "react";
import { Participant } from "../models/Participant";
import { ThemeColors } from "../utils/styles/theme";
import { Event } from "../models/Event";
import { EventDetails } from "../components/Event/EventDetails";

export default function TabDetailsScreen({ navigation }: RootTabScreenProps<"TabDetails">) {
  const [event, setEvent] = useState<Event>({
    name: "First Big Event",
    location: "Shaar HaGuy",
    date: new Date(),
    type: "Football",
    participants: [
      { name: "Lior Vainer", status: STATUS_OPTIONS.ARRIVING },
      { name: "Daniel Vainer", status: STATUS_OPTIONS.MAYBE },
      { name: "Itay Lisaey", status: STATUS_OPTIONS.NOT_DECIDED },
      { name: "Nitzan Hen", status: STATUS_OPTIONS.NOT_DECIDED },
    ],
  });

  return (
    <View style={styles.container}>
      <EventDetails event={event}></EventDetails>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.accent({ lightness: 90 }),
  },
  peopleSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  peopleCard: {
    margin: "1",
  },
});
