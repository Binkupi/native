import React from 'react';
import {View} from 'react-native';
// import CaptureImage from './CaptureImages';
import {ModalPortal} from 'react-native-modals';
export default function CameraScreen() {
  return (
    <View style={{flex: 1}}>
      <ModalPortal />
      {/* <CaptureImage /> */}
    </View>
  );
}