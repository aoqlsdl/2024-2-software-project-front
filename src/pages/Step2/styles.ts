import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const Wrapper = styled.div`
	margin: 0 auto;
`;

export const Title = styled.div`
	width: 21rem;
	height: fit-content;
	margin-bottom: 1.75rem;
	font-size: 1.75rem;
	font-weight: 700;
	line-height: 2.06rem;
`;

export const ButtonContainer = styled.div`
	width: fit-content;
	height: fit-content;
	position: fixed;
	bottom: 3.38rem;
`;

export const ButtonGroup = styled.div`
	width: 12.13rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: auto;
	margin-bottom: 0.75rem;
`;
