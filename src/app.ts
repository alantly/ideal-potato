import * as expect from 'expect'
import { add } from './lib/math/basic/add';
import { subtract } from './lib/math/basic/subtract';
import { squareArea } from './lib/math/geometry/square-area';

expect(add(5,6)).toBe(11);
expect(subtract(5,6)).toBe(-1);
expect(squareArea(5)).toBe(25);
