import { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noResultFound: false,
            arrResult: []
        }
    }

    componentDidUpdate(prevProps, preState) {
        // update the value of no result found;

        if (this.state.arrResult.length > 0) {
            this.setState({ noResultFound: true });
        }

        // 11 API call are there

        fetch('https://example.api.com')
        .then((res) => res.json)
        .then((res) => this.setState({ arrResult: res }));

        // other 10 api calls and 10 remaing array was there.
    }

    render() {
        return (
            <div>
                <h1>Search Page</h1>
                {/* remaing ui will be there */}
            </div>
        )
   }
}

export default Search;


// In the above provided react class component code I need to update the value of "noResultFound" in componentDidUpdate but it not happens, it shows error: "maximum limit exceeded".
// verify the whole code and check it where is the error.