import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  UserProfile: undefined;
  MoodTracker: undefined;
  Insights: undefined;
  Community: undefined;
  Signup: undefined;
  DietTracker: undefined;
  // Add other screens here with their parameters, if any
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
