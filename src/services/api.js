import BackendApis from './request';

// TODO Custom la requête pour récupérer les données du backend
export const getData = async () => {
  const { data } = await BackendApis.get(`/api/data`);
  return data;
};
