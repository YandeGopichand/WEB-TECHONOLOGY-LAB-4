function showCapital() {

    const country =
        document.getElementById("country").value;

    const capital =
        document.getElementById("capital");


    const capitals = {

        India: "New Delhi",

        USA: "Washington, D.C.",

        Japan: "Tokyo",

        France: "Paris",

        Australia: "Canberra"

    };


    if (country === "") {

        capital.textContent =
            "Select a country";

    } else {

        capital.textContent =
            capitals[country];

    }

}