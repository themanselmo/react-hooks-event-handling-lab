// Code Keypad Component Here
const Keypad = () => {   
    return (
        <>
            <input 
                type="password"
                onChange={(e => {console.log('Entering password...')})}
            />
        </>
    )
}

export default Keypad