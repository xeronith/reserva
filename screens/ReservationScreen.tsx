import ReservationSummary from "../components/ReservationSummary";
import RestaurantInfo from "../components/RestaurantInfo";
import CustomerInfo from "../components/CustomerInfo"

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReservationStackParamList } from "../types";

const Stack = createNativeStackNavigator<ReservationStackParamList>();

export default function ReservationScreen() {
  return <Stack.Navigator>
    <Stack.Screen name="Restaurant" component={RestaurantInfo} />
    <Stack.Screen name="Customer" component={CustomerInfo} />
    <Stack.Screen name="Summary" component={ReservationSummary} />
  </Stack.Navigator>
}
