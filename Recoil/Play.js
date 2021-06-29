import { atom } from "recoil";

export const Player = atom({
    key: 'Play', // unique ID (with respect to other atoms/selectors)
    default:false, // default value (aka initial value)
  });