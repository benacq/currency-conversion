import { QueryFunction, QueryKey, UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import CustomError from "../../core/custom-error";

export default function useCustomQuery<TResult>(
    queryKey: QueryKey,
    queryFn: QueryFunction<TResult, QueryKey>,
    options?:
        Omit<
            UseQueryOptions<
                TResult,
                CustomError,
                TResult,
                QueryKey
            >,
            "queryKey">
) {
    const query: UseQueryResult<TResult, CustomError> = useQuery(
        {
            queryKey,
            queryFn: queryFn,
            ...options,
        }
    );

    let errorMessage = undefined;

    if (query.isError) {
        errorMessage = query.error.message;
    }

    return { ...query, errorMessage };
}