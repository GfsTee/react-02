import data from '../data/MOCK_DATA_2.json'
const { default: Card3 } = require("./Card3")

const Section3 = () => {
    return (
        <div className="grid">
            {/* <Card3 /> */}
            {data.map(user => {

                return <Card3
                    userFirst={user.first_name}
                    userLast={user.last_name}
                    userImg={user.image}
                    userColor={user.color}
                    userFullName={user.first_name + " " + user.last_name}
                    userFullName2={`${user.first_name} ${user.last_name}`}
                    key={user.id}
                // userFullName3={userFirst + " " + userLast} funktioniert nicht
                />
            })}
        </div>
    );
}

export default Section3;