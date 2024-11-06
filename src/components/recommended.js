import c1 from "../assets/images/c1.jpg"
import c2 from  "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
function Recommended()
{
  return(
    <div className="recommended">
        <h1 className="recommended__title"> Recommended for you</h1>
        <p> Pick the best fit</p>
        <div className="recommended__container">

            <div className="course-card">
                <img src={c1} alt='c1'/>
                <h3>2023 Phyton Data visaulisation Materclass</h3>
                <p>Col Steels</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del> 1999</del></p>
            </div>
            <div className="course-card">
                <img src={c2} alt='c2'/>
                <h3>Web Development Bootcamp 2023|advance</h3>
                <p>Col Steels</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>449 <del> 1999</del></p>
            </div>
            <div className="course-card">
                <img src={c3} alt='c3'/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steels</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del> 1999</del></p>
            </div>
            <div className="course-card">
                <img src={c4} alt='c4'/>
                <h3>Basic to advance Programming with EMC</h3>
                <p>Col Steels</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>449 <del> 1999</del></p>
            </div>
        </div>
    </div>
  )
}


export default Recommended