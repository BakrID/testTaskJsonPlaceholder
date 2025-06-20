import { PostDetailsScreen } from '#Screens/PostDetailsScreen';
import { PostsScreen } from '#Screens/PostsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  RootNavigatorParamsList,
  RootNavigatorScreens,
} from './RootNavigator.types';

const Stack = createNativeStackNavigator<RootNavigatorParamsList>();

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={RootNavigatorScreens.Posts} component={PostsScreen} />
      <Stack.Screen
        name={RootNavigatorScreens.PostDetails}
        component={PostDetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
