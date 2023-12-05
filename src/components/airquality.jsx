import ProgressCircle from "./progresscircle";


const AirQuality = () => {

    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className=" flex flex-col items-center top-0 w-full h-80 bg-p1">
                <p className="text-2xl mt-10 mb-10 font-ubuntu text-white text-center w-[50%]">A VIDA É UMA PEÇA DE TEATRO QUE NÃO PERMITE ENSAIOS.</p>
                <ProgressCircle percentage={100}/>
                <p className="text-2xl text-center text-p1 mt-10 w-[50%]">A QUALIDADE DO AR QUE VOCÊ RESPIRA INFLUENCIA NO SEU RESULTADO.</p>
            </div>
        </div>
    );
};

export default AirQuality;