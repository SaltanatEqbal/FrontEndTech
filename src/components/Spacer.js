function Spacer({numberLines}) {

    const arr = new Array(numberLines).fill(0);
  
    return arr.map((value, index) => {
      return <br key={index}/>;
    });
  }
  
  export default Spacer;