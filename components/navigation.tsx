import React from 'react';
import { ROL, URL } from '../helpers/constants';
import IstvanNavigation from '../roles/Istvan/IstvanNavigation';
import AcolyteNavigation from '../roles/Acolyte/AcolyteNavigation';
import VillianNavigation from '../roles/Villian/VillianNavigation';
import MortimerNavigation from '../roles/Mortimer/MortimerNavigation';
import { io } from "socket.io-client";

const Navigation = () => {
  console.log("socket connection");
  const socket = io(URL.render);
  // const socket = io("http://192.168.0.24:3000/");

  socket.on("connect", () => {
    console.log("Connected at server with ID:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.error(err.message);
  });
  
  console.log(socket);

  return <>{setScreenByRol(ROL.ACOLYTE)}</>;
};

const setScreenByRol = (Rol: string) => {
  if (Rol === ROL.MORTIMER) {
    return <MortimerNavigation />;
  } else if (Rol === ROL.VILLIAN) {
    return <VillianNavigation />;
  } else if (Rol === ROL.ISTVAN) {
    return <IstvanNavigation />;
  } else if (Rol === ROL.ACOLYTE) {
    return <AcolyteNavigation />;
  }
};

export default Navigation;
