import React from 'react'
import "../Buildings/building.css"
const Buildings = () => {
  return (
    <div className='row'>
      <div className='row col-lg-12 col-md-6 col-sm-4 '>
        <h1 className="filter ">HERE YOU CAN VIEW THE DESIGN OF YOUR DREAM HOME</h1>

      </div>
      <div className="row name">
        <div className="col-lg-4 col-md-6 col-sm-12 dineshone" >
          <div className="card row">
            <div className="col-4 photo"> <img className="dinesh" src="./Assets/home.jpg" alt="123" /></div>
            <div className="col-8 content"> <h3>HOME</h3> <p className="life"> here you can see the design of your home  </p></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 dineshone" >
          <div className="card row">
            <div className="col-4 photo"> <img className="dinesh" src="./Assets/kitchen.jpg" alt="123" /></div>
            <div className="col-8 content"> <h3>KITCHEN</h3> <p className="life">  here you can see the design of your kitchen </p></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 dineshone" >
          <div className="card row">
            <div className="col-4 photo"> <img className="dinesh" src="./Assets/bedroom.jpg" alt="123" /></div>
            <div className="col-8 content"> <h3>BEDROOMS</h3> <p className="life">  here you can see the design of your bedrooms </p></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 dineshone" >
          <div className="card row">
            <div className="col-4 photo"> <img className="dinesh" src="./Assets/homesafty.jpg" alt="123" /></div>
            <div className="col-8 content"> <h3>SAFTY FEATURES</h3> <p className="life"> it includes smoke detectors,home security system,Fire extinguishers </p></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 dineshone" >
          <div className="card row">
            <div className="col-4 photo"> <img className="dinesh" src="./Assets/personalitems.jpg" alt="123" /></div>
            <div className="col-8 content"> <h3>PERSONAL ITEMS</h3> <p className="life">it includes cloths,shoes,personal care products </p></div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 dineshone" >
          <div className="card row">
            <div className="col-4 photo"> <img className="dinesh" src="./Assets/garden.jpg" alt="123" /></div>
            <div className="col-8 content"> <h3>GARDEN</h3> <p className="life"> here you can see the entire view of your garden </p></div>
          </div>
        </div>
      </div>

   <div className='normal'>    
      <div className=' row yourimage  '>
        <div className='  photoone'><img src='/Assets/home.jpg' alt='123' className='myimage' /> </div>
        <div className=' contentone'> <h3 className='g'> Home:</h3> <p className='p'> information about Home </p></div>
      </div>
      <div className='row yourimageone '>
        <div className='contentone1'> <h3 className='g1'> Kitchen:</h3> <p className='p'> information about Kitchen</p></div>
        <div className=' photoone1'><img src='/Assets/kitchen.jpg' alt='123' className='myimage' /> </div>

      </div>
      <div className='row yourimageone '>
      <div className=' photoone2'><img src='/Assets/bedroom.jpg' alt='123' className='myimage' /> </div>
        <div className='contentone2'> <h3 className='g2'> Bedrooms:</h3> <p className='p'> information about Bedroom</p></div>
      </div>
      <div className='row yourimageone '>
        <div className='contentone3'> <h3 className='g3'> Homesafty:</h3> <p className='p'> information about Homesafty</p></div>
        <div className=' photoone3'><img src='/Assets/homesafty.jpg' alt='123' className='myimage' /> </div>

      </div>
      <div className='row yourimageone '>
      <div className=' photoone4'><img src='/Assets/personalitems.jpg' alt='123' className='myimage' /> </div>
        <div className='contentone4'> <h3 className='g4'> Personalitems:</h3> <p className='p'> information about Personalitems</p></div>
      </div>
      <div className='row yourimageone '>
        <div className='contentone5'> <h3 className='g5'> Garden:</h3> <p className='p'> information about Garden</p></div>
        <div className=' photoone5'><img src='/Assets/garden.jpg' alt='123' className='myimage' /> </div>
        </div>
   </div>
    </div>
  )
}

export default Buildings 