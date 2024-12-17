import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	margin: 0 auto;
`;

export const StudentInfo = styled.div``;

export const Title = styled.div`
	width: 21rem;
	height: fit-content;
	margin-bottom: 1.75rem;
	font-size: 1.75rem;
	font-weight: 700;
	line-height: 2.06rem;
`;

export const InputBox = styled.div`
	height: 2.5rem;
	display: flex;
	flex-direction: row;

	&.student-name {
		margin-bottom: 1rem;
	}
`;

export const Category = styled.div`
	width: 3.13rem;
	height: 100%;
	line-height: 2.5rem;
	font-weight: 700;
`;

export const Input = styled.input`
	-webkit-appearance: none;
	width: 15.75rem;
	height: 100%;
	padding: 0 1rem;
	border: none;
	border-radius: 8px;
	background-color: var(--gray-light);

	&:focus {
		outline: none;
	}
`;

export const Regex = styled.span`
	margin-left: 3.13rem;
	font-size: 0.75rem;
`;

export const MajorInfo = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	line-height: 1.19rem;
	margin: 1.5rem auto;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const ButtonBox = styled.div`
	display: flex;
	flex-direction: row;
`;

export const SubTitle = styled.div`
	margin-bottom: 1rem;
	font-size: 1rem;
	font-weight: 700;
`;

export const AddButton = styled.div`
	width: 5.5rem;
	display: flex;
	flex-direction: row;
	font-size: 0.75rem;
	text-align: center;
	justify-content: center;
	cursor: pointer;
`;

export const ButtonContainer = styled.div`
	width: fit-content;
	height: fit-content;
	position: fixed;
	bottom: 3.38rem;
`;
