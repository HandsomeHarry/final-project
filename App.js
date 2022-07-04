import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Overview from "./components/Overview";
import NewVid from "./components/NewVid";
import Data from "./components/Data";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="New Video" component={NewVid} />
            <Tab.Screen name="Overview" component={Overview} />
            <Tab.Screen name="Export Data" component={Data} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
