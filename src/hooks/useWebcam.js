import { useRef } from 'react';
import Webcam from 'react-webcam';

export const useWebcam = () => {
  const webcamRef = useRef(null);
  const capture = () => webcamRef.current.getScreenshot();
  return [webcamRef, capture];
};
