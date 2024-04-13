import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 900 // 15 minutes in seconds
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => {
        if (prevState.timeLeft === 0) {
          console.log('time out');
          clearInterval(this.timer);
          return { timeLeft: 0 };
        }
        return { timeLeft: prevState.timeLeft - 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  render() {
    return (
      <div>
        <h1>Countdown Timer</h1>
        <div>{this.formatTime(this.state.timeLeft)}</div>
      </div>
    );
  }
}

export default Contact;

// import { useState, useEffect } from "react";

// const Contact = () => {
//   const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTimeLeft => {
//         if (prevTimeLeft === 0) {
//             console.log('time out');
//           clearInterval(timer);
//           return 0;
//         }
//         return prevTimeLeft - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = time => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <div>{formatTime(timeLeft)}</div>
//     </div>
//   );
// };

// export default Contact;
