import * as SecureStore from 'expo-secure-store';
import * as Constants from 'expo-constants';

async function getOrCreateDeviceId() {
  let deviceId = await SecureStore.getItemAsync('deviceId');
  if (!deviceId) {
    deviceId = Constants.deviceId;
    await SecureStore.setItemAsync('deviceId', deviceId);
  }
  return deviceId;
}

export default function App() {
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => {
    (async () => {
      const id = await getOrCreateDeviceId();
      setDeviceId(id);
    })();
  }, []);

  return (
    <View>
      <Text>Device ID: {deviceId}</Text>
    </View>
  );
}
