import styled from 'styled-components';

export const Container = styled.div`
	width: 21rem;
	height: 15.81rem;
	margin: 0 auto 2rem;
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	padding: 1rem;
	background-color: #fff;
	border-radius: 8px;
`;

export const Title = styled.div`
	font-size: 1.25rem;
	font-weight: 700;
`;

export const CourseBox = styled.div`
	width: 19rem;
	margin: 1rem 0;
	padding: 1rem 0;
	border-top: 1px solid #787878;
	border-bottom: 1px solid #787878;
`;

export const InfoBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	font-size: 1rem;
`;

export const InfoContent = styled.div`
	width: 45%;
	height: 1.19rem;
	display: flex;
	flex-direction: row;
	margin-bottom: 0.75rem;

	&:nth-child(5) {
		margin-bottom: 0;
	}
	&:last-child {
		margin-bottom: 0;
	}

	&.help-type {
		width: 100%;
	}
`;

export const InfoTitle = styled.div`
	width: 50%;
	line-height: 1.19rem;

	&.help-type {
		width: 22%;
	}
`;

export const InfoDesc = styled.span`
	width: 50%;
	display: flex;
	flex-direction: row;
	line-height: 1.19rem;

	&.help-type {
		width: auto;
	}
`;

export const Type = styled.span`
	width: 4.13rem;
	height: 1.38rem;
	margin-right: 0.5rem;
	background-color: var(--blue-mute);
	color: var(--blue-strong);
	font-size: 0.75rem;
	font-weight: 700;
	text-align: center;
	line-height: 1.38rem;
	border-radius: 8px;
`;

export const CourseContents = styled.div`
	padding: 1rem 0;
`;

export const StudentBox = styled.div`
	width: 19rem;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
