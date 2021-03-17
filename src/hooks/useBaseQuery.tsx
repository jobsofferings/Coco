import { QueryKey, useQuery, UseQueryOptions } from "react-query";

const LAZY_QUERY_OPTIONS = {};

export interface useBaseQueryProps extends Omit<UseQueryOptions<any>, 'service'> {
  query: QueryKey
}

function useBaseQuery({
  query,
  ...queryOptions
}: useBaseQueryProps) {

  const { data, ...result }: any = useQuery(query, {
    ...LAZY_QUERY_OPTIONS,
    ...queryOptions,
  })

  return { data: data?.data, ...result };
  
}

export default useBaseQuery;