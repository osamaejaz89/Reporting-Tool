import React from 'react';
import {Modal, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {colors, dimensions} from '../../utils/index';

export const CameraGallerySelect = props => {
  return (
    <Modal
      onBackdropPress={() => props.onClose()}
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        props.onClose();
      }}>
      <View style={styles.containerCameraGaleery}>
        <View style={styles.selectPhotoGallery}>
          <Text style={styles.selectPhotoText}>{'Select a photo'}</Text>
        </View>
        <View style={styles.camera}>
          <TouchableOpacity
            onPress={() => props.selectCamera()}
            style={styles.galleryButtonView}>
            <Text style={styles.cameraButtonViewText}>Take Photo...</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gallery}>
          <TouchableOpacity
            onPress={() => props.selectGallery()}
            style={styles.galleryButtonView}>
            <Text style={styles.galleryButtonViewText}>
              Choose from Library...
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsMainView}>
          <TouchableOpacity
            onPress={() => props.onClose()}
            style={styles.closeButtonView}>
            <Text style={styles.noBtnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  confirmItemsMainView: {
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  confirmItemsTitleView: {
    marginTop: dimensions.WIDTH(5),
    paddingBottom: dimensions.WIDTH(2),
  },
  confirmItemsTitleText: {
    fontSize: dimensions.WIDTH(6),
    textAlign: 'center',
    color: colors.primary_color,
  },
  confirmItemsView: {
    backgroundColor: '#fff',
  },
  confirmItemsDescription: {
    fontSize: dimensions.WIDTH(4),
  },
  confirmItemsHeadingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.WIDTH(5),
  },
  confirmItemsHeadingText: {
    fontSize: dimensions.WIDTH(5),
    fontWeight: 'bold',
  },
  confirmItemsSkuView: {
    flexDirection: 'row',
    paddingVertical: dimensions.WIDTH(2),
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.WIDTH(5),
  },
  confirmItemsDealView: {
    flexDirection: 'row',
    paddingVertical: dimensions.WIDTH(4),
    justifyContent: 'space-between',
  },
  confirmItemsSkuText: {
    fontSize: dimensions.WIDTH(4),
    color: colors.black,
    fontWeight: 'bold',
  },
  confirmItemsDealText: {
    fontSize: dimensions.WIDTH(4),
    color: colors.primary_color,
    fontWeight: 'bold',
  },
  confirmItemsBtnView: {
    flexDirection: 'row',
    backgroundColor: colors.primary_color,
    alignSelf: 'center',
  },
  confirmItemsBtnText: {
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  confirmItemsNameView: {
    width: '80%',
  },
  confirmItemsQtyView: {
    width: '20%',
  },
  dealMainView: {
    paddingHorizontal: dimensions.WIDTH(5),
    paddingBottom: dimensions.WIDTH(5),
  },
  dealNameView: {
    width: '70%',
  },
  dealQtyView: {
    width: '30%',
    alignItems: 'flex-end',
  },
  dealItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftWidth: 1,
    borderColor: colors.primary_color,
    paddingVertical: dimensions.WIDTH(2),
    borderBottomWidth: 0.5,
    borderStyle: 'dotted',
    borderBottomColor: '#E3E3E3',
  },
  dealItemNameView: {
    width: '70%',
  },
  dealItemName: {
    paddingLeft: dimensions.WIDTH(2),
    fontSize: dimensions.WIDTH(4),
  },
  dealItemQtyView: {
    width: '30%',
    alignItems: 'flex-end',
  },
  dealItemQty: {
    fontSize: dimensions.WIDTH(4),
  },
  skuDivider: {
    borderBottomWidth: 0.5,
    borderStyle: 'dotted',
    borderColor: '#E3E3E3',
  },
  confirmationDetailView: {
    paddingTop: dimensions.WIDTH(2),
    paddingHorizontal: dimensions.WIDTH(5),
  },
  buttonsMainView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingTop: dimensions.WIDTH(5),
    // paddingBottom: dimensions.WIDTH(5),
  },
  camera: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: dimensions.WIDTH(5),
    // paddingBottom: dimensions.WIDTH(5),
  },
  gallery: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: dimensions.WIDTH(5),
    // paddingBottom: dimensions.WIDTH(5),
  },
  noBtnView: {
    borderWidth: 0,
    paddingHorizontal: dimensions.WIDTH(15),
    paddingVertical: dimensions.WIDTH(2),
    borderRadius: dimensions.WIDTH(2),
  },
  noBtnText: {
    color: colors.white,
    fontSize: dimensions.WIDTH(4),
  },

  closeButtonView: {
    borderWidth: 0.5,
    paddingHorizontal: dimensions.WIDTH(30),
    paddingVertical: dimensions.WIDTH(2),
    borderRadius: dimensions.WIDTH(2),
    backgroundColor: colors.primary_color,
    borderColor: colors.primary_color,
    marginTop: dimensions.WIDTH(5),
  },
  cameraButtonView: {
    borderWidth: 0.5,
    paddingHorizontal: dimensions.WIDTH(30),
    paddingVertical: dimensions.WIDTH(2),
    borderRadius: dimensions.WIDTH(2),
    backgroundColor: colors.primary_color,
    borderColor: colors.primary_color,
  },
  galleryButtonView: {
    borderRadius: dimensions.WIDTH(2),
    backgroundColor: colors.white,
    borderColor: colors.primary_color,
    borderBottomWidth: 0,
  },
  cameraButtonViewText: {
    color: colors.black,
    fontSize: dimensions.WIDTH(5),
  },
  galleryButtonViewText: {
    color: colors.black,
    fontSize: dimensions.WIDTH(5),
  },
  depositSlipCloseButton: {
    backgroundColor: colors.primary_color,
    paddingVertical: dimensions.WIDTH(3),
    justifyContent: 'center',
    width: dimensions.WIDTH(90),
    paddingHorizontal: 10,

    alignSelf: 'center',
    position: 'absolute',
    bottom: -0,
    right: 0,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  modalImageContainer: {
    backgroundColor: 'transparent',
    width: dimensions.WIDTH(90),
    height: dimensions.HEIGHT(80),
  },
  containerCameraGaleery: {
    height: dimensions.WIDTH(60),
    backgroundColor: colors.white,
    marginTop: 'auto',
    borderTopLeftRadius: dimensions.WIDTH(10),
    borderTopRightRadius: dimensions.WIDTH(10),
  },
  selectPhotoGallery: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.WIDTH(3),
    borderBottomWidth: 0.5,
    paddingBottom: dimensions.WIDTH(3),
    borderColor: colors.light_grey,
    paddingVertical: dimensions.WIDTH(2),
  },
  selectPhotoText: {
    color: colors.light_grey,
    fontSize: dimensions.WIDTH(5),
  },
});
