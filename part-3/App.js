function App() {
    return (
        <div>
            <Person
                name="Sam"
                age={25}
                hobbies={["hiking", "Netflix", "music"]}
            />
            <Person
                name="Homer"
                age={38}
                hobbies={["bowling", "watching tv", "drinking beer"]}
            />
            <Person
            name="Lisa"
            age={8}
            hobbies={["reading", "saxophone", "eating vegetables"]}
            />
        </div>
    )
}