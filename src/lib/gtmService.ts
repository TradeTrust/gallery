import TagManager from 'react-gtm-module';
import { GADataLayerEvent } from 'types/types';

// Initialize GTM immediately when this module is imported
TagManager.initialize({
  gtmId: import.meta.env.VITE_GTM_ID!,
});

export const sendGAEvent = (eventData: GADataLayerEvent) => {
  TagManager.dataLayer({
    dataLayer: eventData,
  });
};
