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

	&.share {
		width: 20.69rem;
		margin: 0 auto 3.13rem;
	}
`;

export const Promotion = styled.div`
	margin: 1.75rem 0;
	font-size: 1.25rem;
	font-weight: 700;
`;

export const Highlight = styled.span`
	color: var(--blue-strong);
`;

export const ShareBox = styled.div`
	width: 100vw;
	height: fit-content;
	max-width: 480px;
	background-color: #fff;
	border-top-left-radius: 32px;
	border-top-right-radius: 32px;
	margin: 2.5rem auto;
	display: inline-block;
`;

export const Contents = styled.div`
	width: 23.44rem;
	height: fit-content;
	margin: 2rem auto;
`;

export const WingCardContainer = styled.div`
	width: fit-content;
	height: fit-content;

	margin: 0 auto 2rem;
`;
