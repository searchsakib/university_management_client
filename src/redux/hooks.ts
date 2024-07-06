import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`

//? useAppDispatch was this:
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

//? I changed useAppDispatch to this(because of type error):
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
