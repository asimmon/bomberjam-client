import * as tf from '@tensorflow/tfjs-node';

import GenerationManager from './generationManager';

(async () => {
  try {
    
    // Load Model
    // const model = tf.sequential();
    // const layers = await tf.loadLayersModel('file://./last-bot/model.json');
    // model.add(layers);

    const generationManager = new GenerationManager(4);

    while (true) {
      await generationManager.runGeneration();
      await generationManager.nextGeneration();
    }
  } catch (e) {
    console.log(e);
  }
})();
