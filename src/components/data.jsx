import MapChart from "./mapchart";

const Data = () => {
    return (
        <div className="flex flex-col top-0">
            <h2 id="stats" className="font-bebas text-4xl justify-between items-center py-2 px-32 text-p1 mt-64 -mb-28">DADOS ESTATÍSTICOS</h2>
            <MapChart/>
        </div>
    );
};

export default Data;
