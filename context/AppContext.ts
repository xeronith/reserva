import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

export interface AvailableTime {
    time: number;
    period: number;
    fee: number;
}

export interface Restaurant {
    name: string;
    image: string;
    latitude: number;
    longitude: number;
    availableTimes: [AvailableTime]
}

export interface Customer {
    name: string;
    email: string;
}

export interface Reservation {
    name: string;
    email: string;
    restaurant: string;
    time: number;
    period: number;
    fee: number;
}

export interface AppContextInterface {
    restaurant: Restaurant;
    customer: Customer;
    selectedTime: number;
}

const context = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = context.Provider;

export const AppContextConsumer = context.Consumer;