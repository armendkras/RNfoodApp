import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FONTS } from '../../constants';

const Header = ({containerStyle,title,leftComponent,rightComponent}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                ...containerStyle
        }}
        >
            {/* Left */}
            {leftComponent}
            
            {/* Title */}
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    {title}
                </Text>
            </View>

            {/* Right */}
            {rightComponent}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent:'center'
    },
    titleText:{...FONTS.h3}
    
})
