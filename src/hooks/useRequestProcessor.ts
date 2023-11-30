import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryFunction,
  MutationFunction,
} from 'react-query';

export function useRequestProcessor() {
  const queryClient = useQueryClient();

  const query = (key: string, queryFunction: QueryFunction, options = {}) => {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  };

  const mutate = (
    key: string,
    mutationFunction: MutationFunction,
    options = {}
  ) => {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(key),
      ...options,
    });
  };

  return { query, mutate };
}
