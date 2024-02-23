import React from "react";

const Teachers = ({ direction }) => {
  return (
    <div class={`teacher-block-${direction}`}>
      {direction === "even" && (
        <div class={`teacher-bio-${direction}`}>
          <h2>Teacher Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            aliquam libero. Integer hendrerit ipsum id augue efficitur congue.
            Ut tincidunt magna quis mi consequat, et ultrices libero accumsan.
            Donec rutrum nunc in nisi tincidunt, vitae eleifend mi sollicitudin.
            Phasellus ac odio sit amet orci aliquam suscipit. Integer
            scelerisque mauris nec lectus tincidunt, ut vestibulum elit
            efficitur. Vestibulum ut eros in purus iaculis venenatis. Nullam et
            eros non ex venenatis dapibus.
          </p>
        </div>
      )}
      <div
      
        style={{
          width: "auto",
          height: "auto",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
          }}
          class="teacher-image"
          src={require("../../assets/owner-banner.jpg")}
          alt="Teacher Image"
        />
      </div>
      {direction === "odd" && (
        <div class={`teacher-bio-${direction}`}>
          <h2>Teacher Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
            aliquam libero. Integer hendrerit ipsum id augue efficitur congue.
            Ut tincidunt magna quis mi consequat, et ultrices libero accumsan.
            Donec rutrum nunc in nisi tincidunt, vitae eleifend mi sollicitudin.
            Phasellus ac odio sit amet orci aliquam suscipit. Integer
            scelerisque mauris nec lectus tincidunt, ut vestibulum elit
            efficitur. Vestibulum ut eros in purus iaculis venenatis. Nullam et
            eros non ex venenatis dapibus.
          </p>
        </div>
      )}
    </div>
  );
};

export default Teachers;
