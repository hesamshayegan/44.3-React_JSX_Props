function App () {
    return (
        <div>
            <Tweet
            name="Sam"
            username="Sam1400"
            date={new Date().toDateString()}
            message="This is the first user"
            />
            <Tweet
            name="Jack"
            username="Jack1005"
            date={new Date().toDateString()}
            message="This is the second user"
            />
            <Tweet
            name="Tim Garcia"
            username="TimGarcia0"
            date={new Date().toDateString()}
            message="Follow me on Twitter!"
            />            
        </div>
    )
}