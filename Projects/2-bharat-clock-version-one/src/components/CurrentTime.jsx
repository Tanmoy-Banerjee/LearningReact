function CurrentTime(){
    let time = new Date();
    return <p className="lead">THis is the current time: {time.toLocaleTimeString()}</p>
    }
    
    export default CurrentTime;