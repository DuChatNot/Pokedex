import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Reparte las props de navegación a todo el proyecto
import TabNav from './src/Navigation/TabNav';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <TabNav />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
