const Last = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
      }}
    >
      <div
        style={{
          marginTop: "40px",
          width: "400px",
          height: "250px",
          backgroundImage:
            "url('../../src/assets/Featured Image Container.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "80px",
        }}
      ></div>
      <div
        style={{
          marginTop: "70px",
          marginLeft: "10px",
        }}
      >
        <div
          style={{
            fontFamily: "fantasy",
            color: "#8A53FF",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Feature Destination
        </div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          Our Swiss blogs
        </div>
        <div>
          Visiting the swiss alps? Want to know the requirements on <br />
          travelling to Switzerland during the pandemic? Our blog might <br />
          help!{" "}
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              marginTop: "15px",
              width: "18px",
              height: "18px",
              backgroundImage: "url('../../src/assets/Polygon 1.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              marginTop: "15px",
              marginLeft: "10px",
              color: "#8A53FF",
            }}
          >
            Watch Now{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;
