function Card(props) {
    return (
        <div class="card">
            <img src={props.img} class="card-img-top img-fluid" alt="..." style={{width:403, height:400}}/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.paragraph}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    );
}

Card.defaultProps = {
    title : "Default Card Title",
}

export default Card;