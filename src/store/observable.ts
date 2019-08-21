interface Observer<T> {
    (data: T): void;
}

export class Observable<T> {
    private observers: Observer<T>[] = [];

    addObserver(observer: Observer<T>) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer<T>) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    protected notify(data: T) {
        this.observers.forEach(observer => observer(data));
    }
}