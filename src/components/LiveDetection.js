// src/components/LiveDetection.js

import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import TabBar from './TabBar';
import '../styles/App.css';

const recyclableItems = ['book', 'paper', 'glass', 'bottle', 'pen', 'mouse','handbag','suitcase'];
const nonRecyclableItems = ['ceramic', 'plastic', 'battery', 'carton', 'cell phone', 'mobile', 'coffee cups', 'bubble wraps'];

const classifyObject = (object) => {
  if (recyclableItems.includes(object)) {
    return 'recyclable';
  } else if (nonRecyclableItems.includes(object)) {
    return 'non-recyclable';
  } else {
    return 'unknown';
  }
};

const LiveDetection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await cocoSsd.load();
      setModel(model);
    };
    loadModel();
  }, []);

  const detectObjects = async () => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const predictions = await model.detect(video);

      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, videoWidth, videoHeight);

      const filteredPredictions = predictions.filter(prediction => prediction.class !== 'person' && prediction.score > 0.2);

      filteredPredictions.forEach((prediction) => {
        let [x, y, width, height] = prediction.bbox;

        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x + width > videoWidth) width = videoWidth - x;
        if (y + height > videoHeight) height = videoHeight - y;

        const classification = classifyObject(prediction.class);
        const text = `${prediction.class} (${classification}) (${Math.round(prediction.score * 100)}%)`;

        ctx.strokeStyle = classification === 'recyclable' ? '#00FF00' : classification === 'non-recyclable' ? '#FF0000' : '#FFFF00';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = ctx.strokeStyle;
        ctx.font = '18px Arial';
        ctx.fillText(text, x, y > 10 ? y - 5 : 10);
      });
    }
  };

  useEffect(() => {
    if (model) {
      const interval = setInterval(() => {
        detectObjects();
      }, 100);
      return () => clearInterval(interval);
    }
  }, [model]);

  return (
    <div className="live-detection">
      <TabBar />
      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{ width: '100%' }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: 0,
            right: 0,
            textAlign: 'center',
            zIndex: 9,
            width: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default LiveDetection;
