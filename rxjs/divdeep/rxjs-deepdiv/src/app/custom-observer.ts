import { Observable } from "rxjs";

export class CustomObserver implements Observable<number> {
    next(data: number) {
        console.log('next', data);
    }
    error(error: string) {
        console.log('next', error);
    }
    complete(data: number) {
        console.log('completed');
    }
}