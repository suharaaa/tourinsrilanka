import "react-native-gesture-handler";

import * as React from "react";
import { useEffect } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SearchBar, Button } from "react-native-elements";

import NearCategory from "./src/screens/NearCategory";
import { DrawerContent } from "./src/screens/DrawerContent";
import HomeScreen from "./src/screens/HomeScreen";
import searchNearestPlaces from "./src/screens/searchNearestPlaces";
import Map from "./src/screens/Map";
import searchHotel from "./src/screens/searchHotel";
import userProfile from "./src/screens/userProfile";
import viewFavorites from "./src/screens/viewFavorites";
import searchCity from "./src/screens/searchCity";
import leGrand from "./src/screens/leGrand";
import reserveHotel from "./src/screens/reserveHotel";
import payHotel from "./src/screens/payHotel";
import completedBooking from "./src/screens/completedBooking";
import badulla from "./src/screens/badulla";
import ella from "./src/screens/ella";
import favorites from "./src/screens/favorites";
import favItem from "./src/screens/favItem";
import updateProfile from "./src/screens/updateProfile";

import { AuthContext } from "./src/components/context";

import RootStackScreen from "./src/screens/RootStackScreen";
import signUpScreen from "./src/screens/signUpScreen";

const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigation Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}></TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("cxexuxa");
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken("cxexuxa");
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#fcc221" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            drawerContentOptions={{
              activeTintColor: "#e91e63",
              itemStyle: { marginVertical: 5 },
            }}
          >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="NearCategory" component={NearCategory} />
            <Drawer.Screen
              name="searchNearestPlaces"
              component={searchNearestPlaces}
            />
            <Drawer.Screen name="Map" component={Map} />
            <Drawer.Screen name="searchHotel" component={searchHotel} />
            <Drawer.Screen name="leGrand" component={leGrand} />
            <Drawer.Screen name="reserveHotel" component={reserveHotel} />
            <Drawer.Screen name="payHotel" component={payHotel} />
            <Drawer.Screen
              name="completedBooking"
              component={completedBooking}
            />
            <Drawer.Screen name="userProfile" component={userProfile} />
            <Drawer.Screen name="viewFavorites" component={viewFavorites} />
            <Drawer.Screen name="searchCity" component={searchCity} />
            <Drawer.Screen name="badulla" component={badulla} />
            <Drawer.Screen name="ella" component={ella} />
            <Drawer.Screen name="favorites" component={favorites} />
            <Drawer.Screen name="favItem" component={favItem} />
            <Drawer.Screen name="updateProfile" component={updateProfile} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
