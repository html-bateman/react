export default function Main(){
    return(
        <main>
            <section>
    <article id="hero">
      <h1 className="heading_shadow">SPECIAL OFFER</h1>
      <p>
        30% Off This Weekend
      </p>
      <a href="/book" className="cta"> Reserve now </a>
    </article>
</section>
  <section>
    <article>
      <h2>Our New Menu</h2>
      <img src="/grill.jpg"/>
      <p>
        Our menu consists of 12-15 seasonal items based on Italian, Greek, and Turkish culture.
      </p>
      <p>
        <a href="/menu">See our new menu</a>
      </p>
    </article>
    <article>
      <h2>Book a table</h2>
      <img src="/salad.jpg"/>
      <p>
        Reserve your table for an Italian, Greek, and Turkish dining experience.
      </p>
      <p>
        <a href="/book">Book your table now</a>
      </p>
    </article>
    <article>
      <h2>Opening Hours</h2>
      <img src="/head_chef.jpg"/>
      <p>
        The Little Lemon Restaurant is open 7 days a week, except for public holidays. 
      </p>
      <ul>
        <li>Mon - Fri: 2pm - 10pm</li>
        <li>Sat: 2pm - 11pm</li>
        <li>Sun: 2pm - 9pm</li>
      </ul>
    </article>
  </section>
        </main>
    )
}