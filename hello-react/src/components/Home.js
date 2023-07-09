import Numbers from "./Numbers"

function Home() {
    return(
        <>
            <h2>ברוכים הבאים!</h2>;
            <Numbers min={10} max={50} />
            <Numbers min={30} max={75} />
            <Numbers min={70} max={100} />

        </>
    )
}

export default Home;