import React from "react";


class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0};
        // ref is a js object that holds current property (in this case the property of this image)
        this.imageRef = React.createRef();
    }

    componentDidMount() {
       this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10)
        this.setState({spans});
    }
     render(){
        const {description, urls} = this.props.image
        return (
            <div style={{ gridRowEnd: `${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description}
                src={urls.regular} />
            </div>
        )
    }
}

export default ImageCard