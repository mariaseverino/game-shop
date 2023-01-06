function Main() {
    return (
        <section className="flex space-x-4">
            <div className="max-w-100 w-3/5">
                <img
                    src="https:\/\/www.freetogame.com\/g\/540\/thumbnail.jpg"
                    className="h-full w-full rounded-r3xl"
                />
            </div>
            <div className="bg-secundary rounded-r3xl pl-5 pr-5 pt-7 pb-7 h-auto max-w-360">
                <p className="font-medium text-2xl text-text">Overwatch 2</p>
                <p className="text-lg text-text">Blizzard Entertainment</p>
                <div className="bg-background p-2 w-24 flex justify-center rounded-2xl text-text mt-3 mb-3">
                    Shooter
                </div>
                <button className="bg-primary text-text w-full pt-3 pb-3 rounded-2xl ml-auto mr-auto flex justify-center mt-8 text-xl">
                    Obter
                </button>
            </div>
        </section>
    );
}

export default Main;
