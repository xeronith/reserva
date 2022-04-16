import { Reservation } from "../context/AppContext";
import { BASE_URL } from "./config";

export const getReservations = () => fetch(BASE_URL + "/api/reservations").then(data => data.json());

export const addReservation = (reservation: Reservation) => fetch(BASE_URL + '/api/reservations', {
    body: JSON.stringify(reservation),
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})