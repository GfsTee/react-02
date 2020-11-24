import Card2 from "./Card2"
import myFakeData from '../data/MOCK_DATA.json'



const Section2 = () => {
    console.log(myFakeData);
    return (
        <section className="grid">
            {/* <Card2 />
            <Card2 />
            <Card2 /> */}
            {myFakeData.map(singleFakeData => <Card2
                userImg={singleFakeData.avatar}
                userName={singleFakeData.firs_name}
                userEmail={singleFakeData.email}
                userGender={singleFakeData.gender}
                key={singleFakeData.id}
            />)}
        </section>
    );
}

export default Section2;