

export default class CustomError {
    readonly message: string;
    readonly code: string;


    public constructor(message: string, code: string) {
        this.message = message;
        this.code = code;
    }

}