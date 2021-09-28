import React from 'react'
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import { SIZES, FONTS, COLORS, icons, dummyData } from '../../constants';


const SearchBar = ({setShowFilterModal}) => {
    return (
        <View style={styles.container}>
            {/* Icon */}
            <Image source={icons.search}
                style={{
                    height: 20,
                    width: 20,
                    tintColor:COLORS.black
            }}
            />
            {/* Text Input */}
            <TextInput
                style={styles.input}
                placeholder="search food..."
            />
            {/* Filter Button */}
            <TouchableOpacity onPress={()=>setShowFilterModal(true)}>
                <Image
                    source={icons.filter}
                    style={styles.filter}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        
    },
    input: {
        flex: 1,
        marginLeft: SIZES.radius,
        ...FONTS.body3,
     paddingBottom:-1
    },
    filter: {
        height: 20,
        width: 20,
        tintColor:COLORS.black
    }
  
})
