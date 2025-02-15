import React, { createContext, useState, useContext } from "react";

type VideoCallContextType = {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  isCameraOn: boolean;
  setIsCameraOn: (cameraOn: boolean) => void;
  isInCall: boolean;
  setIsInCall: (inCall: boolean) => void;
};

const VideoCallContext = createContext<VideoCallContextType>({
  isMuted: false,
  setIsMuted: () => {},
  isCameraOn: true,
  setIsCameraOn: () => {},
  isInCall: false,
  setIsInCall: () => {},
});

export const VideoCallProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isInCall, setIsInCall] = useState(false);

  return (
    <VideoCallContext.Provider
      value={{
        isMuted,
        setIsMuted,
        isCameraOn,
        setIsCameraOn,
        isInCall,
        setIsInCall,
      }}
    >
      {children}
    </VideoCallContext.Provider>
  );
};

export const useVideoCall = () => useContext(VideoCallContext);
