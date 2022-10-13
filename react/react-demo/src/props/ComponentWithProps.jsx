import Baby from `./Baby`

function ComponentWithProps (props) {
    return(
        <>
            <h1>Child</h1>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.mood}</p>





        </>
    )
}
export default ComponentWithProps;