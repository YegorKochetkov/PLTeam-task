import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import AlicePhoto from '@/assets/Alice.png';
import BarreraPhoto from '@/assets/Barrera.png';
import JosefinaPhoto from '@/assets/Josefina.png';
import VelazquezPhoto from '@/assets/Velazquez.png';

export type PostType = {
	name: string;
	avatar?: string;
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
				posts: [
					{
						name: 'Velazquez',
						avatar: VelazquezPhoto,
						message: 'This is fourth post',
					},
					{
						name: 'Josefina',
						avatar: JosefinaPhoto,
						message: 'This is third post',
					},
					{
						name: 'Barrera',
						avatar: BarreraPhoto,
						message: 'This is second post',
					},
					{
						name: 'Alice',
						avatar: AlicePhoto,
						message: 'This is first post',
					},
				],
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
