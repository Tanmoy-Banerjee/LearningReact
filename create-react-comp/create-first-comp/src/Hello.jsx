function Hello(){

    let myName = "Tanmoy";
    let number = 456;
    let fullName = () =>{
        return 'Tanmoy Banerjee';
    }
    return <p>
        MessagesNo: {number} Hello, this is the future speaking. I am your master {fullName}
    </p>
}

export default Hello