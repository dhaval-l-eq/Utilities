import { dateOptions, dateWithTimeOptions } from "../global/config";

export function formatDate(date) {
   return new Date(date).toLocaleDateString(undefined, dateOptions);
};

export function formatTime(date) {
   return new Date(date).toLocaleDateString(undefined, dateWithTimeOptions);
}