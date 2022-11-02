import React from 'react';
import useAppStore from '@/store/store';
import './App.css';

function App() {
	const posts = useAppStore((state) => state.posts);
	const addNewPost = useAppStore((state) => state.add);

	console.log('🚀 ~ file: App.tsx ~ line 7 ~ posts', posts);
	return (
		<div className='bg-slate-200'>
			{posts.map((post) => post.name)}
			<button
				className='p-1 bg-red-100 mx-3 '
				onClick={() =>
					addNewPost({ name: 'New', avatarUrl: 'sdf', message: 'dd' })
				}>
				Add
			</button>
		</div>
	);
}

export default App;
