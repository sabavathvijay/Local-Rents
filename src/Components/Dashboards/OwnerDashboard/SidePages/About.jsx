import React from 'react'
import './About.css'

const About = () => {
  return (
    // Main Container
    <div id='sideAbout'>

      {/* Title */}
      <div id="title">
        <h2 >
          Welcome to Our Services :
        </h2>
      </div>


      {/* Head */}

      <div className="subContainer">



        <div className="header">

          <div className="filters">
            <button>Car</button><button>Bike</button><button>Laptop</button><button>Land</button>
          </div>



        </div>





        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed eum perferendis accusantium ratione alias explicabo praesentium quisquam numquam. Eveniet commodi voluptate cum odio expedita alias beatae deleniti amet eligendi?
        </p>

      </div>



    </div>
  )
}

export default About