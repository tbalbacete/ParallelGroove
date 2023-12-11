import { SpotifyApi } from "@spotify/web-api-ts-sdk";

const clientId = process.env.REACT_APP_CLIENT_ID ?? import.meta.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET ?? import.meta.env.REACT_APP_CLIENT_SECRET;

export const api = SpotifyApi.withClientCredentials(clientId, clientSecret);
