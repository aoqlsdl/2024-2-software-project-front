import styled from 'styled-components';

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.div`
	width: 100%;
	max-width: 480px;
	height: 31.25rem;
	position: fixed;
	left: 50%;
	bottom: 0;
	// transform: translate(-50%, 0);
	background-color: #fff;
	border-top-left-radius: 22px 22px;
	border-top-right-radius: 22px 22px;

	animation: slideUp 0.25s ease forwards;
	@keyframes slideUp {
		from {
			transform: translate(-50%, 100%);
		}
		to {
			transform: translate(-50%, 0);
		}
	}
`;

export const ButtonGroup = styled.div`
	width: 22.44rem;
	display: flex;
	justify-content: space-between;
	margin: 0.5rem auto 0;
`;

export const TimeGroup = styled.div`
	width: 100%;
	height: 18rem;
	overflow: scroll;
`;

export const Select = styled.select`
	appearance: none; /* 기본 select 스타일 제거 */
	-webkit-appearance: none; /* Safari 대응 */
	-moz-appearance: none; /* Firefox 대응 */
	background-size: 12px;
	width: 5.13rem;
	height: 2.5rem;
	// margin: 0 0 1rem 1.25rem;
	padding: 0;
	border: none;
	background: url('/icons/icon_smallarrow.svg') no-repeat right 10px center;
	background-color: #fff;
	font-size: 1rem;
	font-weight: 700;

	&:focus {
		outline: none;
	}
`;

export const SelectGroup = styled.div`
	width: 19.56rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 1rem auto;
`;

export const Time = styled.select`
	-webkit-appearance: none; /* Safari 대응 */
	-moz-appearance: none; /* Firefox 대응 */
	background-size: 12px;
	width: 5.13rem;
	height: 2.5rem;
	padding: 0 1rem;
	border: none;
	border-radius: 8px;
	background-color: var(--gray-light);
	font-size: 1rem;
	font-weight: 700;
	text-align: center;
	color: #b2b2b2;

	&:focus {
		outline: none;
	}
`;

export const SelectTime = styled.div`
	width: 12.94rem;
	height: 2.5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-weight: 700;
`;

export const TimetableContainer = styled.div`
	width: 18.69rem;
	margin: 2rem auto 0;
	padding: 0.75rem 1.13rem;
	border-radius: 8px;
	background-color: #eee;
`;

export const TimetableWrapper = styled.div`
	width: 18.44rem;
	display: flex;
	flex-direction: row;
	justify-content: baseline;
`;

export const Title = styled.div`
	width: 4.31rem;
	font-size: 0.63rem;
	font-weight: 700;
`;

export const Timetable = styled.div`
	width: calc((100% - 4.31rem) / 2);
	font-size: 0.63rem;
	line-height: 0.75rem;
`;
