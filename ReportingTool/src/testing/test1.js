import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {CameraGallerySelect} from '../modal/camera_gallery_slection';

const RNImagePicker = () => {
   
    const [modalOpen, setModalOpen] = useState(false);
    const [driverId, setDriverId] = useState(-1);
    const [apiHit, setApiHit] = useState(false)

  const toggleModal = async () => {
    let granted = await checkPermission();
      if (granted) {
        setModalOpen(!modalOpen)
    }
  };
    
    useEffect( async () => {
        let data = await AsyncStorage.getItem('@USER_DATA');
        let userData = JSON.parse(data);
        if (userData) {
            await setDriverId(userData.user_id)
        }
    }, [])

  // camera select
  const selectCamera = async () => {
    let granted = await checkPermission();
    if (granted) {
      return ImagePicker.openCamera({
        width: 600,
        height: 600,
        compressImageMaxHeight: 600,
        compressImageMaxWidth: 600,
        includeBase64: true,
        freeStyleCropEnabled: true,
        hideBottomControls: true,
        includeExif: true,
        compressImageQuality: 1,
      })
        .then(async img => {
          await  toggleModal();
          await setApiHit(true)
          
            try {
            let imageName = img.path.split('/').pop();
            let data = new FormData();

            data.append('image', {
              uri: img.path,
              name: imageName,
              type: 'image/jpeg',
            });

            data.append('route_id',  props.routeId);
            data.append('driver_id',  driverId);

            console.log('Data', data);

            let res = await postUploadSlip(data);
            if (res.success == true) {
              ToastAndroid.show('Picture has been saved', 1000);
            } else {
              ToastAndroid.show('Picture has not been saved, Try again', 1000);
            }
          } catch (e) {
            ToastAndroid.show('Picture has not been saved, Try again', 1000);
          } finally {
                await setApiHit(false)
          }
        })
        .catch(async err => {
          await  toggleModal();
        });
    }
  };
  // image from gallery select
  const selectGallery = async () => {
    let granted = await checkPermission();
    if (granted) {
      return ImagePicker.openPicker({
        width: 600,
        height: 600,
      })
        .then(async img => {
          await  toggleModal();
          await setApiHit(true)
          try {
            let imageName = img.path.split('/').pop();
            let data = new FormData();

            data.append('image', {
              uri: img.path,
              name: imageName,
              type: 'image/jpeg',
            });

            data.append('route_id',  props.routeId);
            data.append('driver_id',  driverId);

            let res = await postUploadSlip(data);
            if (res.success == true) {
              ToastAndroid.show('Picture has been saved', 1000);
            } else {
              ToastAndroid.show('Picture has not been saved, Try again', 1000);
            }
          } catch (e) {
            ToastAndroid.show('Picture has not been saved, Try again', 1000);
          } finally {
              await setApiHit(false)
          }
        })
        .catch(async err => {
          await  toggleModal();
        });
    }
  };

    return (
      <TouchableOpacity
        disabled={
           props.isComplete ||  apiHit ||  props.disableButton
        }
        style={
           props.isComplete ||  props.disableButton
            ? styles.confimLoaderBtnDisabled
            : styles.confimLoaderBtn
        }
        onPress={() =>  toggleModal()}>
        {! apiHit ? (
          <Text style={styles.confimLoaderBtnText}>Upload Slip</Text>
        ) : (
          <ActivityIndicator size="small" color={colors.white} />
        )}
        { modalOpen ? (
          <CameraGallerySelect
            onClose={() =>  toggleModal()}
            selectCamera={() =>  selectCamera()}
            selectGallery={() =>  selectGallery()}
          />
        ) : null}
      </TouchableOpacity>
    );
}
export default RNImagePicker;

// export default class RNImagePicker extends React.Component {
//   // open modal if permission given
//   toggleModal = async () => {
//     let granted = await checkPermission();
//     if (granted) {
//        setState({
//         modalOpen: ! modalOpen,
//       });
//     }
//   };
//   componentDidMount = async () => {
//     let data = await AsyncStorage.getItem('@USER_DATA');
//     let userData = JSON.parse(data);
//     if (userData) {
//       await  setState({
//         driverId: userData.user_id,
//       });
//     }
//   };
//   // camera select
//   selectCamera = async () => {
//     let granted = await checkPermission();
//     if (granted) {
//       return ImagePicker.openCamera({
//         width: 600,
//         height: 600,
//         compressImageMaxHeight: 600,
//         compressImageMaxWidth: 600,
//         includeBase64: true,
//         freeStyleCropEnabled: true,
//         hideBottomControls: true,
//         includeExif: true,
//         compressImageQuality: 1,
//       })
//         .then(async img => {
//           await  toggleModal();
//           await  setState({
//             apiHit: true,
//           });
//           try {
//             let imageName = img.path.split('/').pop();
//             let data = new FormData();

//             data.append('image', {
//               uri: img.path,
//               name: imageName,
//               type: 'image/jpeg',
//             });

//             data.append('route_id',  props.routeId);
//             data.append('driver_id',  driverId);

//             console.log('Data', data);

//             let res = await postUploadSlip(data);
//             if (res.success == true) {
//               ToastAndroid.show('Picture has been saved', 1000);
//             } else {
//               ToastAndroid.show('Picture has not been saved, Try again', 1000);
//             }
//           } catch (e) {
//             ToastAndroid.show('Picture has not been saved, Try again', 1000);
//           } finally {
//             await  setState({
//               apiHit: false,
//             });
//           }
//         })
//         .catch(async err => {
//           await  toggleModal();
//         });
//     }
//   };
//   // image from gallery select
//   selectGallery = async () => {
//     let granted = await checkPermission();
//     if (granted) {
//       return ImagePicker.openPicker({
//         width: 600,
//         height: 600,
//       })
//         .then(async img => {
//           await  toggleModal();
//           await  setState({
//             apiHit: true,
//           });
//           try {
//             let imageName = img.path.split('/').pop();
//             let data = new FormData();

//             data.append('image', {
//               uri: img.path,
//               name: imageName,
//               type: 'image/jpeg',
//             });

//             data.append('route_id',  props.routeId);
//             data.append('driver_id',  driverId);

//             let res = await postUploadSlip(data);
//             if (res.success == true) {
//               ToastAndroid.show('Picture has been saved', 1000);
//             } else {
//               ToastAndroid.show('Picture has not been saved, Try again', 1000);
//             }
//           } catch (e) {
//             ToastAndroid.show('Picture has not been saved, Try again', 1000);
//           } finally {
//             await  setState({
//               apiHit: false,
//             });
//           }
//         })
//         .catch(async err => {
//           await  toggleModal();
//         });
//     }
//   };

//   constructor(props) {
//     super(props);
//      state = {
//       modalOpen: false,
//       driverId: -1,
//       apiHit: false,
//     };
//   }

//   render() {
    
//   }
// }
