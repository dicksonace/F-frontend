type StringKeyOf<T> = Extract<keyof T, string>;
type CallbackType<T extends Record<string, unknown>, EventName extends StringKeyOf<T>> = T[EventName] extends unknown[] ? T[EventName] : [T[EventName]];
type CallbackFunction<T extends Record<string, unknown>, EventName extends StringKeyOf<T>> = (...props: CallbackType<T, EventName>) => unknown;
export declare class EventEmitter {
    private callbacks;
    on(event: string, fn: CallbackFunction<Record<string, unknown>, string>): this;
    emit(event: string, ...args: CallbackType<Record<string, unknown>, string>): this;
    off(event: string, fn?: CallbackFunction<Record<string, unknown>, string>): this;
}
export {};
