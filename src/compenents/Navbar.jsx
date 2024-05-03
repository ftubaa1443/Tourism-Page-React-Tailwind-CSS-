const Navbar = () => {
  return (
    <div
      style={{
        paddingTop: "10px",
        paddingLeft: "94px",
        paddingRight: "94px",
        borderBottom: "1px solid black",
        paddingBottom: "20px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center"
        }}
      >
        <div>
           <div style={{
             fontFamily:"Segoe Script",
             fontWeight: "normal",
             
           }}>Talking</div>
           <div style={{
            marginTop:"0px",
            color:"#8A53FF",
            fontWeight:"bold",
            fontSize:20
           }}>Travels</div>
        </div>
        <div style={{
            display:"flex"
        }}>
          <div style={{
             width:"6vw",
             color:"#8A53FF",
             fontSize:20
          }}
          >Home</div>
          <div style={{
             width:"6vw",
             fontSize:20
          }}
          >Body</div>
          <div style={{
             width:"6vw",
             fontSize:20
          }}
          >Gallery</div>
          <div style={{
             width:"6vw",
             fontSize:20
          }}
          >Contact</div>
        <div style={{
             width:"30px",
             height:"30px",
             backgroundImage:"url('../../src/assets/Header Profile.png')",
             backgroundSize: "cover",
             backgroundPosition: "center",
             marginRight:"15px"
          }}
        ></div>
        <div style={{
             width:"30px",
             height:"30px",
             backgroundImage:"url('../../src/assets/Header Search Icon.png')",
             backgroundSize: "cover",
             backgroundPosition: "center",
             
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
