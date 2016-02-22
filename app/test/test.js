import test from 'ava';
import ArrowController from '../components/arrow/arrow-controller';

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

test('Scope Controller', t => {
    let controller = new ArrowController();
    let result = controller.testFunction(2);
    t.is(3, result);
});
