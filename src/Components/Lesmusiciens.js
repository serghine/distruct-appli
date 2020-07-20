import React,{Component} from "react";
import Musicien from "./Musicien";

class Lesmusiciens extends Component{





    render(){
        return(
            <>
            <h1>liste de musiciens</h1>
             <Musicien name="linking park" genre="Rock"/>
             <Musicien name="niklback" genre="Rock"/>
             <Musicien name="ntm" genre="Rap francais"/>
            </>
        )
    }
}

export default Lesmusiciens;