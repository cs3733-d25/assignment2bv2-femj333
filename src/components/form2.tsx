const Form2 = () => {
    return (
        <>
            <h2>Photocard Wishlist Form:</h2>
        <form>
            <label htmlFor="fullname">Enter Your Instagram Handle:</label>
            <input type="text" id="fullname"/>
            <br/>
            <label htmlFor="era">Enter Album/Era:</label>
            <input type="text" id="era"/>
            <br/>
            <br/>

            Price Range:
            <br/>
            <input type="checkbox" id="lowRange"/>
            <label htmlFor="lowRange">$1.00-$11.99</label>
            <input type="checkbox" id="mediumRange"/>
            <label htmlFor="mediumRange">$20.00-$39.99</label>
            <input type="checkbox" id="highRange"/>
            <label htmlFor="highRange">$40.00+</label>

            <br/>
            <br/>

            Member:
            <br/>
            <input type="radio" id="soobin" name="member" value="soobin"/>
            <label htmlFor="soobin">Choi Soobin</label>
            <br/>
            <input type="radio" id="yeonjun" name="member" value="yeonjun"/>
            <label htmlFor="yeonjun">Choi Yeonjun</label>
            <br/>
            <input type="radio" id="beomgyu" name="member" value="beomgyu"/>
            <label htmlFor="beomgyu">Choi Beomgyu</label>
            <br/>
            <input type="radio" id="taehyun" name="member" value="taehyun"/>
            <label htmlFor="taehyun">Kang Taehyun</label>
            <br/>
            <input type="radio" id="hueningkai" name="member" value="hueningkai"/>
            <label htmlFor="hueningkai">Huening Kai</label>

            <br/>
            <br/>

            Any Additional Notes:
            <br/>
            <textarea></textarea>

            <br/>
            <br/>
            Kind of Photocard:
            <select name="kind" id="">
                <option value="">Standard Album</option>
                <option value="">POB</option>
                <option value="">Lucky Draws</option>
                <option value="">Merchandise</option>
                <option value="">Fansign</option>
                <option value="">Broadcast</option>
            </select>

            <br/>
            <br/>
            <input type="submit" value="Submit"/>
            <link rel="stylesheet" href="public/mystyles.css"/>
        </form>
        </>
    )
}

export default Form2