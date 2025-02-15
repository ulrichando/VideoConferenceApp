import { useState } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const useAgora = () => {
  const [roomName, setRoomName] = useState<string>('');
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const joinRoom = (room: string) => {
    setRoomName(room);
  };

  const leaveRoom = () => {
    setRoomName('');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
  };

  return {
    roomName,
    isMuted,
    isCameraOn,
    joinRoom,
    leaveRoom,
    toggleMute,
    toggleCamera,
    JitsiMeeting,
  };
};

export default useAgora;
