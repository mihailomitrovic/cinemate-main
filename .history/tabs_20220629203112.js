import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from './screens/ProfileScreen'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
        </Tab.Navigator>
    );
}