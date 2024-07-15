import "./App.css";
import homeData from "./data/home.json";
import Home from "./pages/Home/Home";
import BeverageInfo from "./pages/BeverageInfo/BeverageInfo";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { BeverageData } from "./types";

const App = () => {
    const [data, setData] = useState<BeverageData[] | null>(null);
    const [beverageID, setBeverageID] = useState<number | null>(null);

    const fetchBeveragesData = async () => {
        try {
            const response = await fetch("./data/beverages.json");
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchBeveragesData();
    }, []);

    return (
        <>
            <header>
                <Header onClick={() => setBeverageID(null)} />
            </header>
            <main className="container">
                {data && (
                    <>
                        <SearchBar
                            data={data}
                            setBeverageID={setBeverageID}
                            beverageID={beverageID}
                        />
                        {beverageID !== null ? (
                            <BeverageInfo data={data[beverageID]} />
                        ) : (
                            <Home data={homeData} />
                        )}
                    </>
                )}
            </main>
        </>
    );
};

export default App;
