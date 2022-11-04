import React, { useMemo } from 'react';
import useAppStore from '@/store';
import tw from 'twin.macro';
import Post from './Post';

const Posts = tw.ul`
	flex
	flex-col
	gap-3
`;

function TopPosts() {
	const posts = useAppStore((state) => state.posts);
	const topPosts = useMemo(() => {
		return posts.slice(0, 5);
	}, [posts]);

	return (
		<Posts>
			{topPosts.map((post, index) => (
				<Post
					avatar={post.avatar}
					message={post.message}
					key={post.name + index}
				/>
			))}
		</Posts>
	);
}

export default TopPosts;
