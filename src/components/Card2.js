

const Card2 = (props) => {
    console.log(props);
    return (
        <div className="user">
            <figure>
                <img src={props.userData.avatar} alt="" />
                <figcaption>{props.userData.firs_name} is {props.userData.gender} and {props.userData.gender === "Male" ? "his" : "her"} email is: {props.userData.email}</figcaption>
            </figure>
        </div>
    );
}

export default Card2;