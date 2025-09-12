import TagManager from 'react-gtm-module';
import { GADataLayerEvent } from 'types/types';

// Initialize GTM immediately when this module is imported
const gtmId = import.meta.env.VITE_GTM_ID;
if (gtmId) {
  TagManager.initialize({
    gtmId,
  });
}

export const sendGAEvent = (eventData: GADataLayerEvent) => {
  if (gtmId) {
    TagManager.dataLayer({
      dataLayer: eventData,
    });
  }
};
