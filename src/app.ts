import * as expect from 'expect'
import { add, subtract, squareArea } from './lib/math';

expect(add(5,6)).toBe(11);
expect(subtract(5,6)).toBe(-1);
expect(squareArea(5)).toBe(25);
