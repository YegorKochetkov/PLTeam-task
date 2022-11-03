import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type PostType = {
	name: string;
	avatarUrl: string;
	message: string;
};

type AppStateType = {
	posts: PostType[];
	postsCount: () => number;
	addNewPost: (post: PostType) => void;
};

const useAppStore = create<AppStateType>()(
	devtools(
		persist(
			(set, get) => ({
				posts: [],
				postsCount: () => get().posts.length,
				addNewPost: (post) =>
					set(
						(state) => ({
							posts: [post, ...state.posts],
						}),
						false,
						'addNewPost'
					),
			}),
			{
				name: 'plteam-posts',
			}
		)
	)
);

export default useAppStore;
