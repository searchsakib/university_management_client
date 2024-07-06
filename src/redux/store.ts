import { Store, configureStore } from '@reduxjs/toolkit';

//? here, gave the 'Store' type, it wasn't included in the documentation
export const store: Store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
