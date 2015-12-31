import test from 'ava';
import m from './';

test(t => {
	t.true(m(305));
	t.false(m(405));
});
