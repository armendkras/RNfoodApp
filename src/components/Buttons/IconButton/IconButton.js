import React from 'react'
import { StyleSheet,Image, Text, View,TouchableOpacity } from 'react-native'
import { COLORS } from '../../../constants';

const IconButton = ({containerStyle,icon,iconStyle,onPress}) => {
    return (
        <TouchableOpacity
            style={{
            ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
            source={icon}
style={[styles.image,{...iconStyle}]}
            />
            
       </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
        tintColor: COLORS.white,
    }
})
