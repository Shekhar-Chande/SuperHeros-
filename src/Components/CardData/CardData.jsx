import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './CardData.css'

function CardData() {
    const [character, setCharacter] = useState("");
    const [photo, setPhoto] = useState("");
    const [intelligence, setIntelligence] = useState("")
    const [gender, setGender] = useState("")
    const [height, setHeight]= useState("")
    const [weight, setWeight]= useState("")
    const [publisher, setPublisher]= useState("")
    const [alias, setAlias] = useState("")
    const [count, setCount] = useState(1)

    function increment(){
        setCount(count + 1)
    }   

    function decrement(){
        setCount(count - 1)
    }

    function fetchData() {

        fetch(`https://www.superheroapi.com/api.php/08eb1f50fb7c90e6771315ee89cb8a4e/${count}`)
            .then((raw_data) => {
                return raw_data.json();
            })
            .then((data) => {
                const res = data;
                for (let key in res) {
                    setCharacter(res.name)
                    setPhoto(res.image.url)
                    setIntelligence(res.powerstats.intelligence)
                    setGender(res.appearance.gender)
                    setHeight(res.appearance.height[0])
                    setWeight(res.appearance.weight[1])
                    setPublisher(res.biography.publisher)
                    setAlias(res.biography.aliases)
                }
            })
    }
    useEffect(() => {
        fetchData()
    }, [count])

   

    return (
        <div className="card-characters">
                <div className="pic">
                <img src={photo} alt="" />
                <div className="next-prev">
                    <button onClick={increment}>Next</button>
                    <button onClick={decrement}>Prev</button>
                </div>
               </div>
                <div className="name">
                   <span className="character">{character}</span>
                   
                {/* <div className="powers">
                    <div className=" stats">
                        <button id="stats">POWERSTATS</button>
                        <div className="one powerstats">
                                <table>
                                    <tr>
                                        <td>Intelligence :</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Strength :</td>
                                        <td></td>
                                    </tr>
                                    <tr><td>Speed :</td><td></td></tr>
                                    <tr><td>Durability :</td><td></td></tr>
                                    <tr><td>Power :</td><td></td></tr>
                                    <tr><td>Combat :</td><td></td></tr>
                                </table>
                        </div>
                    </div>
                    <div className="  bio">
                        <button>BIOGRAPHY</button>
                    </div>
                    <div className="  appear">
                        <button>APPEARANCE</button>
                    </div>
                    <div className="  connections">
                        <button>CONNECTIONS</button>
                    </div>
                </div> */}

                <div className="specs">
                    <ul>
                        <li>Gender :  <span className="one">{gender}</span></li>
                        <li>Height :  <span className="one">{height}</span></li>
                        <li>Weight :  <span className="one">{weight}</span></li>
                        <li>Publisher : <span className="one">{publisher}</span></li>
                        <li>Intelligence : <span className="one">{intelligence}</span></li>
                        <li>POWERS : <span className="one">{alias}</span></li>
                    </ul>
                 
                  

                </div>


                </div>


            </div>
     

    )
}

export default CardData