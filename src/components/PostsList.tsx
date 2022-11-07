import React from 'react';
import tw from 'twin.macro';
import useAppStore from '@/store';
import Post from './Post';
import { AnimatePresence } from 'framer-motion';

const Posts = tw.ul`
	flex
	flex-col
	gap-3
`;

const TotalAmount = tw.div`
	self-end
`;

function PostsList() {
	const posts = useAppStore((state) => state.posts);
	const postCount = useAppStore((state) => state.postsCount);
	return (
		<Posts>
			<TotalAmount>Объявлений: {postCount()}</TotalAmount>
			<AnimatePresence>
				{posts.map((post, index) => (
					<Post
						avatar={post.avatar}
						name={post.name}
						message={post.message}
						key={post.name + index}
					/>
				))}
			</AnimatePresence>
		</Posts>
	);
}

export default PostsList;
