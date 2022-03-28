import {Share} from 'react-native';

export const shareSheet = async user => {
  try {
    const result = await Share.share({
      message: `Check out this livestream https://www.dummyurl.com/live/${user}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    console.log(error);
  }
};
