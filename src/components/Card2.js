

const Card2 = (props) => {
    // console.log(props);
    return (
        <div className="user">
            <figure>
                <img src={props.userImg} alt="" />
                <figcaption>{props.userName} is {props.userGender} and {props.userGender === "Male" ? "his" : "her"} email is: {props.userEmail}</figcaption>
            </figure>
        </div>
    );
}

export default Card2;