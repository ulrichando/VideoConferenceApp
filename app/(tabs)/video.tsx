import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import useAgora from "../../hooks/useAgora";
import VideoControls from "../../components/VideoControls/VideoControls";
import { Colors } from "../../constants/Colors";
import { useColorScheme } from "react-native";
import { JitsiMeeting } from "@jitsi/react-sdk";

export default function VideoCallScreen() {
  const colorScheme = useColorScheme();
  const {
    roomName,
    isMuted,
    isCameraOn,
    joinRoom,
    leaveRoom,
    toggleMute,
    toggleCamera,
  } = useAgora();

  useEffect(() => {
    joinRoom("test");
    return () => {
      leaveRoom();
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme ?? "light"].background },
      ]}
    >
      <View style={styles.videoContainer}>
        <View style={styles.remoteVideo}>
          {roomName && (
            <JitsiMeeting
              roomName={roomName}
              configOverwrite={{
                startWithAudioMuted: isMuted,
                startWithVideoMuted: !isCameraOn,
              }}
              onApiReady={(externalApi) => {
                externalApi.addListener(
                  "audioMuteStatusChanged",
                  ({ muted }) => {
                    if (muted !== isMuted) {
                      toggleMute();
                    }
                  }
                );
                externalApi.addListener(
                  "videoMuteStatusChanged",
                  ({ muted }) => {
                    if (muted === isCameraOn) {
                      toggleCamera();
                    }
                  }
                );
              }}
              onReadyToClose={() => {
                leaveRoom();
              }}
            />
          )}
        </View>
      </View>

      <VideoControls
        onMute={toggleMute}
        onCameraToggle={toggleCamera}
        onEndCall={leaveRoom}
        isMuted={isMuted}
        isCameraOn={isCameraOn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    flex: 1,
    width: "100%",
  },
  remoteVideo: {
    flex: 1,
    backgroundColor: "black",
  },
});
