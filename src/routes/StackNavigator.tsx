import { createStackNavigator } from '@react-navigation/stack';
import Home from '../module/home/Home';
import Onboarding from '../module/welcome/Onboarding';
import Splash from '../module/welcome/Splash';
import Login from '../module/authentiction/Login';
import Otp from '../module/authentiction/Otp';
import SignUp from '../module/authentiction/SignUp';
import Notification from '../module/home/Notification';
import PgDescription from '../module/home/PgDescription';
import FewDetails from '../module/home/FewDetails';
import CustomNotificationCard from '../components/CustomNotificationCard';
import Profile from '../module/home/Profile';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="FewDetails" component={FewDetails} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="PgDescription" component={PgDescription} />
    </Stack.Navigator>
  );
}