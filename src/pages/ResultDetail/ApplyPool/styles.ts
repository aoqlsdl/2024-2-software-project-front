import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	max-width: 480px;
	height: 100vh;
	background-color: var(--green-light);
	display: inline-block;
`;

export const Wrapper = styled.div`
	width: 21rem;
	margin: 4.69rem auto 0;
`;

export const Title = styled.div`
	font-size: 1.75rem;
	font-weight: 700;
`;

export const TelBox = styled.div`
	width: 20.88rem;
	height: 4.25rem;
	margin: 2.5rem auto;
`;

export const TelTitle = styled.div`
	width: 100%;
	height: 1.19rem;
	margin-bottom: 0.56rem;
	font-weight: 700;
`;
export const TelInput = styled.input`
	-webkit-appreance: none;
	width: 20.88rem;
	height: 2.5rem;
	padding-left: 0.88rem;
	border: none;
	border-radius: 8px;
	font-size: 1rem;

	&:focus {
		outline: none;
	}
`;

export const ApplyBox = styled.div`
	width: 20.94rem;
	height: 5.63rem;
	display: flex;
	flex-direction: column;
`;

export const ApplyText = styled.div`
	margin: 0 auto 0.75rem;
	font-size: 1.25rem;
	font-weight: 700;
	text-align: center;
	color: var(--blue-strong);
`;
