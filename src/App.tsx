import React, { useMemo } from 'react';
import tw from 'twin.macro';
import NewPostForm from '@/components/NewPostForm';
import TopPosts from './components/TopPosts';
import PostsList from './components/PostsList';
import './App.css';

const AppContainer = tw.main`
	w-full
	h-full
	min-h-screen
	p-6
	bg-slate-200
`;

const AppContent = tw.div`
	grid
	grid-cols-1
	sm:grid-cols-2
	lg:grid-cols-[minmax(0,_3fr)_minmax(0,_2fr)]
	gap-6
	max-w-7xl
	mx-auto
`;

function App() {
	return (
		<AppContainer>
			<AppContent>
				<NewPostForm />
				<TopPosts />
				<PostsList />
			</AppContent>
		</AppContainer>
	);
}

export default App;
