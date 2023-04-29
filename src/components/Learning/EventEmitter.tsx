import React from 'react';
import ReactDOM, { render } from 'react-dom';

type EventHandler = (...args: any[]) => void;

class MyEventEmitter {
    private eventMap: Record<string, EventHandler[]> = {};

    emit(type: string, ...args: any[]) {
        const handlers = this.eventMap[type];
        if (handlers) {
            handlers.forEach(handler => handler(...args));
        }
    }

    on(type: string, handler: EventHandler) {
        if (!this.eventMap[type]) {
        this.eventMap[type] = [];
        }
        this.eventMap[type].push(handler);
    }

    off(type: string, handler: EventHandler) {
        if (this.eventMap[type]) {
            const index = this.eventMap[type].indexOf(handler);
            if (index >= 0) {
                this.eventMap[type].splice(index, 1);
            }
        }
    }
}