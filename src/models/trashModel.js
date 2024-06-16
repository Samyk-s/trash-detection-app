import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

let model;

export const loadModel = async () => {
  model = await mobilenet.load();
};

export const classifyImage = async (imageElement) => {
  if (!model) {
    await loadModel();
  }
  const predictions = await model.classify(imageElement);
  return predictions;
};
