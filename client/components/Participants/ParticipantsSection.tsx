import * as React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Dimensions, View, Text } from "react-native";

import { remToPixels } from "../../utils/styles/cssSizes";
import { Participant } from "../../models/Participant";
import { ParticipantCard } from "./ParticipantCard";
import { ThemeColors } from "../../utils/styles/theme";
import { Divider } from "react-native-paper";

interface ParticipantSectionProps {
  participants: Participant[];
}

export const ParticipantsSection: React.FC<ParticipantSectionProps> = ({ participants }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Participants:</Text>
      </View>
      <Divider style={{ backgroundColor: ThemeColors.grayScale(70) }} />
      <ScrollView
        style={{ flex: 1 }}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {participants.map((participant) => (
          <ParticipantCard participant={participant}></ParticipantCard>
        ))}
      </ScrollView>
    </View>
  );
};

const device_width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    marginTop: "1rem",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: ThemeColors.grayScale(85),
    shadowColor: ThemeColors.grayScale(0),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  titleArea: {
    backgroundColor: ThemeColors.grayScale(85),
  },
  title: {
    marginHorizontal: "1rem",
    marginVertical: "0.5rem",
    fontSize: remToPixels(1.5),
    fontWeight: "700",
    color: ThemeColors.grayScale(0),
  },
});
