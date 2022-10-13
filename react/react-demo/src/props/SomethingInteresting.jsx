import ComponentWithProps from `./ComponentWithProps`

function Parent(){
    return(
        <>
        <h1>This is a Parent</h1>
        <ComponentWithProps
        name="Luke"
        age="28"
        mood="Meh"        
        />
        </>
    )
}

const PropComp = () =>{
    return(
    <>
        <Hello name= "Luke"/>
        <Hello name= "Willow"/>
        <Hello name= "Chloe"/>


    </>
    );
}

export default Parent