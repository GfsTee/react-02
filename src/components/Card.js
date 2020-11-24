const Card = (props) => { // Den Parameter props übergeben!
    console.log(props);
    return (
        <div>
            <img src={props.img} alt="" />
            <p>{props.nameKey} ist {props.alterKey} Jahre alt!</p>
        </div>
    );
}

export default Card;