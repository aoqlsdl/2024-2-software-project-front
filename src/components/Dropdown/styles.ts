import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Select = styled.select`
	appearance: none; /* 기본 select 스타일 제거 */
	-webkit-appearance: none; /* Safari 대응 */
	-moz-appearance: none; /* Firefox 대응 */
	background-size: 12px;
	width: 20.88rem;
	height: 2.5rem;
	margin-bottom: 1rem;
	padding: 0 1rem;
	border: none;
	background: url('/icons/icon_arrow.svg') no-repeat right 10px center;
	background-color: var(--gray-light);

	&:focus {
		outline: none;
	}

	&:nth-child(n) {
		margin-bottom: none;
	}
`;
