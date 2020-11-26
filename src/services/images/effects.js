import { createEffect } from 'effector';

export const getImages = createEffect({
  handler: async (limit = 10) => {
    const result = await fetch(`images?limit=${limit}`);
    return result.json();
  },
});
