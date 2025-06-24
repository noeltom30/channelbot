
const inputParser = (message) => {
    message = message.replace(/\u00A0+/g, '');
    const lines = message.trim().split("\n")

    let fields = [];
    let result = {};
    const staffList = [
        ["28355", "Vicky Ramchandani"],
        ["27722", "Nidheesh Kunnath"],
        ["28455", "Nithin V"],
        ["28738", "Sneh Prateek"],
        ["28564", "Abhay Rai"],
        ["29639", "Priyanka Kumari"],
        ["26710", "Surbhi Kumari"],
        ["28694", "Abhilash A"],
        ["27543", "Deva Sagar"]
    ];


    lines.forEach(line => {
        if(line.trim().length != 0)
        fields.push(line.split(/[:\-]/))
    })

    // console.log(fields);
    let fieldnames = ['Name', 'Phone number', 'Project', 'Employee'];
    const numberFields = new Set([
        "number",
        "mobile number",
        "mobile no.",
        "client number",
        "client no",
        "customer number",
        "customer no",
        "contact no",
        "contact number"

    ]);
    const empidFields = new Set([

    ]);
    for (const field of fields) {

        field[1] = field[1].trim();
        field[0] = field[0].trim().toLowerCase();
        if (field[0].length == 0 && field[1].length == 0)
            continue;
        if (field[0] === 'client' || field[0] === 'client name') {
            result[0] = field[1];
        }
        for (const num of numberFields) {
            if (field[0] === num) {
                field[1] = field[1].replaceAll(" ", '')//fixes space between number
                // if(field.contains(+))
                if (field[1].length != 10 && !field[1].includes("+91"))
                    return { error: "Can't register this phone number" };
                else {
                    result[1] = field[1].slice(-10);
                }
            }
        }
        if (field[0] === 'project') {
            field[1] = field[1].toLowerCase();
            if (field[1].includes("town park") || field[i].includes("townpark"))
                field[1] = 'Townpark';
            result[2] = field[1];
        }
        if (field[0] === 'stm') {
            result[3] = field[1];
        }
        if (field[0] === 'id' || field[0] === 'empid' || field[0] === 'emp id' || field[0] === 'employee id') {
            staffList.forEach(staff => {
                if (staff[0] === field[1])
                    result[3] = staff[1];
            })
        }

    }
    for (let i = 0; i < 4; i++) {
        if (!result[i]) {
            let errorMessage = "Error submitting: missing " + fieldnames[i] + " details"
            return { error: errorMessage };
        }
    }
    return result;

}

if (require.main == module) {
    let result = inputParser(`Client name: Manju
Contact no: 7204194972
Project: Sobha Galera
STM name :Vicky
Emp ID: 28355
`)
    console.log(result);
}

module.exports = { inputParser };