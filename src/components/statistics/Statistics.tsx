import styled from 'styled-components';
import { mainContent } from '../../styles/mixins';
import Progress from './Progress';

const StyledStatistics = styled.div`
	${mainContent};
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
	return (
		<StyledStatistics>
			<div className="grid">
				<section>
					<h2 className="headline">Top Items</h2>
					<p>
						Banana <span>20%</span>
					</p>
					<Progress color="primary" progress={20} />
					<p>
						Rice <span>20%</span>
					</p>
					<Progress color="primary" progress={20} />
					<p>
						Chicken 1Kg <span>20%</span>
					</p>
					<Progress color="primary" progress={20} />
				</section>
				<section>
					<h2 className="headline">Top Categories</h2>

					<p>
						Fruit and vegetables <span>20%</span>
					</p>
					<Progress color="secondary" progress={80} />
					<p>
						MEat and Fish <span>20%</span>
					</p>
					<Progress color="secondary" progress={80} />
					<p>
						Petsh <span>20%</span>
					</p>
					<Progress color="secondary" progress={80} />
				</section>
			</div>
			<section>
				<h2 className="headline">Monthly Summary</h2>
			</section>
		</StyledStatistics>
	);
}

export default Statistics;
