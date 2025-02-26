import { useEffect, useRef } from 'react';
/**
 * The useUpdateEffect function is a custom hook that behaves like useEffect, but only runs on updates and not on initial mount.
 * It takes in an effect function and an optional dependency payments as parameters.
 * It returns nothing.
 */
const useUpdateEffect = (effect, deps) => {
	const isInitialMount = useRef(true);
	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		}

		return effect();
	}, deps);
};
export default useUpdateEffect;
