
import { createStackNavigator } from '@react-navigation/stack';
import AssetsScreen from '../views/assets';
import AssetViewScreen from '../views/asset';
import FavoritesScreen from '../views/favorites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const AssetsStack = createStackNavigator();

function AssetsStackScreen() {
  return (
    <AssetsStack.Navigator initialRouteName="AssetsScreen">
      <AssetsStack.Screen name="AssetsScreen" options={{headerShown: false}} component={AssetsScreen} />
      <AssetsStack.Screen name="AssetViewScreen" options={{title: '', headerBackTitle: 'Back'}}   component={AssetViewScreen} />
    </AssetsStack.Navigator>
  );
}

const FavoritesStack = createStackNavigator();

function FavoritesStackScreen() {
  return (
    <FavoritesStack.Navigator options={{headerShown: false}}>
      <FavoritesStack.Screen name="FavoritesScreen" options={{headerShown: false}} component={FavoritesScreen} />
      <FavoritesStack.Screen name="AssetViewScreen" options={{title: '', headerBackTitle: 'Back'}} component={AssetViewScreen} />
    </FavoritesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={AssetsStackScreen} />
        <Tab.Screen name="Favorites" component={FavoritesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}