

export default function Newsletter() {
  return (
    <section className="newsLetter-section">
        <div className="container">
            <div className="content">
                <h2 className="features-heading">Join the club and get the benefits</h2>
                <p className="feature-description">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                <form action="../">
                    <input type="text" placeholder="your@email.com" />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    </section>
  )
}