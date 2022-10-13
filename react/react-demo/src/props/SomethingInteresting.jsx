const Hello= props => {
    return (
        <h1>Hello, {props.name}</h1>

    );
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