import * as expect from 'expect'
import * as math from './lib/math';

expect(math.basic.add(5,6)).toBe(11);
expect(math.basic.subtract(5,6)).toBe(-1);
expect(math.geometry.squareArea(5)).toBe(25);
