export default function Contact(){
    return(
            <main>
        <div class="contact-form">
            <h2>Send us a message</h2>
            <form action="submit_form.php" method="POST">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button className="button">Send</button>
            </form>
        </div>
        
        <div class="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Address:</strong> 123 Restaurant Street, City, Country</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Email:</strong> info@restaurant.com</p>
        </div>
    </main>
    )
}