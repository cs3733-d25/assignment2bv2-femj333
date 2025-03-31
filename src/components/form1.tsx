const Form1 = () => {
    return (
        <>
            <h2>March Madness Form</h2>
            <form>
                <label htmlFor={"fav"}>Who is your favorite NCAA WBB team?</label>
                <input type="text" id="fav" />
                <br />
                <label htmlFor={"leastfav"}>Who is your least favorite NCAA WBB team?</label>
                <input type="text" id="leastfav" />
                <br />
                <p>Who's making the Final Four?</p>
                <input type="checkbox" id="UCONN" />
                <label htmlFor={"UCONN"}>UCONN</label>
                <br />
                <input type="checkbox" id="NotreDame" />
                <label htmlFor={"NotreDame"}>Notre Dame</label>
                <br />
                <input type="checkbox" id="SouthCarolina" />
                <label htmlFor={"SouthCarolina"}>South Carolina</label>
                <br />
                <input type="checkbox" id="USC" />
                <label htmlFor={"USC"}>USC</label>
                <br />
                <input type="checkbox" id="UCLA" />
                <label htmlFor={"UCLA"}>UCLA</label>
                <br />
                <input type="checkbox" id="Texas" />
                <label htmlFor={"Texas"}>Texas</label>
                <br />
                <input type="checkbox" id="NCState" />
                <label htmlFor={"NCState"}>NC State</label>
                <br />
                <input type="checkbox" id="Duke" />
                <label htmlFor={"Duke"}>Duke</label>
                <br />
                <input type="checkbox" id="LSU" />
                <label htmlFor={"LSU"}>LSU</label>
                <br />
                <br />
                Who will be the National Champion?
                <br />
                <input type="radio" id="uconnW" name="winner" />
                <label htmlFor={"uconnW"}>UCONN</label>
                <br />
                <input type="radio" id="uscW" name="winner" />
                <label htmlFor={"uscW"}>USC</label>
                <br />
                <input type="radio" id="scW" name="winner" />
                <label htmlFor={"scW"}>South Carolina</label>
                <br />
                <input type="radio" id="uclaW" name="winner" />
                <label htmlFor={"uclaW"}>UCLA</label>
                <br />
                <input type="radio" id="texasW" name="winner" />
                <label htmlFor={"texasW"}>Texas</label>
                <br />
                <input type="radio" id="diffW" name="winner" />
                <label htmlFor={"diffW"}>Other</label>
                <br />
                <br />
                <label htmlFor={"comments"}>Any comments?</label>
                <textarea id="comments" rows={5} cols={50} placeholder="..."></textarea>
                <br/>
                <label htmlFor={"grade"}>What grade are you in?</label>
                <select id="grade">
                    <option selected disabled>Select a grade</option>
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                    <option>Graduate</option>
                    <option>Other</option>
                </select>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form1;