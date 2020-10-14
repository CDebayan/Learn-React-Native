import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import ContainedButton from '../components/ContainedButton';
import ImagePicker from 'react-native-image-crop-picker';
import { GlobalStyles } from '../styles/GlobalStyles';

export const SINGLE_IMAGE_UPLOAD_SCREEN = 'SINGLE_IMAGE_UPLOAD_SCREEN';

const SingleImageUploadScreen = () => {

    const [image, setImage] = useState();

    const clickHandler = () => {
        ImagePicker.openPicker({}).then(image => {
            setImage({
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
            });
        });
    };

    return (
        <View style={GlobalStyles.screen}>
            <View style={{ ...GlobalStyles.screen, ...styles.container }}>
                <Image
                    style={styles.imageContainer}
                    source={image}
                />
            </View>
            <View style={styles.textContainter}>
                <Text>Hee</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ContainedButton title='Select' onPress={clickHandler} />
                <ContainedButton title='Upload' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textContainter: {
        alignItems: 'center',
        marginBottom: 16
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    }
});

export default SingleImageUploadScreen;
