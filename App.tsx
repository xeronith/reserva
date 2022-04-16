import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContextInterface, AppContextProvider } from './context/AppContext';
import { QueryClient, QueryClientProvider } from 'react-query'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
})

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    const appContext: AppContextInterface = {
      selectedTime: 0,
      customer: {
        name: '',
        email: ''
      },
      restaurant: {
        name: 'Unknown',
        image: '',
        latitude: 0,
        longitude: 0,
        availableTimes: [{
          time: 0,
          period: 0,
          fee: 0
        }]
      }
    }

    return (
      <SafeAreaProvider>
        <AppContextProvider value={appContext}>
          <QueryClientProvider client={queryClient}>
            <Navigation colorScheme={colorScheme} />
          </QueryClientProvider>
        </AppContextProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
