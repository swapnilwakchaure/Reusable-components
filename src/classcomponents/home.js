// import { Component } from "react";
// import SimpleReactValidator from 'simple-react-validator';

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       guestinfo: {
//       }
//     }
//     this.validator = new SimpleReactValidator();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div class="form-group col col-md-4">
//           <label class="color-black font-weight-bolder">Email ID<span class="color-red">*</span></label>
//           <input
//             // onChange={e => { this.setState({ guestinfo: { ...guestinfo, email: e.target.value } }) }}
//             onBlur={() => this.validator.showMessageFor('email')}
//             type="email" id="useremail" name="email" class="form-control" placeholder='home.Enter email Id'
//           />
//           {this.validator.message('email', this.state.guestinfo.email, 'required|email')}
//         </div>
//         <div className="form-group col col-md-4">
//           <label className="color-black font-weight-bolder">Enter Password<span className="color-red">*</span></label>
//           <input
//             onChange={e => { this.setState({ guestinfo: { ...this.state.guestinfo, password: e.target.value } }) }}
//             onBlur={() => this.validator.showMessageFor('password')}
//             type="password" id="password" name="password" className="form-control" placeholder='Enter Password'
//           />
//           {this.validator.message('password', this.state.guestinfo.password, 'required|min:8|max:15')}
//         </div>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }

// export default Home;

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home;