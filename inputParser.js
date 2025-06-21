const inputParser = (message) => {
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
        fields.push(line.split(/[:\-]/))
    })

    console.log(fields);

    for (const field of fields) {

        field[1] = field[1].trim();
        field[0] = field[0].trim().toLowerCase();
        if (field[0].length == 0 && field[1].length == 0)
            continue;
        if (field[0] === 'client' || field[0] === 'client name') {
            result[0] = field[1];
        }
        if (field[0] === 'number' || field[0] === "mobile number" || field[0] === "mobile no." || field[0] === "client number") {
            field[1] = field[1].replaceAll(" ",'')//fixes space between number
            console.log(field[1])
            if (field[1].length != 10 && !field[1].includes("+91"))

                return { error: "Invalid phone number" };
            else {
                result[1] = field[1].slice(-10);
            }
        }
        if (field[0] === 'project') {
            field[1] = field[1].toLowerCase();
            if(field[1] === 'sobha townpark')
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
    return result;

}

if (require.main == module) {
    let result = inputParser(`Client name- Kevin 
Client number- 99160 37193
Project- Sobha Townpark 
STM- Deva Sagar
`)
    console.log(result);
}

module.exports = { inputParser };