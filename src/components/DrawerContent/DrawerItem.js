import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../../constants'

const DrawerItem = ({label,icon,onPress,isFocused}) => {
    return (
        <TouchableOpacity
            style={[styles.container,{backgroundColor:isFocused?COLORS.transparentBlack1:null}]}
            onPress={onPress}
        >
            <Image
                style={styles.image}
                source={icon}
              />
            <Text
                style={styles.text}
            >
{label}
            </Text>
        </TouchableOpacity>
    )
}

export default DrawerItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius:SIZES.base
    },
    image: {
        width: 20,
        height: 20,
        tintColor:COLORS.white
    },
    text:{
                    marginLeft: 15,
                    color: COLORS.white,
                    ...FONTS.h3
            }
})
