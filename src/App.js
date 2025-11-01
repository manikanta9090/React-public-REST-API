import React from "react";

function Students() {
    const studentData = [
        { rollNo: "CSE01", name: "Manikanta", department: "CSE", marks: 92 },
        { rollNo: "CSE02", name: "Harsha", department: "CSE", marks: 99 },
        { rollNo: "CSE03", name: "Naveen", department: "CSE", marks: 95 },
        { rollNo: "CSE04", name: "Rohan", department: "ECE", marks: 90 },
    ];

    return ( <
        div style = {
            { textAlign: "center", marginTop: "30px" } } >
        <
        h2 > Student Information < /h2> <
        table border = "1"
        cellPadding = "10"
        align = "center" >
        <
        thead >
        <
        tr >
        <
        th > Roll No < /th> <
        th > Name < /th> <
        th > Department < /th> <
        th > Marks < /th> <
        /tr> <
        /thead> <
        tbody > {
            studentData.map((student, index) => ( <
                tr key = { index } >
                <
                td > { student.rollNo } < /td> <
                td > { student.name } < /td> <
                td > { student.department } < /td> <
                td > { student.marks } < /td> <
                /tr>
            ))
        } <
        /tbody> <
        /table> <
        /div>
    );
}

export default Students;