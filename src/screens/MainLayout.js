import React,{useEffect, useRef} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    Touchable,
    StyleSheet
    
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { connect } from 'react-redux'
import { setSelectedTab} from '../store/actions/tabActions';

import {Home,Search,CartTab,Favourite,Notification } from '../screens';

import { COLORS,FONTS,SIZES,icons,constants,dummyData} from '../constants';

import {Header,TabButton} from '../components'

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {

    const flatListRef = useRef();

    //Reanimated Shared Value

    const homeTabFlex = useSharedValue(1);
    const homeTabColor = useSharedValue(COLORS.white);
    const searchTabFlex = useSharedValue(1);
    const searchTabColor = useSharedValue(COLORS.white);
    const cartTabFlex = useSharedValue(1);
    const cartTabColor = useSharedValue(COLORS.white);
    const favouriteTabFlex = useSharedValue(1);
    const favouriteTabColor = useSharedValue(COLORS.white);
    const notificationTabFlex = useSharedValue(1);
    const notificationTabColor = useSharedValue(COLORS.white);

    // Reanimated Animated Style

    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value
        }
    });
    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    });

    
    const searchFlexStyle = useAnimatedStyle(() => {
        return {
            flex: searchTabFlex.value
        }
    });
    const searchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor:searchTabColor.value
        }
    })

    
    const notificationFlexStyle = useAnimatedStyle(() => {
        return {
            flex: notificationTabFlex.value
        }
    });
    const notificationColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor:notificationTabColor.value
        }
    })

    
    const cartFlexStyle = useAnimatedStyle(() => {
        return {
            flex: cartTabFlex.value
        }
    });
    const cartColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor:cartTabColor.value
        }
    })

    
    const favouriteFlexStyle = useAnimatedStyle(() => {
        return {
            flex: favouriteTabFlex.value
        }
    });
    const favouriteColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor:favouriteTabColor.value
        }
    })


    useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, []);

    useEffect(() => {
        if (selectedTab == constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated:false
            })
            homeTabFlex.value = withTiming(4, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.primary, {
                duration:500
            })
        } else {
            homeTabFlex.value = withTiming(1, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.white, {
                duration:500
            })
        }
        if (selectedTab == constants.screens.search) {
                flatListRef?.current?.scrollToIndex({
                index: 1,
                animated:false
            })
            searchTabFlex.value = withTiming(4, { duration: 500 })
            searchTabColor.value = withTiming(COLORS.primary, {
                duration:500
            })
        } else {
            searchTabFlex.value = withTiming(1, { duration: 500 })
            searchTabColor.value = withTiming(COLORS.white, {
                duration:500
            })
        }

        if (selectedTab == constants.screens.cart) {
            flatListRef?.current?.scrollToIndex({
                index: 2,
                animated:false
            })
            cartTabFlex.value = withTiming(4, { duration: 500 })
            cartTabColor.value = withTiming(COLORS.primary, {
                duration:500
            })
        } else {
            cartTabFlex.value = withTiming(1, { duration: 500 })
            cartTabColor.value = withTiming(COLORS.white, {
                duration:500
            })
        }

        if (selectedTab == constants.screens.favourite) {
            flatListRef?.current?.scrollToIndex({
                index: 3,
                animated:false
            })
            favouriteTabFlex.value = withTiming(4, { duration: 500 })
            favouriteTabColor.value = withTiming(COLORS.primary, {
                duration:500
            })
        } else {
            favouriteTabFlex.value = withTiming(1, { duration: 500 })
            favouriteTabColor.value = withTiming(COLORS.white, {
                duration:500
            })
        }
        if (selectedTab == constants.screens.notification) {
                flatListRef?.current?.scrollToIndex({
                index: 4,
                animated:false
            })
            notificationTabFlex.value = withTiming(4, { duration: 500 })
            notificationTabColor.value = withTiming(COLORS.primary, {
                duration:500
            })
        } else {
            notificationTabFlex.value = withTiming(1, { duration: 500 })
            notificationTabColor.value = withTiming(COLORS.white, {
                duration:500
            })
        }
    },[selectedTab])

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor:COLORS.white,
                ...drawerAnimationStyle
            }}
        >
            {/*Header*/}
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems:'center'
                }}
                title={selectedTab.toUpperCase()}
                leftComponent={
                    <TouchableOpacity
                        style={styles.left}
                        onPress={()=>navigation.openDrawer()}
                    >
                        <Image
                        source={icons.menu}
                        />
                    </TouchableOpacity>
                }
                rightComponent={
                    <TouchableOpacity
                        style={styles.right}
                    >
                        <Image
                            source={dummyData?.myProfile?.profile_image}
                            style={styles.image}
                        />

                    </TouchableOpacity>
                }
            />

            {/*Content*/}
            <View style={{flex:1}}>
                <FlatList
                    ref={flatListRef}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment='center'
                    snapToInterval={SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item,index}) => {
                        return (
                            <View
                                style={{
                                    height: SIZES.height,
                                    width:SIZES.width
                            }}
                            >
                            {item.label==constants.screens.home&&<Home/>}
                            {item.label==constants.screens.search&&<Search/>}
                            {item.label==constants.screens.cart&&<CartTab/>}
                            {item.label==constants.screens.favourite&&<Favourite/>}
                            {item.label==constants.screens.notification&&<Notification/>}

                            </View>
                        )
                    }}
                />
            </View>

            {/*Footer*/}
            <View
                style={{
                    height: 100,
                    justifyContent:'flex-end'
            }}
            >
                {/* Shadow */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 4 }}
                    colors={[
                        COLORS.transparent,
                        COLORS.transparent
                    ]}
                    style={styles.linearGradient}
                />

                {/* Tabs */}
                <View style={styles.tabs}>
               
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        outerContainerStyle={homeFlexStyle}
                        innerContainerStyle={homeColorStyle}
                        onPress={()=>setSelectedTab(constants.screens.home)}
                    />
                    
                    <TabButton
                        label={constants.screens.search}
                        icon={icons.search}
                        isFocused={selectedTab == constants.screens.search}
                        outerContainerStyle={searchFlexStyle}
                        innerContainerStyle={searchColorStyle}
                        onPress={()=>setSelectedTab(constants.screens.search)}
                    />
                    
                    <TabButton
                        label={constants.screens.cart}
                        icon={icons.cart}
                        isFocused={selectedTab == constants.screens.cart}
                        outerContainerStyle={cartFlexStyle}
                        innerContainerStyle={cartColorStyle}
                        onPress={()=>setSelectedTab(constants.screens.cart)}
                    />
                    <TabButton
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isFocused={selectedTab == constants.screens.favourite}
                        outerContainerStyle={favouriteFlexStyle}
                        innerContainerStyle={favouriteColorStyle}
                        onPress={()=>setSelectedTab(constants.screens.favourite)}
                        />
                    <TabButton
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab == constants.screens.notification}
                        outerContainerStyle={notificationFlexStyle}
                        innerContainerStyle={notificationColorStyle}
                        onPress={()=>setSelectedTab(constants.screens.notification)}
                        />
                </View>

            </View>
        </Animated.View>
    )
}

function mapStateToProps (state) {
    return {
        selectedTab:state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => { return dispatch(setSelectedTab(selectedTab)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( MainLayout);

const styles = StyleSheet.create({
  left:{
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius:SIZES.radius,
        borderColor: COLORS.gray2,
    },
    right:{
             borderRadius: SIZES.radius,
             alignItems: 'center',
             justifyContent:'center'
    },
    image:{
            width: 40,
            height: 40,
            borderRadius:SIZES.radius
    },
    tabs:{
         flex: 1,
         flexDirection: 'row',
         paddingHorizontal: SIZES.radius,
         paddingBottom: 10,
         borderTopLeftRadius: 20,
         borderTopRightRadius: 20,
         backgroundColor:COLORS.white,
    },
    linearGradient:{
                 elevation:1,
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 height: 100,
                 borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
                 overflow:'hidden'
            }
    
})
