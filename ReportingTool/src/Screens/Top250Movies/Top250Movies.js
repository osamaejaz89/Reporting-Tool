import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {colors} from '../../utils';
import CustomHeader from '../../Components/CustomHeader';
import { top250Movies } from '../../Data/top250Movies';
import { height, width } from 'react-native-dimension';
const Top250Movies = props => {

    const renderData = (itemData) => {

        console.log('====================================');
        console.log(itemData.item);
        console.log('====================================');
        return (
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View>
              <Image
                source={{uri: itemData.item.image}}
                style={{
                  margin: 5,
                  width: width(40),
                  height: height(30),
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: 'red',
                padding: 10,
              }}>
              <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                <Text>Title: </Text>
                <Text>{itemData.item.title}</Text>
              </View>

              <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                <Text>Cast: </Text>
                <Text style={{ width: '60%'}}>
                  {itemData.item.crew}
                </Text>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                <Text>Release Year: </Text>
                <Text>{itemData.item.year}</Text>
              </View>
              <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                <Text>IMDB Ratings: </Text>
                <Text>{itemData.item.imDbRating}</Text>
              </View>
            </View>
          </View>
        );
    }
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <CustomHeader title={'Top Movies'} />

      <View style={{flex:1}}>
        <FlatList
          data={top250Movies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item,index) => renderData(item)}
        />
      </View>
    </View>
  );
};

export default Top250Movies;
