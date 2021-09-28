import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants';
import Animated from 'react-native-reanimated';
import MainLayout from '../screens/MainLayout';
import DrawerContent from '../components/DrawerContent/DrawerContent';
import { connect } from 'react-redux';
import {setSelectedTab } from '../store/actions/tabActions';

const Drawer = createDrawerNavigator();

const CustomDrawer = ({selectedTab,setSelectedTab}) => {
    const [progress, setProgress] = useState(new Animated.Value(0));
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange:[1.,0.8]
    })
     const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange:[1,26]
     })
    
    const animatedStyle={borderRadius,transform:[{scale}]}
    return (
        <View style={styles.container}>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={styles.drawer}
                sceneContainerStyle={{
                    backgroundColor: 'transparent',
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    },0)
                   
                    return (
                        <DrawerContent
                            navigation={props.navigation}
                            selectedTab={selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                    )
                }}
            >
                <Drawer.Screen name='MainLayout'>
                    {props => <MainLayout {...props} drawerAnimationStyle={ animatedStyle}/>}
                </Drawer.Screen>
                
          </Drawer.Navigator>
        </View>
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

export default connect(mapStateToProps,mapDispatchToProps)( CustomDrawer);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.primary
    },
    drawer: {
        flex: 1,
        width: '65%',
        paddingRight: 20,
        backgroundColor:'transparent'
    }
})
