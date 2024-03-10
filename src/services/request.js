import axios from 'axios';
import { BACKEND_URL } from '../config';

// TODO Custom la gestion des erreurs si besoin
const errorInterceptor = async (error) => {
  const status = error?.response?.status;
  const url = error?.response?.config?.url;
  const errorMessage = error?.response?.data?.message;
  const errorCode = error?.response?.data?.code;
  // TODO - gérer un affichage utilisateur
  // openErrNotificationWithIcon({
  //   title: "Une erreur s'est produite",
  //   description: errorMessage, status, errorCode, url
  // })
  console.error("Une erreur s'est produite", errorMessage, status, errorCode, url);
};

const backendApis = axios.create({ baseURL: BACKEND_URL });
backendApis.interceptors.response.use((c) => c, errorInterceptor);

backendApis.interceptors.request.use((configuration) => {
  // TODO récupérer le token utilisateur (dans le localStorage je pense)
  // const token = getSessionToken();
  // if (token) {
  //   configuration.headers['Authorization'] = `Bearer ${token}`;
  // }

  return configuration;
});

export default backendApis;
