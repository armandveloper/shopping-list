import {
	LineChart,
	Line,
	Legend,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { getMonthFromNumber } from '../../helpers/date';
import { IStatisticsItem } from '../../interfaces/statistics.interface';

interface ChartProps {
	stats: IStatisticsItem[];
}

function Chart({ stats }: ChartProps) {
	console.log(stats);

	const month = new Date().getMonth(),
		start = month <= 5 ? 0 : 6,
		end = month <= 5 ? 6 : 12;

	const data = stats.slice(start, end).map((stat: IStatisticsItem) => ({
		name: getMonthFromNumber(stat._id),
		items: stat.count,
	}));
	return (
		<ResponsiveContainer width="100%" height={300}>
			<LineChart
				data={data}
				margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
			>
				<Line
					type="monotone"
					dataKey="items"
					stroke="var(--color-primary)"
				/>
				<CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip
					contentStyle={{
						backgroundColor: 'var(--color-bg-3)',
						border: 'none',
					}}
				/>
				<Legend />
			</LineChart>
		</ResponsiveContainer>
	);
}

export default Chart;
