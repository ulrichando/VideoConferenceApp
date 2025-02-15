import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../constants/Colors";
import { useColorScheme } from "react-native"; // Ensure correct import

type VideoControlsProps = {
  onMute: () => void;
  onCameraToggle: () => void;
  onEndCall: () => void;
  isMuted: boolean;
  isCameraOn: boolean;
};

export default function VideoControls({
  onMute,
  onCameraToggle,
  onEndCall,
  isMuted,
  isCameraOn,
}: VideoControlsProps) {
  const colorScheme = useColorScheme() || "light"; // Ensure fallback to "light"
  const iconColor = Colors[colorScheme]?.text ?? "#FFFFFF"; // Default white text if undefined

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onMute}
        accessibilityLabel="Mute or unmute microphone"
      >
        <Icon name={isMuted ? "mic-off" : "mic"} size={24} color={iconColor} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={onCameraToggle}
        accessibilityLabel="Toggle camera on or off"
      >
        <Icon
          name={isCameraOn ? "videocam" : "videocam-off"}
          size={24}
          color={iconColor}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.endCallButton]}
        onPress={onEndCall}
        accessibilityLabel="End call"
      >
        <Icon name="call-end" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  endCallButton: {
    backgroundColor: "red",
  },
});
