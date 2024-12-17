import styled from 'styled-components';

export const Container = styled.div`
	width: 17.13rem;
	height: 9.56rem;
	margin: 2.31rem 0 2.63rem;
	border-radius: 8px;
	background-color: #f1f1f1;
`;

export const Wrapper = styled.div`
	padding: 0.94rem;
`;

export const Img = styled.div`
	width: 100%;
	height: 6.25rem;
	background-color: #d9d9d9;
`;

export const Title = styled.div`
	width: 100%;
	height: fit-content;
	margin: 0 0 0.69rem;
	font-size: 1.5rem;
	font-weight: 700;
`;

export const InfoBox = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
`;

export const Category = styled.div`
	height: 1.19rem;
	display: flex;
	flex-direction: row;
	margin-bottom: 0.63rem;
	font-size: 1rem;
	font-weight: 400;

	&:nth-child(3) {
		margin-bottom: 0;
	}
`;

export const Name = styled.div`
	width: 4.44rem;
	line-height: normal;
`;

export const Content = styled.div`
	width: 10.38rem;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Type = styled.span`
	width: 4.13rem;
	height: 1.38rem;
	margin-right: 0.5rem;
	background-color: var(--blue-mute);
	border-radius: 8px;
	color: var(--blue-strong);
	font-size: 0.75rem;
	font-weight: 700;
	text-align: center;
	line-height: 1.38rem;
`;
