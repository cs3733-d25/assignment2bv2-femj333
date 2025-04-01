import List1 from "./list1";
import Table1 from "./table1";
import Form1 from "./form1";

const Hobby1 = () => {
    return (
        <>
            <p>
                Fem's hobby is playing and watching women's basketball. She is currently watching all
                the March Madness games. Her favorite team is UCONN WBB, and her favorite player is
                Azzi Fudd.
            </p>
            <div id={"uconnWbb"}>
                <img src="public/uconnwbb.jpg" alt="UCONN WBB starters" />
            </div>
            <List1 />
            <Table1 />
            <Form1 />
        </>
    )
}

export default Hobby1;
