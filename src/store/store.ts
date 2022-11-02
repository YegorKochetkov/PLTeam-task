import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type PostType = {
	name: string;
	avatarUrl: string;
	message: string;
};

type AppStateType = {
	posts: PostType[];
	add: (post: PostType) => void;
};

const useAppStore = create<AppStateType>()(
	devtools(
		persist(
			(set) => ({
				posts: [
					{ name: 'Goga', avatarUrl: 'sfa', message: 'dasdfa dasfsd' },
					{ name: 'Toga', avatarUrl: 'DFS', message: 'deeeee eee' },
				],
				add: (post) => set((state) => ({ posts: [...state.posts, post] })),
			}),
			{
				name: 'plteam-posts',
			}
		)
	)
);

export default useAppStore;
