const Second = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "50vh",
          backgroundImage: "url('../../src/assets/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          paddingLeft: "60px",
          top: "30%",
        }}
      >
        <div
          style={{
            fontFamily: "cursive",
            color: "#8A53FF",
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          let talk
        </div>

        <div
          style={{
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          your next trip
        </div>

        <div
          style={{
            display: "flex",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          what going on to the city ! <br />
          your experinces about
        </div>
        <div
          style={{
            marginTop: "45px",
            display: "flex",
          }}
        >
          <button
            style={{
              backgroundColor: "#8A53FF",
              color: "white",
              borderRadius: "3px",
              height: "34px",
              border: "1px",
            }}
          >
            Share your story
          </button>
          <div
            style={{
              marginLeft: "40px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src="../../src/assets/Polygon 1.svg" width={"20px"}></img>
          </div>
          <div
            style={{
              marginLeft: "10px",
            }}
          >
            Watch highlights
          </div>
        </div>
      </div>
    </div>

    // <div
    //     style={{
    //         display:"flex",
    //         position:"relative",
    //     }}
    //  >
    //     <div
    //        style={{
    //            display:"flex",
    //            flexDirection:"column",
    //           position:"absolute",
    //             alignItems:'center'
    //         //   marginTop:"40px",
    //         //   marginLeft:"80px"

    //        }}
    //     >
    //     <h1>hey it me<br/>
    //     welcome to our <br/>
    //     page</h1><br/>
    //     Share your favourite<br/>
    //     destination for travel
    //     <div
    //        style={{
    //           height:"2.3vh",
    //           width:"1.2vw",
    //           backgroundImage:"url('../../src/assets/Header Profile.png')",
    //           backgroundRepeat:"cover",
    //           backgroundPosition:"center"
    //        }}
    //     ></div>

    // </div>
    //     <div
    //    style={{
    //      width:"100%",
    //      height:"50vh",
    //      backgroundImage:"url('../../src/assets/Frame 1.png')",
    //      backgroundSize:"cover",
    //      backgroundPosition:"center"
    // }}
    // ></div>

    // </div>
  );
};

export default Second;
