import MainData from "../Components/MainData/MainData";
import Sidebar from "../Components/Sidebar/Sidebar";
import img from '../Assets/night.jpg';

function Home() {
    return(
        <div className="min-h-[100vh] px-8 py-8 flex flex-row justify-center items-stretch" style={{backgroundSize: 'cover', backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`}}>
                <Sidebar/>
                <MainData/>
        </div>
    );
}

export default Home;