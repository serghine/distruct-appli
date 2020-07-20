import React from 'react'



//cas distructuring avec une focyion 
//le desyructuring permet des recuperer de la data avec ube maniere plus rapide et moin de
// const Musicien=(props)=> {

//     console.log(props.name)
//     console.log(props.genre)

//     //le destructing
//    const{name,genre}=props;


//     return (
//         <>
//              <p>nom du groupe:{name}</p>
//             <p>Genre de musique:{genre}</p>  
//         </>
//     )
// }

//2euwime cas distructuring avec une classe
class Musicien extends React.Component{

render(){
    console.log(this.props.name)
    const {name,genre}=this.props;
    return(
        <>
        <p>nom du groupe:{name}</p>
    <p>Genre de musique:{genre}</p> 
        </>
    )
}

}

export default Musicien;
