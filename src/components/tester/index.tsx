import { useVehiclesList } from '@/services/vehicles/hooks';
import React from 'react';

const Tester: React.FC = () => {
	const { data } = useVehiclesList();

	console.log('component', data, Object.keys(data));

	// console.log(1, data, Object.keys(data));

	return (
		<div>
			<div>
				{data && (
					<>
						{Object.values(data).map((el: any) => {
							const {
								tank_id,
								name,
								images: { preview },
							} = el;
							return (
								<div
									key={tank_id}
									style={{
										display: 'flex',
										alignItems: 'center',
										borderBottom: '1px solid',
									}}
								>
									{/* <img
										style={{
											width: 70,
											height: 70,
											objectFit: 'contain',
										}}
										src={preview}
										alt={name}
									/>
									{name} */}
								</div>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default Tester;
