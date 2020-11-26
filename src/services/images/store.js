import { createStore } from 'effector';
import * as effects from './effects';

export const $images = createStore([])
  .on(effects.getImages.doneData, (state, images) => images);
