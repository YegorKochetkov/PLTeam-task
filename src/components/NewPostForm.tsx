import React from 'react';
import tw from 'twin.macro';
import useAppStore, { PostType } from '@/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { RiSave3Fill } from 'react-icons/ri';

const AddMessageForm = tw.form`
	flex
	flex-col
	gap-3
	w-full
	min-w-fit
	[&_button]:bg-gray-300
	[&_button:hover]:bg-gray-400
	[&_button:hover]:cursor-pointer
`;

const FormInput = styled.input<{ error?: string }>`
	${tw`
		px-2
		py-1
		border-b
		border-gray-500
		bg-inherit	
		rounded-sm
		focus:outline
		focus:outline-1
		focus:outline-offset-2
		focus:outline-green-500
	`}
	${(props) => props.error && tw`border-red-500`}
`;

const MessageTextInput = styled.textarea<{ error?: string }>`
	${tw`
		resize-none
		px-2
		py-1
		border
		border-gray-500
		rounded
		bg-inherit
		focus:outline
		focus:outline-1
		focus:outline-offset-4
		focus:outline-green-500
	`}
	${(props) => props.error && tw`border-red-500`}
`;

const FormSubmitButton = tw.button`
	flex
	justify-center
	items-center
	gap-1
	w-1/2
	min-w-fit
	p-2
	uppercase
	text-sm
	text-gray-600
	hover:text-black
	[&_svg]:hover:fill-black
	[&_svg]:h-5
	[&_svg]:w-auto
	[&_svg]:fill-gray-600
	[&_svg]:transition-colors
	rounded
	transition-colors
	focus:outline
	focus:outline-1
	focus:outline-offset-1
	focus:outline-green-500
	active:opacity-50
`;

const ErrorInfo = tw.label`
	min-h-[1.25rem]
	text-sm
	text-red-500
`;

function NewPostForm() {
	const addNewPost = useAppStore((state) => state.addNewPost);

	const formik = useFormik({
		initialValues: {
			name: '',
			avatar: '',
			message: '',
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.trim()
				.max(20, 'Имя должно быть не длиннее 20 символов')
				.required('Это поле обязательно'),
			message: Yup.string()
				.trim()
				.max(1000, 'Максимальная длина сообщения 1000 символов')
				.required('Это поле обязательно'),
		}),
		onSubmit: (values) => {
			addNewPost(values);
			formik.resetForm();
		},
	});

	return (
		<AddMessageForm onSubmit={formik.handleSubmit}>
			<ErrorInfo htmlFor='name'>
				{formik.touched.name && formik.errors.name ? formik.errors.name : ''}
			</ErrorInfo>
			<FormInput
				type='text'
				name='name'
				id='name'
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.name ? formik.errors.name : ''}
				placeholder='Ваше имя *'
				minLength={1}
				maxLength={50}
				required
			/>

			<FormInput
				type='text'
				name='avatar'
				value={formik.values.avatar}
				onChange={formik.handleChange}
				placeholder='Введите ссылку на аватарку'
			/>

			<ErrorInfo htmlFor='message'>
				{formik.touched.message && formik.errors.message
					? formik.errors.message
					: ''}
			</ErrorInfo>
			<MessageTextInput
				name='message'
				id='message'
				value={formik.values.message}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				error={formik.touched.message ? formik.errors.message : ''}
				placeholder='Текст поста'
				rows={10}
				minLength={1}
				maxLength={1000}
				required
			/>

			<FormSubmitButton type='submit' name='submit'>
				<RiSave3Fill />
				Добавить
			</FormSubmitButton>
		</AddMessageForm>
	);
}

export default NewPostForm;
