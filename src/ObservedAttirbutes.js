import { UpdateClass } from 'decorator-class-update';

export function Observer(...args) {
    return function (target, key, descriptor) {

        if (key !== 'attributeChangedCallback') {
            throw '@Observer not found "attributeChangedCallback"';
        }

        UpdateClass.subscribe('attributes', target, () => args);

    }
}