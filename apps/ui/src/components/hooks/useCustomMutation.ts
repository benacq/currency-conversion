import { MutationFunction, UseMutationOptions, UseMutationResult, useMutation } from "@tanstack/react-query";
import CustomError from "../../core/custom-error";

export default function useCustomMutation<TResult, TPayload, Tcontext = unknown>(
    mutationFn: MutationFunction<TResult, TPayload>,
    options?:
        | Omit<
            UseMutationOptions<TResult, CustomError, TPayload, Tcontext>,
            "mutationFn"
        >
        | undefined
) {
    const mutation: UseMutationResult<
        TResult,
        CustomError,
        TPayload,
        Tcontext
    > = useMutation<TResult, CustomError, TPayload, Tcontext>(
        {
            mutationFn,
            ...options
        }
    );
    let errorMessage = undefined;

    if (mutation.isError) {
        errorMessage = mutation.error.message;
    }


    return {
        ...mutation,
        errorMessage,
    } as const;
}