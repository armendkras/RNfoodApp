import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet
} from 'react-native';
import SearchBar from '../../components/Search/SearchBar'
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants';
import {HorizontalFoodCard,FilterModal} from '../../components'
import VerticalFoodCard from '../../components/VerticalFoodCard/VerticalFoodCard';

const Section = ({title,onPress,children}) => {
    return (
        <View>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.showAll}>Show All</Text>
                </TouchableOpacity>
            </View>
            {/* Content */}
            {children}
        </View>
    )
}

const Home = () => {
    const [selectedCategoryId, setSelectedCategoryID] = useState(1);
    const [popular, setPopular] = useState([]);
    const [selectedMenuType, setSelectedMenuType] = useState(1);
    const [recommends, setRecommended] = useState([]);
    const [menuList, setMenuList] = useState([]);

    const [showFilterModal, setShowFilterModal] = useState(false);

    console.log(showFilterModal);

    useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    },[]);

    //Handler

    function handleChangeCategory(categoryId, menuTypeId) {
        // Retrieve the popular menu
        let selectedPopular=dummyData.menu.find(a=>a.name=="Popular")
        // Retrive the recommended menu
        let selectedRecommend = dummyData.menu.find(a => a.name == 'Recommended');
        //Find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId);

        // Set the popular menu based on the categoryId
        setPopular(selectedPopular?.list.filter(a=>a.categories.includes(categoryId)))
        // Set the recommended menu based on the categoryId
        setRecommended(selectedRecommend?.list.filter(a=>a.categories.includes(categoryId)))
        //Set the menu based on the categoryId
        setMenuList(selectedMenu?.list.filter(a=>a.categories.includes(categoryId)))
    }
    function renderMenuTypes() {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom:20
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight:index== dummyData.menu.length-1?SIZES.padding:0
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory(selectedCategoryId,item.id)
                        }}
                    >
                        <Text style={{
                            color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                        ...FONTS.h3}}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }
    function renderRecommendedSection() {
        return (
            <Section
                title="Recommended"
                onPress={() => console.log("Show all recommended")}
            >
                <FlatList
                    data={recommends}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 180,
                                width: SIZES.width * 0.85,
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems:'center'
                            }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width:150
                            }}
                            item={item}
                            onPress={()=>console.log('HorizontalFoodCard')}
                        />
                    )}
                />

            </Section>
        )
    }
    function renderPopularSection() {
        return (
            <Section
                title="Popular Near You"
                onPress={()=>console.log("Show all popular items")}
            >
                <FlatList
                    data={popular}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <VerticalFoodCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == popular.length - 1 ? SIZES.padding : 0,
                            }}
                            item={item}
                            onPress={()=>console.log("Vertical Food Card")}
                        />
                    )}
                />
            </Section>
        )
    }
    function renderFoodCategories() {
        return (
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            height: 55,
                            marginTop: SIZES.padding,
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
                            paddingHorizontal: 8,
                            borderRadius: SIZES.radius,
                            backgroundColor:selectedCategoryId==item.id?COLORS.primary:COLORS.lightGray2
                            
                        }}
                        onPress={() => {
                            setSelectedCategoryID(item.id)
                            handleChangeCategory(item.id,selectedMenuType)
                        }}
                    >
                        <Image
                            source={item.icon}
                            style={{
                                marginTop: 5,
                                height: 50,
                                width:50
                            }}
                        />
                        <Text
                            style={{
                                alignSelf: 'center',
                                marginRight: SIZES.base,
                                color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
                                ...FONTS.h3
                        }}
                        >
                            {item.name}
                        </Text>

                    </TouchableOpacity>
                )}
            />
        )
    }

    function renderDeliveryTo() {
        return (
            <View style={{
                marginTop: SIZES.padding,
                marginHorizontal:SIZES.padding
            }}>
                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.body3
                }}
                >
                    DELIVERY TO
                </Text>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        alignItems:'center'
                }}
                >
                    <Text
                    style={{...FONTS.h3}}
                    >
                        {dummyData?.myProfile?.address}
                        
                    </Text>
                    <Image
                        source={icons.down_arrow}
                        style={{
                            marginLeft: SIZES.base,
                            height: 20,
                            width:20
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
           
            }}
        >

            {/* Search */}
            <SearchBar setShowFilterModal={setShowFilterModal}/>
            {/* Filter Modal */}
           {showFilterModal&& <FilterModal
            isVisible={showFilterModal}
            onClose={()=>setShowFilterModal(false)}
            />}
            {/* List */}
            <FlatList
                
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Delivery To */}
                        {renderDeliveryTo()}
                        {/* Food Categories */}
                        {renderFoodCategories()}
                        {/* Popular */}
                        {renderPopularSection()}
                        {/* Recommended */}
                        {renderRecommendedSection()}
                        {/* Menu Type */}
                        {renderMenuTypes()}
                    </View>
                }
                renderItem={({ item, index }) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom:SIZES.radius
                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width:110
                            }}
                            item={item}
                            onPress={()=>console.log('HorizontalFoodCard')}
                        />
                    )
                    
                }}
                ListFooterComponent={
                    <View style={{ height: 200 }}/>
                }
            />
          
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    header:{
         flexDirection: 'row',
         marginHorizontal: SIZES.padding,
         marginTop: 30,
         marginBottom:20
    },
    title: { flex: 1, ...FONTS.h3 },
    showAll: {
        color:COLORS.primary,...FONTS.body3
    }
})
