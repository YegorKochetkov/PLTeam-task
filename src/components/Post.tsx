import React from 'react';
import { PostType } from '@/store';
import tw from 'twin.macro';
import UserPhoto from '/src/assets/user_icon.png';

const PostItem = tw.li`
	flex
	items-center
	gap-3
	px-3
	py-2
	bg-green-500
	rounded
	hover:cursor-pointer
	hover:bg-green-600
	transition-colors
`;

const Avatar = tw.div`
	overflow-hidden
	rounded-full
	border
	shrink-0
	w-10
	h-10
	p-[1px]
`;

const MessageContainer = tw.div`
	flex
	flex-col
	gap-0
	overflow-hidden
`;

const Name = tw.span`
	font-semibold
	truncate
`;

const Message = tw.span`
	truncate
`;

type PostPropsType = {
	avatar?: string;
	name?: string;
	message: string;
};

const Post = ({ avatar, message, name }: PostPropsType) => {
	return (
		<PostItem>
			<Avatar>
				<img src={avatar ? avatar : UserPhoto} alt='User' />
			</Avatar>
			<MessageContainer>
				<Name>{name ? name : null}</Name>
				<Message>{message}</Message>
			</MessageContainer>
		</PostItem>
	);
};

export default Post;
