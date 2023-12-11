import { Artist, PartialSearchResult } from "@spotify/web-api-ts-sdk";
import { createCacheKey, makeRequest } from "../utils";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../consts";
import { useMemo } from "react";
import { api } from "../utils/api";

type ApiResponse = Required<Pick<PartialSearchResult, "artists">>;

type Params = {
  artistName: string;
};

const getCacheKey = (params: Params) => createCacheKey(QUERY_KEY.artistSearch, params);
const useFetch = (params: Params) => {
  return () => makeRequest(api.search(params.artistName, ["artist"]));
};

export const useArtistSearchData = (params: Params, options?: UseQueryOptions<ApiResponse, Error>) => {
  const fetchData = useFetch(params);
  return useQuery<ApiResponse, Error>(getCacheKey(params), fetchData, options);
};

export const useArtistSearchDataTestResult = (
  params: Params,
  options?: UseQueryOptions<ApiResponse, Error>
): Artist | undefined => {
  const query = useArtistSearchData(params, options);

  const artist = useMemo(() => {
    return query.data?.artists.items[0];
  }, [query.data]);
  return artist;
};
