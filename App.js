import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Reparte las props de navegación a todo el proyecto
import TabNav from './src/Navigation/TabNav';

export default function App() {
  return (
    <NavigationContainer>
      <TabNav />
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
