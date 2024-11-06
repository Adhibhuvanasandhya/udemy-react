import one from "../assets/images/sale img.jpg"
function Sale()
{
  return(
    <div className="sale-image">
        <img src={one} alt="Saleimage"/>
        <div className="sale-image__offer">
            <h2>
                Udemy flash sale! 24 hours to save
            </h2>
            <p>Get top courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
    </div>
  )
}

export default Sale