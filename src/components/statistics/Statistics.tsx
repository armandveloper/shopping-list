import { Fragment, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IStatisticsItem } from '../../interfaces/statistics.interface';
import { startGetStatistics } from '../../redux/actions/statistics';
import { RootState } from '../../redux/store';
import { mainContent, scrollbarY } from '../../styles/mixins';
import Loader from '../ui/Loader';
import Progress from './Progress';

const Chart = lazy(() => import('./Chart'));

const StyledStatistics = styled.div`
	${mainContent};
	${scrollbarY};
	padding-bottom: 2rem;
	.headline {
		font-size: 2rem;
		font-weight: 500;
		margin: 0 0 3rem;
	}
	@media (min-width: 75em) {
		.headline {
			font-size: 2.4rem;
		}
	}
	.grid {
		margin-bottom: 3rem;
		display: grid;
		gap: 3rem 5rem;
		p {
			font-size: 1.5rem;
			margin: 0 0 1.4rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	@media (min-width: 37.5em) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 75em) {
		.grid {
			margin-bottom: 3rem;
		}
	}

	${Progress}:not(:last-child) {
		margin-bottom: 2.5rem;
	}
`;

function Statistics() {
	const dispatch = useDispatch();

	const { isLoading, total, topItems, topCategories, monthlySummary } =
		useSelector((state: RootState) => state.statistics);

	useEffect(() => {
		if (isLoading) {
			dispatch(startGetStatistics());
		}
	}, [dispatch, isLoading]);

	return (
		<StyledStatistics>
			{isLoading ? (
				<Loader size="lg" center={true} />
			) : (
				<>
					<div className="grid">
						<section>
							<h2 className="headline">Top Items</h2>
							{topItems.map((item: IStatisticsItem) => {
								const percent = Math.round(
									(item.count / total[0].count) * 100
								);
								return (
									<Fragment key={item._id}>
										<p>
											{item._id} <span>{percent}%</span>
										</p>
										<Progress
											color="primary"
											progress={percent}
										/>
									</Fragment>
								);
							})}
							{topItems.length === 0 && <p>No data to show</p>}
						</section>
						<section>
							<h2 className="headline">Top Categories</h2>

							{topCategories.map((cat: IStatisticsItem) => {
								const percent = Math.round(
									(cat.count / total[0].count) * 100
								);
								return (
									<Fragment key={cat._id}>
										<p>
											{cat._id} <span>{percent}%</span>
										</p>
										<Progress
											color="secondary"
											progress={percent}
										/>
									</Fragment>
								);
							})}
							{topCategories.length === 0 && (
								<p>No data to show</p>
							)}
						</section>
					</div>
					<section>
						<h2 className="headline">Monthly Summary</h2>
						<Suspense fallback={<Loader center={true} size="lg" />}>
							<Chart stats={monthlySummary} />
						</Suspense>
					</section>
				</>
			)}
		</StyledStatistics>
	);
}

export default Statistics;
