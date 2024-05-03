import Navbar from "../compenents/Navbar";
import Second from "../compenents/Seconpart";
import Last from "../compenents/lastpart";

const Main = () => {
  return (
    <div style={{
        backgroundColor:"lightgrey"
    }}>
    <div
     
      style={{
        backgroundImage: 'url("../../src/assets/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
        <div style={{
            display:'flex'
        }}>
            <div
                style={{
                    width: '75%',
                    height:'100h',
                    backgroundColor:'white',
                    borderRadius:'16px',
                    marginLeft:'60px',
                    marginTop:'40px',
                    border:'0px solid black'
                }}
            >
                <div>
                   <Navbar/>
                   <Second/>
                   <Last/>
                </div>
            </div>
            <div
                 style={{
                    display:'flex',
                    width: '25%',
                   height:'100vh',
                   alignItems:'center',
                   justifyContent: 'center'
                }}
            >
                <div>
                     <div style={{
                         color:"white",
                         fontFamily:"Segoe Script",
                         fontWeight: "normal",
                         fontSize: 60
                     }}
                     >Talking </div>
                     <div style={{
                         color:"white",
                         fontWeight: 'bolder',
                         fontSize: 60
                     }}
                     >Travels</div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Main;
