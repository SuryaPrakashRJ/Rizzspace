
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMobileButton,faCode,faChartSimple,faPalette,faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'

function WhatWeOffer() {
  return (
    <div className="App" id='services'>
        <p className="Heading">What We Offer</p>
        <section className='FlexContainer'>
            <div className='flex-items one'>
              <div className='vetor-image'>
                <FontAwesomeIcon icon={faMobileButton} className='icons'/>
              </div>
              <p className='title'>App Development</p>
              <span></span>
              <p className='content'>From concept to launch, our skilled app development team crafts seamless and innovative mobile and web applications ....</p>
              <p className="read-more">Read More</p>
            </div>
            <div className='flex-items two'>
                <div className='vetor-image'>
                  <FontAwesomeIcon icon={faCode} className='icons'/>
                </div>
                <p className='title'>Web Development</p>
                <span></span>
                <p className='content'>From concept to launch, our skilled app development team crafts seamless and innovative mobile and web applications ....</p>
                <p className="read-more">Read More</p>
              </div>
            <div className='flex-items three'>
                <div className='vetor-image'>
                <FontAwesomeIcon icon={faPalette} className='icons'/>
                </div>
                <p className='title'>UI/UX Designing</p>
                <span></span>
                <p className='content'>Our UI/UX designers turn user journeys into visually stunning and intuitive interfaces, elevating user engagement and .....</p>
                <p className="read-more">Read More</p>
              </div>
            <div className='flex-items four'>
              <div className='vetor-image'>
              <FontAwesomeIcon icon={faScrewdriverWrench} className='icons'/>
              </div>
              <p className='title'>Rebranding</p>
              <span></span>
              <p className='content'>Our UI/UX designers turn user journeys into visually stunning and intuitive interfaces, elevating user engagement and .....</p>
              <p className="read-more">Read More</p>
            </div>
            <div className='flex-items five'>
              <div className='vetor-image'>
              <FontAwesomeIcon icon={faChartSimple} className='icons'/>
              </div>
              <p className='title'>Market Research</p>
              <span></span>
              <p className='content'>Our UI/UX designers turn user journeys into visually stunning and intuitive interfaces, elevating user engagement and .....</p>
              <p className="read-more">Read More</p>             
            </div>
        </section>
    </div>
  );
}

export default WhatWeOffer;
