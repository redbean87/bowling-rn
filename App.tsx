import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, StyleSheet } from 'react-native';

import Game from './src/components/Game';
import Home from './src/components/Home';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: process.env.NODE_ENV === 'production',
      refetchOnWindowFocus: process.env.NODE_ENV === 'production',
      // queryFn: createQueryFn('https://api_base_url'),
    },
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Game'}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Game" component={Game} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
