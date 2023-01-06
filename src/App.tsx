import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import Main from "./components/Main";
import PopularCard from "./components/PopularCard";
// import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const data = [
        {
            id: 540,
            title: "Overwatch 2",
            thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
            short_description:
                "A hero-focused first-person team shooter from Blizzard Entertainment.",
            game_url: "https://www.freetogame.com/open/overwatch-2",
            genre: "Shooter",
            platform: "PC (Windows)",
            publisher: "Activision Blizzard",
            developer: "Blizzard Entertainment",
            release_date: "2022-10-04",
            freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
        },
        {
            id: 521,
            title: "Diablo Immortal",
            thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
            short_description:
                "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
            game_url: "https://www.freetogame.com/open/diablo-immortal",
            genre: "MMOARPG",
            platform: "PC (Windows)",
            publisher: "Blizzard Entertainment",
            developer: "Blizzard Entertainment",
            release_date: "2022-06-02",
            freetogame_profile_url:
                "https://www.freetogame.com/diablo-immortal",
        },
        {
            id: 517,
            title: "Lost Ark",
            thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
            short_description:
                "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
            game_url: "https://www.freetogame.com/open/lost-ark",
            genre: "ARPG",
            platform: "PC (Windows)",
            publisher: "Amazon Games",
            developer: "Smilegate RPG",
            release_date: "2022-02-11",
            freetogame_profile_url: "https://www.freetogame.com/lost-ark",
        },
    ];

    return (
        <div>
            <Header />
            <div className="flex">
                <Main />
                <aside className="w-64 bg-background">
                    <div>
                        <div>Banner 1</div>
                        <div>Banner 2</div>
                        <div>Banner 3</div>
                    </div>
                </aside>
            </div>

            {/* <Main />
            <section className="ml-auto mr-auto w-3/5 min-w-s flex flex-col space-x-4 mt-6 mb-6">
                <h2 className="text-text">Popular</h2>
                <ul className="flex overflow-hidden">
                    {data.map((item) => (
                        <li>
                            <PopularCard />
                        </li>
                    ))}
                </ul>
            </section> */}
        </div>
    );
}

export default App;
