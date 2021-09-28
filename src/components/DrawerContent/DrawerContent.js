import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image, Touchable } from 'react-native'
import { COLORS, constants, dummyData, FONTS, icons, SIZES } from '../../constants'
import DrawerItem from './DrawerItem';


const DrawerContent = ({navigation,selectedTab,setSelectedTab}) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{flex:1}}
        >
            <View
                style={styles.container}
            >
                {/*Close */}
                <View
                    style={styles.close}
                >
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={()=>navigation.closeDrawer()}
                    >
                        <Image
                            source={icons.cross}
                            style={styles.image}
                        />
                    </TouchableOpacity>
            </View>
                {/*Profile*/}
                <TouchableOpacity
                    style={styles.pTouch}
                    onPress={()=>console.log('Profile')}
                >
                    <Image
                        source={dummyData.myProfile?.profile_image}
                        style={styles.pImage}
                    />
                    <View
                    style={{marginLeft:SIZES.radius}}
                    >
                        <Text style={{color:COLORS.white,...FONTS.h3}}>
                            {dummyData?.myProfile?.name}</Text>
                        <Text style={{color:COLORS.white,...FONTS.body4}}>View your profile</Text>
                    </View>
                </TouchableOpacity>
                {/*Drawer Items*/}
                
                <View
                    style={{
                        flex: 1,
                    marginTop:SIZES.padding
                    }}
                >
                    <DrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab==constants.screens.home}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        
                        onPress={() => {
                            setSelectedTab(constants.screens.home)
                            navigation.navigate('MainLayout')
                        }}
                    />
                    <DrawerItem
                        label={constants.screens.my_wallet}
                        icon={icons.wallet}
                    />
                    <DrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab==constants.screens.notification}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        
                        onPress={() => {
                            setSelectedTab(constants.screens.notification)
                            navigation.navigate('MainLayout')
                        }}
                    />
                    <DrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                           isFocused={selectedTab==constants.screens.favourite}
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                        
                        onPress={() => {
                            setSelectedTab(constants.screens.favourite)
                            navigation.navigate('MainLayout')
                        }}
                    />
                    {/*Line Divider*/}
                    <View
                        style={styles.divider}
                    />

                     <DrawerItem
                        label="Track Your Order"
                        icon={icons.location}
                    />
                     <DrawerItem
                        label="Cupons"
                        icon={icons.coupon}
                    />
                     <DrawerItem
                        label="Setting"
                        icon={icons.setting}
                    />
                    <DrawerItem
                        label="Track Your Order"
                        icon={icons.location}
                    />
                    <DrawerItem
                        label="Help Center"
                        icon={icons.help}
                    />
                    <View style={{ marginBottom: SIZES.padding }}/>
                    <DrawerItem
                        label="Logout"
                        icon={icons.logout}
                    />
                    </View>
            </View>
      </DrawerContentScrollView>
    )
}

export default DrawerContent;


const styles = StyleSheet.create({
    container:{
            flex: 1,
            paddingHorizontal: SIZES.radius
    },
    close: {
        alignItems: 'flex-start',
        justifyContent:'center'
    },
    touch:{
         alignItems: 'center',
        justifyContent:'center'
    },
    image:{
        width: 35,
        tintColor:COLORS.white,
        height: 35,
    },
    pTouch:{
        marginTop: SIZES.radius,
        alignItems:'center',
        flexDirection: 'row',
    },
    pImage:{
      width: 50,
     height: 50,
      borderRadius:SIZES.radius
    },
    divider:{
            height: 1,
            marginVertical: SIZES.radius,
            marginLeft: SIZES.radius,
            backgroundColor:COLORS.lightGray1
                    }
})
