// {
//     "id": 1,
//         "first_name": "Karilynn",
//             "last_name": "Busk",
//                 "email": "kbusk0@drupal.org",
//                     "gender": "Female",
//                         "color": "#8c5743",
//                             "image": "https://robohash.org/voluptatumeaet.jpg?size=50x50&set=set1"
// }

const Card3 = (props) => {
    // console.log(props);
    return (
        <figure>
            <img src={props.userImg} alt="" />
            <figcaption style={{ color: props.userColor }}>
                <p>Hallo ich bin {props.userFullName2}! </p>
            </figcaption>

        </figure>
    );
}

export default Card3;