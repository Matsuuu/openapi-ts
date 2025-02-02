// This file is auto-generated by @hey-api/openapi-ts

export type _110 = '1-10' | '11-20';

export const _110 = {
    '1_10': '1-10',
    '11_20': '11-20'
} as const;

export type MyFoo = 'myFoo' | 'myBar';

export const MyFoo = {
    my_foo: 'myFoo',
    my_bar: 'myBar'
} as const;

export type MyFoo2 = 'MyFoo' | 'MyBar';

export const MyFoo2 = {
    my_foo: 'MyFoo',
    my_bar: 'MyBar'
} as const;

export type Foo = 'foo' | 'bar' | null | '' | true | false;

export const Foo = {
    foo: 'foo',
    bar: 'bar',
    null: null,
    '': '',
    true: true,
    false: false
} as const;

export type Numbers = 100 | 200 | 300 | -100 | -200 | -300;

export const Numbers = {
    100: 100,
    200: 200,
    300: 300,
    '-100': -100,
    '-200': -200,
    '-300': -300
} as const;

export type ClientOptions = {
    baseUrl: string;
};