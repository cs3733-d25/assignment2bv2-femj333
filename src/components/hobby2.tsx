import List2 from "./list2"
import Table2 from "./table2"
import Form2 from "./form2"

const Hobby2 = () => {
    return (
        <>
            <p>
                Yara's hobby is photocard trading! A big part of K-pop albums are photocards- these card stock pieces roughly the size of
                a credit card. They're usually selfies of a specific member of that group. Based on how many people are in
                that group, and sometimes the particular album, the number of photocards in an album varies.
                The most crucial thing to know though, is that they never include every member-there is some sense of luck
                to who you get. That's where trading and collecting comes in- there's a big community that buy, sell, or trade
                (often abbreviated to BST) these photocards. However, it is important to know that there are
                photocards that are not just found in your everyday album that exist. In reality, there are
                thousands of photocards that pop up only at concert venues, or when you pre-order an album,
                or at special events.
            </p>
            <div id="PhotocardGathering">
                <img src="public/photocardtrading.png" width={300} alt="Photocard Trading" />
            </div>
            <List2 />
            <Table2 />
            <Form2 />
        </>
    )
}

export default Hobby2;
