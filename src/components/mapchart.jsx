import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const MapChart = () => {
    const [data, setData] = useState([]);
    const [tooltipContent, setTooltipContent] = useState("");

    const geoUrl = "./features.json";

    useEffect(() => {
        csv("./ghg-emissions.csv").then((data) => {
            setData(data);
        });
    }, []);

    const colorScale = scaleLinear()
        .domain([0, 13000])
        .range(["#e0f3f8", "#08519c"]);

    return (
        <>
            <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 100,
                }}
            >
                <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
                {data.length > 0 && (
                    <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const d = data.find((s) => s.iso === geo.id);
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={d ? colorScale(d["2020"]) : "#F5F4F6"}
                                    onMouseEnter={() => {
                                        const emissionData = d ? `${d["2020"]} MtCO2e` : "Dados não disponíveis";
                                        setTooltipContent(`${geo.properties.name}: ${emissionData}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                />
                            );
                        })
                    }
                    </Geographies>
                )}
            </ComposableMap>
            <div className="tooltip-container h-12 text-center mt-[-264px]">
                {tooltipContent && (
                    <div className="tooltip-content font-ubuntu text-lg text-p1">
                        {tooltipContent}
                    </div>
                )}
            </div>
        </>
    );
};

export default MapChart;
