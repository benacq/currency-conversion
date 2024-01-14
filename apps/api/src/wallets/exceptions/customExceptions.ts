import { HttpException, HttpStatus } from "@nestjs/common";

export class ConversionException extends HttpException {
    constructor(public message: string) {
        super(message, HttpStatus.BAD_REQUEST)
    }
}

export class TransactionException extends HttpException {
    constructor(public message: string) {
        super(message, HttpStatus.BAD_REQUEST)
    }
}

export class NotFoundException extends HttpException {
    constructor(public message: string) {
        super(message, HttpStatus.NOT_FOUND)
    }
}

export class EmptyResourceException extends HttpException {
    constructor(public message: string) {
        super(message, HttpStatus.NOT_FOUND)
    }
}
