import { useEffect } from "react";

const Home = () =>{


    useEffect(() => {
        // 👇️ use a ref (best)
        document.querySelectorAll(".blast").forEach((element) => {
            element.addEventListener("mouseover", (e) => bounce(e.target));
        });
      }, []);


    function bounce(letter) {
        console.log('hello')
        if (!letter.classList.contains("bounce")) {
            letter.classList.add("bounce");
            setTimeout(
                function () {
                    letter.classList.remove("bounce");
                },
                1000
            );
        }
    }
    return (
        <div className="body-name">
        <div>
            <h1 className="bouncing-letters" id="bouncing-letters">
                <span className="blast">H</span><span className="blast">I</span><span className="blast">,</span>
            </h1>
            <h1 className="bouncing-letters" id="bouncing-letters">
                <span className="blast">I</span><span className="blast">'</span><span className="blast">M</span> <span className="blast">Y</span><span className="blast">A</span><span className="blast">T</span><span className="blast">H</span><span className="blast">I</span><span className="blast">S</span><span className="blast">H</span>
            </h1>
            <h1 className="bouncing-letters">
                <span className="blast">B</span><span className="blast">A</span><span className="blast">C</span><span className="blast">K</span><span className="blast">E</span><span className="blast">N</span><span className="blast">D</span> <span className="blast">D</span><span className="blast">E</span><span className="blast">V</span><span className="blast">E</span><span className="blast">L</span><span className="blast">O</span><span className="blast">P</span><span className="blast">E</span><span className="blast">R</span> 
            </h1>    
        </div>
        <div>
            <p className="gold-p">Expertize in Python & Django</p>
        </div>
        
        </div>
        
    );
}
export default Home;