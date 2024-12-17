import styled from 'styled-components';

export const Container = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
	background-color: var(--green-light);
`;

export const Wrapper = styled.div`
	width: 21rem;
	margin: 5.44rem auto 0;
`;

export const Title = styled.div`
	width: 21rem;
	margin: 2rem auto 1.5rem;
	font-size: 1.75rem;
	font-weight: 700;
	line-height: 2.06rem;

	&:last-child {
		margin-top: 3.13rem;
		margin-bottom: 0;
	}
`;

export const Highlight = styled.span`
	color: var(--blue-strong);
`;

export const BenefitCard = styled.div`
	width: 21rem;
	height: fit-content;
	display: inline-block;
	margin: 0 auto 2rem;
	background-color: #fff;
	border-radius: 8px;
`;

export const Desc = styled.div`
	width: 18rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 1rem 1rem 1.5rem;
	font-size: 1rem;
`;

export const Icon = styled.img`
	width: 2.25rem;
	height: 2rem;
`;

export const Benefit = styled.div`
	width: 14rem;
	font-size: 0.88rem;
`;

export const Li = styled.li``;

export const FixedButton = styled.div`
	margin-bottom: 3.13rem;
`;

export const ButtonContainer = styled.div`
	width: fit-content;
	height: fit-content;
	position: fixed;
	bottom: 2.5rem;
`;

export const ShareBox = styled.div`
	width: 100vw;
	height: 44.94rem;
	background-color: #fff;
	border-top-left-radius: 32px 32px;
	border-top-right-radius: 32px 32px;
`;
