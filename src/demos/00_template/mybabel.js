class Movie extends React.Component{
    
    render(){
        return (
            <div>
                <h1>{this.props.title} {this.props.genre}</h1>
            </div>
        )
    }
}

Movie.defaultProps = {
    title: "Add name",
    genre: "Add genre"
};

ReactDOM.render(
    <div>
        <Movie title="Avatar" genre="Action"/>
        <Movie title="Bad Mom" genre="Rom-Com"/>
        <Movie title="Titanic" genre="History"/>
        <Movie/>
    </div>,
    document.getElementById("root")
);