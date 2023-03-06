export interface IResponseData<T> {
    message: string;
    data: T;
}

export interface IResponseWOData {
    message: string;
}
