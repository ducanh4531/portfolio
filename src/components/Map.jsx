import {
	Annotation,
	ComposableMap,
	Geographies,
	Geography,
} from "react-simple-maps";

const Map = () => {
	return (
		<ComposableMap
			projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [-120.0, -15.0, 0],
				center: [-9, -4],
				scale: 750,
			}}
			// style={{ width: "100%", height: "100%" }}
		>
			<Geographies
				geography="/features.json"
				fill="#2a0857"
				stroke="#fff"
				strokeWidth={0.5}
			>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography key={geo.rsmKey} geography={geo} />
					))
				}
			</Geographies>
			<Annotation
				subject={[101.693207, 3.140853]}
				dx={-90}
				dy={-30}
				connectorProps={{
					stroke: "#fff",
					strokeWidth: 2,
					strokeLinecap: "round",
				}}
			>
				<text
					x="-8"
					textAnchor="end"
					alignmentBaseline="middle"
					fill="#fff"
				>
					{"Kuala Lumpur"}
				</text>
			</Annotation>
			<Annotation
				subject={[105.804817, 21.028511]}
				dx={-90}
				dy={-30}
				connectorProps={{
					stroke: "#fff",
					strokeWidth: 2,
					strokeLinecap: "round",
				}}
			>
				<text
					x="-8"
					textAnchor="end"
					alignmentBaseline="middle"
					fill="#fff"
				>
					{"Hanoi"}
				</text>
			</Annotation>
		</ComposableMap>
	);
};

export default Map;
