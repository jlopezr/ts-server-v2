import { Greeter, Saludador } from '../index';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});

test('Mi Saludador', () => {
  expect(Saludador('Juan')).toBe('Hola Juan');
});
