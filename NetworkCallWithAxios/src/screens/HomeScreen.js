import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { SINGLE_IMAGE_UPLOAD_SCREEN } from './SingleImageUploadScreen';
import { POST_CALL_BODY_SCREEN } from './PostCallBodyScreen';
import { POST_CALL_FORM_DATA_SCREEN } from './PostCallFormDataScreen';
import { GET_CALL_QUERY_SCREEN } from './GetCallQueryScreen';
import { GET_CALL_SCREEN } from './GetCallScreen';
import { GET_CALL_PATH_SCREEN } from './GetCallPathScreen';
import ContainedButton from '../components/ContainedButton';
import {GET_CALL_LIST_SCREEN} from './GetCallListScreen';



export const HOME_SCREEN = 'HomeScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ ...GlobalStyles.screen, ...styles.screen }}>
      <ContainedButton
        title="GET Call"
        onPress={() => {
          navigation.navigate(GET_CALL_SCREEN);
        }}
      />
      <ContainedButton
        title="GET Call List"
        onPress={() => {
          navigation.navigate(GET_CALL_LIST_SCREEN);
        }}
      />
      <ContainedButton
        title="GET Call PATH"
        onPress={() => {
          navigation.navigate(GET_CALL_PATH_SCREEN);
        }}
      />
      <ContainedButton
        title="GET Call QUERY"
        onPress={() => {
          navigation.navigate(GET_CALL_QUERY_SCREEN);
        }}
      />
      <ContainedButton
        title="POST CALL FORM DATA"
        onPress={() => {
          navigation.navigate(POST_CALL_FORM_DATA_SCREEN);
        }}
      />
      <ContainedButton
        title="POST CALL BODY"
        onPress={() => {
          navigation.navigate(POST_CALL_BODY_SCREEN);
        }}
      />
      <ContainedButton
        title="SINGLE IMAGE UPLOAD"
        onPress={() => {
          navigation.navigate(SINGLE_IMAGE_UPLOAD_SCREEN);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 16,
  },
});

export default HomeScreen;
