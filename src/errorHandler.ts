export type ErrorHandler = {
    message: string;
}

export const enum ErrorMessages {
    OutOfBounds = "Sorry, this move is not possible. Out of bounds",
    CrashDetector = "Sorry, this move is not possible. Vehicles will collide",
}

export const isError = (value: any): value is ErrorHandler => {
    return !!(value as ErrorHandler)?.message;
};

export function throwError(errorMessage: ErrorMessages): never {
    const error: ErrorHandler = {
        message: errorMessage
    };
    throw error;
}
